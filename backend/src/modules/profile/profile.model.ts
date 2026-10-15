import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 30,
      default: "",
    },
    location: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "",
    },
    headline: {
      type: String,
      trim: true,
      maxlength: 160,
      default: "",
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },
    linkedInUrl: {
      type: String,
      trim: true,
      maxlength: 2048,
      default: "",
    },
    githubUrl: {
      type: String,
      trim: true,
      maxlength: 2048,
      default: "",
    },
    portfolioUrl: {
      type: String,
      trim: true,
      maxlength: 2048,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
