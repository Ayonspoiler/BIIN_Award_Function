import fs from "fs";
import mongoose from "mongoose";
import csv from "csv-parser";
import dotenv from "dotenv";
import Registration from "../models/Registration.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

const filePath = "./scripts/registration.csv";

const importCSV = async () => {
  const results = [];
  let headers = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("headers", (headerList) => {
      headers = headerList;
      console.log("📋 CSV Headers found:");
      headerList.forEach((header, index) => {
        console.log(`${index}: "${header}" (length: ${header.length})`);
      });
    })
    .on("data", (data) => {
      if (results.length === 0) {
        console.log("\n🧾 First row sample data:");
        console.log(JSON.stringify(data, null, 2));
      }
      results.push(data);
    })
    .on("end", async () => {
      console.log(`\n📦 Total rows to import: ${results.length}`);

      let addedCount = 0;
      let skippedCount = 0;
      let errorCount = 0;

      try {
        for (let i = 0; i < results.length; i++) {
          const row = results[i];

          // Trim all string values
          const trimmedRow = {};
          Object.keys(row).forEach((key) => {
            trimmedRow[key] =
              typeof row[key] === "string" ? row[key].trim() : row[key];
          });

          // Handle possible variations in column names
          const organizationName =
            trimmedRow["Name of Organization / Individual"] ||
            trimmedRow["Name of Organization/ Individual"] ||
            trimmedRow["Name of Organization /Individual"] ||
            trimmedRow["Name of Organization/Individual"] ||
            "";

          const registrationData = {
            applicationEntity: trimmedRow["Application Entity"] || "",
            headCategory: trimmedRow["Head Category"] || "",
            solutionCategory: trimmedRow["Solution Category"] || "",
            crossCategory: trimmedRow["Cross Category (Optional)"] || "",
            technologyCategory:
              trimmedRow["Technology Category (Optional)"] || "",
            email: trimmedRow["Email Address of Applicant"] || "",
            solutionName: trimmedRow["Solution Name"] || "",
            organizationName: organizationName,
            dateOfEstablishment:
              trimmedRow["Date of Establishment of the Organization"] || "",
            sizeOfOrganization: trimmedRow["Size of the Organization"] || "",
            address: trimmedRow["Address"] || "",
            district: trimmedRow["District"] || "",
            website: trimmedRow["Website"] || "",
            telephone: trimmedRow["Telephone"] || "",
            contactPersonName: trimmedRow["Name of the Contact Person"] || "",
            contactPersonDesignation:
              trimmedRow["Designation of the Contact Person"] || "",
            contactPersonMobile:
              trimmedRow["Mobile of the Contact Person"] || "",
            contactPersonEmail:
              trimmedRow["E-mail of the Contact Person"] || "",
            contactPersonPhone: trimmedRow["Phone of the Contact Person"] || "",
            organizationalLeaderName:
              trimmedRow["Name of the Organizational Leader"] || "",
            organizationalLeaderEmail:
              trimmedRow["Email of the Organizational Leader"] || "",
            companyProfile: trimmedRow["Company Profile"] || "",
            teamInformation: trimmedRow["Team Information"] || "",
            solutionDescription: trimmedRow["Solution Description"] || "",
            uniqueness: trimmedRow["Uniqueness"] || "",
            functionalityFeatures: trimmedRow["Functionality & Features"] || "",
            qualityTechnology:
              trimmedRow["Quality / Application of Technology"] || "",
          };

          // Validate required fields
          if (
            !registrationData.solutionName ||
            !registrationData.applicationEntity
          ) {
            console.log(
              `\n Row ${
                i + 1
              }: Missing critical data (solution name or entity)`
            );
            errorCount++;
            continue;
          }

          try {
            //  Check for duplicate based on: applicationEntity + headCategory + solutionName
            // This ensures same solution name under same entity/category is considered duplicate
            const filter = {
              applicationEntity: registrationData.applicationEntity,
              headCategory: registrationData.headCategory,
              solutionName: registrationData.solutionName,
            };

            const existing = await Registration.findOne(filter);

            if (existing) {
              console.log(
                ` Row ${i + 1}: Duplicate found - "${
                  registrationData.solutionName
                }" ` +
                  `(${registrationData.applicationEntity} / ${registrationData.headCategory})`
              );
              console.log(
                `   Existing ID: ${existing._id} | Marks preserved `
              );
              skippedCount++;
            } else {
              //  Create new record - pre-save hook will handle organizationName
              await Registration.create(registrationData);
              console.log(
                ` Row ${i + 1}: Added - "${registrationData.solutionName}" ` +
                  `(${registrationData.applicationEntity} / ${registrationData.headCategory})`
              );
              addedCount++;
            }
          } catch (itemError) {
            console.error(` Row ${i + 1}: Error -`, itemError.message);
            errorCount++;
          }

          // Progress indicator
          if ((i + 1) % 10 === 0) {
            console.log(
              `\n Progress: ${i + 1} / ${results.length} processed`
            );
          }
        }

        // Final summary
        console.log("\n" + "=".repeat(60));
        console.log(" CSV IMPORT COMPLETE");
        console.log("=".repeat(60));
        console.log(` Total rows processed: ${results.length}`);
        console.log(` New records added: ${addedCount}`);
        console.log(` Duplicates skipped: ${skippedCount}`);
        console.log(` Errors: ${errorCount}`);
        console.log("=".repeat(60));

        process.exit(0);
      } catch (error) {
        console.error("\n FATAL ERROR during import:", error);
        process.exit(1);
      }
    })
    .on("error", (error) => {
      console.error(" Error reading CSV file:", error);
      process.exit(1);
    });
};

importCSV();
