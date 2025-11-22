import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    institution: { type: String, required: true },
    year: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Qualification", qualificationSchema);
