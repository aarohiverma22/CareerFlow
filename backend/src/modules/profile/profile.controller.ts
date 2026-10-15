import type { Request, Response } from "express";
import mongoose from "mongoose";

import User from "../auth/user.model.js";
import Profile from "./profile.model.js";
import { updateProfileSchema } from "./profile.validation.js";

type AuthenticatedRequest = Request & { userId?: string };

const getUserId = (req: Request, res: Response): string | undefined => {
  const userId = (req as AuthenticatedRequest).userId;

  if (!userId) {
    res.status(401).json({
      success: false,
      message: "Authentication required.",
    });
    return undefined;
  }

  return userId;
};

export const getProfile = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  try {
    const [user, profile] = await Promise.all([
      User.findById(userId).select("name email").lean(),
      Profile.findOneAndUpdate(
        { userId },
        { $setOnInsert: { userId } },
        { upsert: true, new: true, setDefaultsOnInsert: true },
      ).lean(),
    ]);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        ...profile,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Get profile failed:", error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch profile.",
    });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const parsed = updateProfileSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: parsed.error.issues,
    });
    return;
  }

  const { name, ...profileFields } = parsed.data;

  try {
    if (name !== undefined) {
      await User.findByIdAndUpdate(
        userId,
        { $set: { name } },
        { runValidators: true },
      );
    }

    const profile = await Profile.findOneAndUpdate(
      { userId },
      {
        $set: profileFields,
        $setOnInsert: { userId },
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      },
    ).lean();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      data: { ...profile, ...(name !== undefined ? { name } : {}) },
    });
  } catch (error) {
    console.error("Update profile failed:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      res.status(400).json({
        success: false,
        message: "Invalid profile data.",
      });
      return;
    }

    res.status(500).json({
      success: false,
      message: "Unable to update profile.",
    });
  }
};
