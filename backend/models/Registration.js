import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    applicationEntity: String,
    headCategory: String,
    solutionCategory: String,
    crossCategory: String,
    technologyCategory: String,
    email: String,
    solutionName: String,
    organizationName: String,
    dateOfEstablishment: String,
    sizeOfOrganization: String,
    address: String,
    district: String,
    website: String,
    telephone: String,
    contactPersonName: String,
    contactPersonDesignation: String,
    contactPersonMobile: String,
    contactPersonEmail: String,
    contactPersonPhone: String,
    organizationalLeaderName: String,
    organizationalLeaderEmail: String,
    companyProfile: String,
    teamInformation: String,
    solutionDescription: String,
    uniqueness: String,
    functionalityFeatures: String,
    qualityTechnology: String,
    marks: {
      uniqueness: { type: Number, default: 0 },
      businessFactor: { type: Number, default: 0 },
      availability: { type: Number, default: 0 },
      futureGoals: { type: Number, default: 0 },
    },
    totalMarks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Pre-save hook to auto-fill organizationName ONLY if it's empty
registrationSchema.pre("save", function (next) {
  // Only process if:
  // 1. It's an Organisation or Individual/Group entity
  // 2. organizationName is truly empty (null, undefined, or empty string)
  const isOrgEntity =
    this.applicationEntity === "Organisation" ||
    this.applicationEntity === "Individual or Group";
  const hasNoOrgName =
    !this.organizationName || this.organizationName.trim() === "";

  if (isOrgEntity && hasNoOrgName) {
    // Priority 1: Extract from company profile (first meaningful line)
    if (this.companyProfile && this.companyProfile.trim()) {
      const lines = this.companyProfile.split("\n");
      const firstMeaningfulLine = lines.find(
        (line) => line.trim().length > 10 && line.trim().length < 150
      );

      if (firstMeaningfulLine) {
        this.organizationName = firstMeaningfulLine.trim();
        return next();
      }
    }

    // Priority 2: Use organizational leader name
    if (this.organizationalLeaderName && this.organizationalLeaderName.trim()) {
      this.organizationName = `${this.organizationalLeaderName.trim()}'s Organization`;
      return next();
    }

    // Priority 3: Use contact person name
    if (this.contactPersonName && this.contactPersonName.trim()) {
      this.organizationName = `${this.contactPersonName.trim()}'s Organization`;
      return next();
    }

    // Priority 4: Use solution name
    if (this.solutionName && this.solutionName.trim()) {
      this.organizationName = this.solutionName.trim();
      return next();
    }

    // Fallback
    this.organizationName = "Unnamed Organization";
  }

  next();
});

export default mongoose.model("Registration", registrationSchema);
