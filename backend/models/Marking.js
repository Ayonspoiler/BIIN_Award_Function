import mongoose from "mongoose";

const markingSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Registration" },
    judgeId: { type: mongoose.Schema.Types.ObjectId, ref: "Judge" },
    applicationEntity: String,
    headCategory: String,

    // Student marks (5 × 10 = 50)
    studentMarks: {
      uniqueness: { type: Number, min: 0, max: 10 },
      proofOfConcept: { type: Number, min: 0, max: 10 },
      functionalitiesFeatures: { type: Number, min: 0, max: 10 },
      quality: { type: Number, min: 0, max: 10 },
      presentation: { type: Number, min: 0, max: 10 },
    },

    // Organisation marks (4 × 10 = 40)
    // marketPotentialValuePublic represents both criteria based on Head Category
    organisationMarks: {
      uniqueness: { type: Number, min: 0, max: 10 },
      marketPotentialValuePublic: { type: Number, min: 0, max: 10 },
      functionalitiesFeatures: { type: Number, min: 0, max: 10 },
      qualityTechnology: { type: Number, min: 0, max: 10 },
    },

    // Individual/Group marks (4 × 10 = 40)
    // marketPotentialValuePublic represents both criteria based on Head Category
    individualGroupMarks: {
      uniqueness: { type: Number, min: 0, max: 10 },
      marketPotentialValuePublic: { type: Number, min: 0, max: 10 },
      functionalitiesFeatures: { type: Number, min: 0, max: 10 },
      qualityTechnology: { type: Number, min: 0, max: 10 },
    },

    totalMarks: { type: Number, default: 0 },
  },
  { timestamps: true }
);

markingSchema.index({ projectId: 1, judgeId: 1 }, { unique: true });

export default mongoose.model("Marking", markingSchema);
