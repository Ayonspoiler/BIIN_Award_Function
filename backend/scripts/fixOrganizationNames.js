import mongoose from "mongoose";
import dotenv from "dotenv";
import Registration from "../models/Registration.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const fixOrganizationNames = async () => {
  try {
    // Find all registrations with empty/null organization names ONLY
    const emptyOrgRecords = await Registration.find({
      applicationEntity: { $in: ["Organisation", "Individual or Group"] },
      $or: [
        { organizationName: "" },
        { organizationName: null },
        { organizationName: { $exists: false } },
      ],
    });

    console.log(
      `Found ${emptyOrgRecords.length} records with empty organization names\n`
    );

    let updated = 0;
    let skipped = 0;

    for (const record of emptyOrgRecords) {
      // Double-check that organizationName is actually empty
      if (record.organizationName && record.organizationName.trim() !== "") {
        console.log(
          `⏭️  Skipping (already has name): ${record.organizationName}`
        );
        skipped++;
        continue;
      }

      let newName = "";

      // Priority 1: Extract from company profile
      if (record.companyProfile && record.companyProfile.trim()) {
        const lines = record.companyProfile.split("\n");
        const firstMeaningfulLine = lines.find(
          (line) => line.trim().length > 10 && line.trim().length < 150
        );
        if (firstMeaningfulLine) {
          newName = firstMeaningfulLine.trim();
        }
      }

      // Priority 2: Use organizational leader name
      if (
        !newName &&
        record.organizationalLeaderName &&
        record.organizationalLeaderName.trim()
      ) {
        newName = `${record.organizationalLeaderName.trim()}'s Organization`;
      }

      // Priority 3: Use contact person name
      if (
        !newName &&
        record.contactPersonName &&
        record.contactPersonName.trim()
      ) {
        newName = `${record.contactPersonName.trim()}'s Organization`;
      }

      // Priority 4: Use solution name
      if (!newName && record.solutionName && record.solutionName.trim()) {
        newName = record.solutionName.trim();
      }

      // Fallback
      if (!newName) {
        newName = "Unnamed Organization";
      }

      // Update ONLY the organizationName field
      await Registration.updateOne(
        { _id: record._id },
        { $set: { organizationName: newName } }
      );

      updated++;
      console.log(
        ` Updated: "${record.solutionName?.substring(
          0,
          50
        )}..." -> "${newName}"`
      );
    }

    console.log(`\nSummary:`);
    console.log(`    Updated: ${updated}`);
    console.log(`    Skipped: ${skipped}`);
    console.log(`    Total processed: ${emptyOrgRecords.length}`);

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

fixOrganizationNames();
