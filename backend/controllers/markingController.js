import Marking from "../models/Marking.js";
import Registration from "../models/Registration.js";
import Judge from "../models/Judge.js";
import { StudentLeaderboard } from "../models/StudentMarking.js";
import { OrganisationLeaderboard } from "../models/OrganisationMarking.js";
import { IndividualGroupLeaderboard } from "../models/IndividualGroupMarking.js";

// Get registrations - NO HEAD CATEGORY NEEDED
// Get registrations - Entity-based filtering ONLY
export const getRegistrations = async (req, res) => {
  try {
    const { applicationEntity, search } = req.body;

    const filter = {};
    
    // Only filter by applicationEntity - no head/solution category needed
    if (applicationEntity) {
      filter.applicationEntity = applicationEntity;
    }

    // Search functionality
    if (search) {
      filter.$or = [
        { solutionName: { $regex: search, $options: "i" } },
        { organizationName: { $regex: search, $options: "i" } },
        { contactPersonName: { $regex: search, $options: "i" } },
      ];
    }

    const registrations = await Registration.find(filter);
    res.json(registrations);
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
      criteriaTwo: 0,
      functionalitiesFeatures: 0,
      qualityTechnology: 0,
    };

    judgeMarks = allMarks.map((m) => ({
      judgeId: m.judgeId._id,
      judgeName: m.judgeId.name,
      judgeEmail: m.judgeId.email,
      marks: {
        uniqueness: parseFloat(m.organisationMarks.uniqueness) || 0,
        criteriaTwo:
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
      avgMarks.criteriaTwo +=
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
      criteriaTwo: 0,
      functionalitiesFeatures: 0,
      qualityTechnology: 0,
    };

    judgeMarks = allMarks.map((m) => ({
      judgeId: m.judgeId._id,
      judgeName: m.judgeId.name,
      judgeEmail: m.judgeId.email,
      marks: {
        uniqueness: parseFloat(m.individualGroupMarks.uniqueness) || 0,
        criteriaTwo:
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
      avgMarks.criteriaTwo +=
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

  await LeaderboardModel.findOneAndUpdate(
    { projectId },
    {
      projectId,
      solutionName: project.solutionName,
      organizationName: project.organizationName,
      headCategory: project.headCategory,
      solutionCategory: project.solutionCategory,
      contactPersonName: project.contactPersonName,
      contactPersonMobile: project.contactPersonMobile,
      contactPersonEmail: project.contactPersonEmail,
      judgeMarks,
      averageMarks: avgMarks,
      totalAverageMarks: totalAvg,
      numberOfJudges: totalJudges,
    },
    { upsert: true, new: true }
  );
}

// Get leaderboards
export const getStudentLeaderboard = async (req, res) => {
  try {
    const leaderboard = await StudentLeaderboard.find().sort({
      totalAverageMarks: -1,
    });
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOrganisationLeaderboard = async (req, res) => {
  try {
    const { headCategory, solutionCategory } = req.query;
    const filter = {};
    if (headCategory) filter.headCategory = headCategory;
    if (solutionCategory) filter.solutionCategory = solutionCategory;

    const leaderboard = await OrganisationLeaderboard.find(filter).sort({
      totalAverageMarks: -1,
    });
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getIndividualGroupLeaderboard = async (req, res) => {
  try {
    const { headCategory, solutionCategory } = req.query;
    const filter = {};
    if (headCategory) filter.headCategory = headCategory;
    if (solutionCategory) filter.solutionCategory = solutionCategory;

    const leaderboard = await IndividualGroupLeaderboard.find(filter).sort({
      totalAverageMarks: -1,
    });
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
