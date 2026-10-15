import mongoose, { Schema } from "mongoose";

const settingsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    theme: {
      type: String,
      enum: ["light", "dark", "system"],
      default: "light",
    },
    dateFormat: {
      type: String,
      enum: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"],
      default: "DD/MM/YYYY",
    },
    emailNotifications: {
      type: Boolean,
      default: true,
    },
    interviewReminders: {
      type: Boolean,
      default: true,
    },
    applicationUpdates: {
      type: Boolean,
      default: true,
    },
    defaultPageSize: {
      type: Number,
      enum: [10, 20, 50],
      default: 10,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Settings = mongoose.model("Settings", settingsSchema);

export default Settings;
