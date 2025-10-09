import Marking from "../models/Marking.js";
import Registration from "../models/Registration.js";
import Judge from "../models/Judge.js";
import { StudentLeaderboard } from "../models/StudentMarking.js";
import { OrganisationLeaderboard } from "../models/OrganisationMarking.js";
import { IndividualGroupLeaderboard } from "../models/IndividualGroupMarking.js";

// ✅ FIXED: Get registrations with applicationEntity AND headCategory filtering
// In markingController.js - Update getRegistrations function
export const getRegistrations = async (req, res) => {
  try {
    const { applicationEntity, headCategory, search } = req.body;

    console.log("📥 Request received:", {
      applicationEntity,
      headCategory,
      search,
    });

    const filter = {};

    // Filter by applicationEntity
    if (applicationEntity && applicationEntity.trim() !== "") {
      filter.applicationEntity = applicationEntity.trim();
    }

    // ✅ FIX: Improved headCategory filtering with case-insensitive matching
    if (headCategory && headCategory.trim() !== "" && headCategory !== "All") {
      // Normalize the headCategory for consistent matching
      let normalizedHeadCategory = headCategory.trim();
      
      // Handle common variations in category names
      if (normalizedHeadCategory.toLowerCase().includes('business services')) {
        normalizedHeadCategory = "Business Services (HC-BS)";
      }
      // Add other normalizations as needed
      
      filter.headCategory = { 
        $regex: new RegExp(normalizedHeadCategory.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') 
      };
    }

    // Search functionality
    if (search && search.trim() !== "") {
      filter.$or = [
        { solutionName: { $regex: search, $options: "i" } },
        { organizationName: { $regex: search, $options: "i" } },
        { contactPersonName: { $regex: search, $options: "i" } },
      ];
    }

    console.log("🔍 Applied Filter:", JSON.stringify(filter, null, 2));

    const registrations = await Registration.find(filter);

    console.log(`✅ Found ${registrations.length} registrations`);

    // Enhanced debugging for headCategory issues
    if (registrations.length === 0 && headCategory) {
      console.log("🔍 Debug: Checking what headCategory values exist in database...");
      
      const allWithSameEntity = await Registration.find({
        applicationEntity: applicationEntity?.trim()
      });
      
      const uniqueHeadCategories = [...new Set(allWithSameEntity.map(r => r.headCategory))].filter(Boolean);
      console.log("📋 All headCategories for this applicationEntity:", uniqueHeadCategories);
      
      // Check if there's a case sensitivity issue
      const matchingCategories = uniqueHeadCategories.filter(cat => 
        cat.toLowerCase().includes(headCategory.toLowerCase())
      );
      console.log("🔍 Potentially matching categories (case-insensitive):", matchingCategories);
    }

    res.json(registrations);
  } catch (err) {
    console.error("❌ Error in getRegistrations:", err);
    res.status(500).json({ error: err.message });
  }
};
// NEW: Get all unique head categories for a given application entity
// In markingController.js - Update getHeadCategories function
export const getHeadCategories = async (req, res) => {
  try {
    const { applicationEntity } = req.query;

    const filter = {};
    if (applicationEntity && applicationEntity !== "All") {
      filter.applicationEntity = applicationEntity;
    }

    // ✅ FIX: Only get categories that actually have projects
    const headCategories = await Registration.distinct("headCategory", filter);
    
    // ✅ FIX: Filter out null/empty and sort alphabetically
    const filtered = headCategories
      .filter((cat) => cat && cat.trim() !== "")
      .sort((a, b) => a.localeCompare(b));

    console.log(
      `📊 Found ${filtered.length} unique head categories for ${
        applicationEntity || "all entities"
      }`
    );
    console.log("Categories:", filtered);

    res.json(filtered);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark a project
export const markProject = async (req, res) => {
  try {
    const { projectId, applicationEntity, marks } = req.body;
    const judgeId = req.judgeId;

    const existing = await Marking.findOne({ projectId, judgeId });
    if (existing) {
      return res
        .status(400)
        .json({ message: "You have already marked this project" });
    }

    const project = await Registration.findById(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    const judge = await Judge.findById(judgeId);
    if (!judge) return res.status(404).json({ message: "Judge not found" });

    let totalMarks = 0;
    const markingData = {
      projectId,
      judgeId,
      applicationEntity,
      headCategory: project.headCategory || "",
    };

    if (applicationEntity === "Student") {
      // Student: 5 × 10 = 50
      markingData.studentMarks = {
        uniqueness: parseFloat(marks.uniqueness) || 0,
        proofOfConcept: parseFloat(marks.proofOfConcept) || 0,
        functionalitiesFeatures: parseFloat(marks.functionalitiesFeatures) || 0,
        quality: parseFloat(marks.quality) || 0,
        presentation: parseFloat(marks.presentation) || 0,
      };
      totalMarks = Object.values(markingData.studentMarks).reduce(
        (s, v) => s + v,
        0
      );
    } else if (applicationEntity === "Organisation") {
      // Organisation: 4 × 10 = 40
      markingData.organisationMarks = {
        uniqueness: parseFloat(marks.uniqueness) || 0,
        marketPotentialValuePublic:
          parseFloat(marks.marketPotentialValuePublic) || 0,
        functionalitiesFeatures: parseFloat(marks.functionalitiesFeatures) || 0,
        qualityTechnology: parseFloat(marks.qualityTechnology) || 0,
      };
      totalMarks = Object.values(markingData.organisationMarks).reduce(
        (s, v) => s + v,
        0
      );
    } else if (applicationEntity === "Individual or Group") {
      // Individual/Group: 4 × 10 = 40
      markingData.individualGroupMarks = {
        uniqueness: parseFloat(marks.uniqueness) || 0,
        marketPotentialValuePublic:
          parseFloat(marks.marketPotentialValuePublic) || 0,
        functionalitiesFeatures: parseFloat(marks.functionalitiesFeatures) || 0,
        qualityTechnology: parseFloat(marks.qualityTechnology) || 0,
      };
      totalMarks = Object.values(markingData.individualGroupMarks).reduce(
        (s, v) => s + v,
        0
      );
    }

    markingData.totalMarks = totalMarks;

    const marking = await Marking.create(markingData);

    await updateLeaderboard(projectId, applicationEntity, judge, project);

    res.json({
      success: true,
      message: "Marking submitted successfully",
      marking,
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "You have already marked this project" });
    }
    res.status(500).json({ error: err.message });
  }
};

// Update leaderboard
// UPDATED: Update leaderboard with percentage calculation
// Update leaderboard
// UPDATED: Update leaderboard with percentage calculation
async function updateLeaderboard(projectId, applicationEntity, judge, project) {
  const allMarks = await Marking.find({
    projectId,
    applicationEntity,
  }).populate("judgeId", "name email");

  if (allMarks.length === 0) return;

  const totalJudges = allMarks.length;
  let LeaderboardModel;
  let avgMarks = {};
  let judgeMarks = [];

  if (applicationEntity === "Student") {
    LeaderboardModel = StudentLeaderboard;
    avgMarks = {
      uniqueness: 0,
      proofOfConcept: 0,
      functionalitiesFeatures: 0,
      quality: 0,
      presentation: 0,
    };

    judgeMarks = allMarks.map((m) => ({
      judgeId: m.judgeId._id,
      judgeName: m.judgeId.name,
      judgeEmail: m.judgeId.email,
      marks: {
        uniqueness: parseFloat(m.studentMarks.uniqueness) || 0,
        proofOfConcept: parseFloat(m.studentMarks.proofOfConcept) || 0,
        functionalitiesFeatures:
          parseFloat(m.studentMarks.functionalitiesFeatures) || 0,
        quality: parseFloat(m.studentMarks.quality) || 0,
        presentation: parseFloat(m.studentMarks.presentation) || 0,
      },
      totalMarks: parseFloat(m.totalMarks) || 0,
      markedAt: m.createdAt,
    }));

    allMarks.forEach((m) => {
      avgMarks.uniqueness += parseFloat(m.studentMarks.uniqueness) || 0;
      avgMarks.proofOfConcept += parseFloat(m.studentMarks.proofOfConcept) || 0;
      avgMarks.functionalitiesFeatures +=
        parseFloat(m.studentMarks.functionalitiesFeatures) || 0;
      avgMarks.quality += parseFloat(m.studentMarks.quality) || 0;
      avgMarks.presentation += parseFloat(m.studentMarks.presentation) || 0;
    });
  } else if (applicationEntity === "Organisation") {
    LeaderboardModel = OrganisationLeaderboard;
    avgMarks = {
      uniqueness: 0,
      marketPotentialValuePublic: 0,
      functionalitiesFeatures: 0,
      qualityTechnology: 0,
    };

    judgeMarks = allMarks.map((m) => ({
      judgeId: m.judgeId._id,
      judgeName: m.judgeId.name,
      judgeEmail: m.judgeId.email,
      marks: {
        uniqueness: parseFloat(m.organisationMarks.uniqueness) || 0,
        marketPotentialValuePublic:
          parseFloat(m.organisationMarks.marketPotentialValuePublic) || 0,
        functionalitiesFeatures:
          parseFloat(m.organisationMarks.functionalitiesFeatures) || 0,
        qualityTechnology:
          parseFloat(m.organisationMarks.qualityTechnology) || 0,
      },
      totalMarks: parseFloat(m.totalMarks) || 0,
      markedAt: m.createdAt,
    }));

    allMarks.forEach((m) => {
      avgMarks.uniqueness += parseFloat(m.organisationMarks.uniqueness) || 0;
      avgMarks.marketPotentialValuePublic +=
        parseFloat(m.organisationMarks.marketPotentialValuePublic) || 0;
      avgMarks.functionalitiesFeatures +=
        parseFloat(m.organisationMarks.functionalitiesFeatures) || 0;
      avgMarks.qualityTechnology +=
        parseFloat(m.organisationMarks.qualityTechnology) || 0;
    });
  } else if (applicationEntity === "Individual or Group") {
    LeaderboardModel = IndividualGroupLeaderboard;
    avgMarks = {
      uniqueness: 0,
      marketPotentialValuePublic: 0,
      functionalitiesFeatures: 0,
      qualityTechnology: 0,
    };

    judgeMarks = allMarks.map((m) => ({
      judgeId: m.judgeId._id,
      judgeName: m.judgeId.name,
      judgeEmail: m.judgeId.email,
      marks: {
        uniqueness: parseFloat(m.individualGroupMarks.uniqueness) || 0,
        marketPotentialValuePublic:
          parseFloat(m.individualGroupMarks.marketPotentialValuePublic) || 0,
        functionalitiesFeatures:
          parseFloat(m.individualGroupMarks.functionalitiesFeatures) || 0,
        qualityTechnology:
          parseFloat(m.individualGroupMarks.qualityTechnology) || 0,
      },
      totalMarks: parseFloat(m.totalMarks) || 0,
      markedAt: m.createdAt,
    }));

    allMarks.forEach((m) => {
      avgMarks.uniqueness += parseFloat(m.individualGroupMarks.uniqueness) || 0;
      avgMarks.marketPotentialValuePublic +=
        parseFloat(m.individualGroupMarks.marketPotentialValuePublic) || 0;
      avgMarks.functionalitiesFeatures +=
        parseFloat(m.individualGroupMarks.functionalitiesFeatures) || 0;
      avgMarks.qualityTechnology +=
        parseFloat(m.individualGroupMarks.qualityTechnology) || 0;
    });
  }

  // Calculate averages
  Object.keys(avgMarks).forEach(
    (k) => (avgMarks[k] = avgMarks[k] / totalJudges)
  );
  const totalAvg = Object.values(avgMarks).reduce((s, v) => s + v, 0);

  // ✅ FIX: Calculate percentage based on application entity
  let percentageMarks = 0;
  if (applicationEntity === "Student") {
    // Student: Total out of 50, so (totalAvg / 50) * 100
    percentageMarks = (totalAvg / 50) * 100;
  } else {
    // Organisation and Individual/Group: Total out of 40, so (totalAvg / 40) * 100
    percentageMarks = (totalAvg / 40) * 100;
  }

  // ✅ FIX: Ensure percentageMarks is always a valid number
  percentageMarks = Number(percentageMarks.toFixed(3));
  
  // ✅ FIX: Handle NaN or Infinity
  if (!isFinite(percentageMarks)) {
    percentageMarks = 0;
  }

  console.log(`📊 Leaderboard Update:
    - Application Entity: ${applicationEntity}
    - Total Average Marks: ${totalAvg.toFixed(2)}
    - Percentage Marks: ${percentageMarks.toFixed(3)}%
    - Number of Judges: ${totalJudges}`);

  // ✅ FIX: Explicitly include percentageMarks in the update
  const updateData = {
    projectId,
    solutionName: project.solutionName,
    organizationName: project.organizationName,
    headCategory: project.headCategory || "",
    solutionCategory: project.solutionCategory || "",
    contactPersonName: project.contactPersonName,
    contactPersonMobile: project.contactPersonMobile,
    contactPersonEmail: project.contactPersonEmail,
    judgeMarks,
    averageMarks: avgMarks,
    totalAverageMarks: totalAvg,
    percentageMarks: percentageMarks, // ✅ Explicitly set percentage
    numberOfJudges: totalJudges,
  };

  console.log(`💾 Saving to database with percentageMarks: ${percentageMarks}`);

  await LeaderboardModel.findOneAndUpdate(
    { projectId },
    updateData,
    { upsert: true, new: true }
  );
  
  console.log(`✅ Leaderboard updated successfully for project ${projectId}`);
}
// ✅ Get Student Leaderboard with filters
export const getStudentLeaderboard = async (req, res) => {
  try {
    const { headCategory, solutionCategory } = req.query;
    const filter = {};

    // ✅ FIX: Improved headCategory filtering with case-insensitive search
    if (headCategory && headCategory.trim() !== "" && headCategory !== "All") {
      filter.headCategory = {
        $regex: new RegExp(
          headCategory.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "i"
        ),
      };
    }
    if (
      solutionCategory &&
      solutionCategory.trim() !== "" &&
      solutionCategory !== "All"
    ) {
      filter.solutionCategory = solutionCategory.trim();
    }

    console.log("🔍 Student Leaderboard Filter:", filter);

    const leaderboard = await StudentLeaderboard.find(filter).sort({
      totalAverageMarks: -1,
    });

    console.log(`📊 Found ${leaderboard.length} student leaderboard entries`);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// ✅ Get Organisation Leaderboard with filters
export const getOrganisationLeaderboard = async (req, res) => {
  try {
    const { headCategory, solutionCategory } = req.query;
    const filter = {};

    if (headCategory && headCategory.trim() !== "" && headCategory !== "All") {
      filter.headCategory = {
        $regex: new RegExp(
          headCategory.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "i"
        ),
      };
    }
    if (
      solutionCategory &&
      solutionCategory.trim() !== "" &&
      solutionCategory !== "All"
    ) {
      filter.solutionCategory = solutionCategory.trim();
    }

    console.log("🔍 Organisation Leaderboard Filter:", filter);

    const leaderboard = await OrganisationLeaderboard.find(filter).sort({
      totalAverageMarks: -1,
    });

    console.log(
      `📊 Found ${leaderboard.length} organisation leaderboard entries`
    );
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ✅ Get Individual Group Leaderboard with filters
export const getIndividualGroupLeaderboard = async (req, res) => {
  try {
    const { headCategory, solutionCategory } = req.query;
    const filter = {};

    if (headCategory && headCategory.trim() !== "" && headCategory !== "All") {
      filter.headCategory = { 
        $regex: new RegExp(headCategory.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') 
      };
    }
    if (solutionCategory && solutionCategory.trim() !== "" && solutionCategory !== "All") {
      filter.solutionCategory = solutionCategory.trim();
    }

    console.log("🔍 Individual Group Leaderboard Filter:", filter);

    const leaderboard = await IndividualGroupLeaderboard.find(filter).sort({
      totalAverageMarks: -1,
    });
    
    console.log(`📊 Found ${leaderboard.length} individual/group leaderboard entries`);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const checkMarking = async (req, res) => {
  try {
    const { projectId } = req.params;
    const judgeId = req.judgeId;
    const marking = await Marking.findOne({ projectId, judgeId });
    res.json({ hasMarked: !!marking, marking: marking || null });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProjectMarkings = async (req, res) => {
  try {
    const { projectId } = req.params;
    const markings = await Marking.find({ projectId }).populate(
      "judgeId",
      "name email"
    );
    res.json(markings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
