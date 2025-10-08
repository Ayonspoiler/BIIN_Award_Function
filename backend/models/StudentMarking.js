import mongoose from "mongoose";

const studentLeaderboardSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Registration",
      unique: true,
    },
    solutionName: String,
    organizationName: String,

    // ✅ ADDED: Head Category and Solution Category
    headCategory: String,
    solutionCategory: String,

    // Contact person details
    contactPersonName: String,
    contactPersonMobile: String,
    contactPersonEmail: String,

    // Individual marks from each judge
    judgeMarks: [
      {
        judgeId: { type: mongoose.Schema.Types.ObjectId, ref: "Judge" },
        judgeName: String,
        judgeEmail: String,
        marks: {
          uniqueness: { type: Number, default: 0 },
          proofOfConcept: { type: Number, default: 0 },
          functionalitiesFeatures: { type: Number, default: 0 },
          quality: { type: Number, default: 0 },
          presentation: { type: Number, default: 0 },
        },
        totalMarks: { type: Number, default: 0 },
        markedAt: { type: Date, default: Date.now },
      },
    ],

    // Average marks from all judges
    averageMarks: {
      uniqueness: { type: Number, default: 0 },
      proofOfConcept: { type: Number, default: 0 },
      functionalitiesFeatures: { type: Number, default: 0 },
      quality: { type: Number, default: 0 },
      presentation: { type: Number, default: 0 },
    },

    totalAverageMarks: { type: Number, default: 0 },
    numberOfJudges: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const StudentLeaderboard = mongoose.model(
  "StudentLeaderboard",
  studentLeaderboardSchema
);
