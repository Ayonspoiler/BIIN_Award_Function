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
      // Capture headers to debug column names
      headers = headerList;
      console.log("CSV Headers found:");
      headerList.forEach((header, index) => {
        console.log(`${index}: "${header}" (length: ${header.length})`);
      });
    })
    .on("data", (data) => {
      // Debug first row to see actual data
      if (results.length === 0) {
        console.log("\nFirst row data:");
        console.log(JSON.stringify(data, null, 2));
      }
      results.push(data);
    })
    .on("end", async () => {
      console.log(`\nTotal rows to import: ${results.length}`);

      try {
        for (let i = 0; i < results.length; i++) {
          const row = results[i];

          // Trim all string values to remove extra whitespace
          const trimmedRow = {};
          Object.keys(row).forEach((key) => {
            trimmedRow[key] =
              typeof row[key] === "string" ? row[key].trim() : row[key];
          });

          // Try multiple possible column name variations
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

          // Debug organizations with empty names
          if (
            registrationData.applicationEntity === "Organisation" &&
            !registrationData.organizationName
          ) {
            console.log(`\n⚠️ Row ${i + 1}: Organisation with empty name`);
            console.log("Solution Name:", registrationData.solutionName);
            console.log(
              "Available fields:",
              Object.keys(trimmedRow).filter((k) => trimmedRow[k])
            );
          }

          await Registration.create(registrationData);

          if ((i + 1) % 10 === 0) {
            console.log(`Imported ${i + 1} / ${results.length} records...`);
          }
        }

        console.log("\n✅ CSV Data imported successfully!");
        console.log(`Total records imported: ${results.length}`);
        process.exit(0);
      } catch (error) {
        console.error("❌ Error importing data:", error);
        process.exit(1);
      }
    })
    .on("error", (error) => {
      console.error("❌ Error reading CSV file:", error);
      process.exit(1);
    });
};

importCSV();
