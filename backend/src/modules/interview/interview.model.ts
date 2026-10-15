import mongoose, { Schema } from "mongoose";

export const INTERVIEW_TYPES = [
  "Phone",
  "Video",
  "In-person",
  "Technical",
  "HR",
  "Other",
] as const;

export const INTERVIEW_STATUSES = [
  "Scheduled",
  "Completed",
  "Cancelled",
  "Rescheduled",
] as const;

export type InterviewStatus = (typeof INTERVIEW_STATUSES)[number];

const interviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    applicationId: {
      type: Schema.Types.ObjectId,
      ref: "Application",
      default: null,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    type: {
      type: String,
      enum: INTERVIEW_TYPES,
      default: "Video",
      required: true,
    },
    status: {
      type: String,
      enum: INTERVIEW_STATUSES,
      default: "Scheduled",
      required: true,
    },
    scheduledAt: {
      type: Date,
      required: true,
    },
    durationMinutes: {
      type: Number,
      min: 5,
      max: 480,
      default: 60,
    },
    location: {
      type: String,
      trim: true,
      maxlength: 300,
      default: "",
    },
    meetingUrl: {
      type: String,
      trim: true,
      maxlength: 2048,
      default: "",
    },
    interviewerName: {
      type: String,
      trim: true,
      maxlength: 120,
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

interviewSchema.index({ userId: 1, scheduledAt: 1 });

const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;
