import mongoose, { Schema } from "mongoose";

export const APPLICATION_STATUSES = [
  "Applied",
  "Screening",
  "Interview",
  "Offer",
  "Rejected",
  "Withdrawn",
] as const;

export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];

const applicationSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    status: {
      type: String,
      enum: APPLICATION_STATUSES,
      default: "Applied",
      required: true,
    },
    dateApplied: {
      type: Date,
      required: true,
      default: Date.now,
    },
    location: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "",
    },
    salaryMin: {
      type: Number,
      min: 0,
    },
    salaryMax: {
      type: Number,
      min: 0,
    },
    jobUrl: {
      type: String,
      trim: true,
      default: "",
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 3000,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

applicationSchema.index({ userId: 1, dateApplied: -1 });

const Application = mongoose.model("Application", applicationSchema);

export default Application;
