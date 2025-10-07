import mongoose from "mongoose";

const organisationLeaderboardSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Registration",
      unique: true,
    },
    solutionName: String,
    organizationName: String,
    headCategory: String,
    solutionCategory: String,

    contactPersonName: String,
    contactPersonMobile: String,
    contactPersonEmail: String,

    judgeMarks: [
      {
        judgeId: { type: mongoose.Schema.Types.ObjectId, ref: "Judge" },
        judgeName: String,
        judgeEmail: String,
        marks: {
          uniqueness: { type: Number, default: 0 },
          criteriaTwo: { type: Number, default: 0 },
          functionalitiesFeatures: { type: Number, default: 0 },
          qualityTechnology: { type: Number, default: 0 },
        },
        totalMarks: { type: Number, default: 0 },
        markedAt: { type: Date, default: Date.now },
      },
    ],

    averageMarks: {
      uniqueness: { type: Number, default: 0 },
      criteriaTwo: { type: Number, default: 0 },
      functionalitiesFeatures: { type: Number, default: 0 },
      qualityTechnology: { type: Number, default: 0 },
    },

    totalAverageMarks: { type: Number, default: 0 },
    numberOfJudges: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const OrganisationLeaderboard = mongoose.model(
  "OrganisationLeaderboard",
  organisationLeaderboardSchema
);
