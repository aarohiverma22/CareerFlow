import type { Request, Response } from "express";
import Settings from "./settings.model.js";
import { updateSettingsSchema } from "./settings.validation.js";

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

export const getSettings = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  try {
    const settings = await Settings.findOneAndUpdate(
      { userId },
      { $setOnInsert: { userId } },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    ).lean();

    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    console.error("Get settings failed:", error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch settings.",
    });
  }
};

export const updateSettings = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const parsed = updateSettingsSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: parsed.error.issues,
    });
    return;
  }

  try {
    const settings = await Settings.findOneAndUpdate(
      { userId },
      {
        $set: parsed.data,
        $setOnInsert: { userId },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      },
    ).lean();

    res.status(200).json({
      success: true,
      message: "Settings updated successfully.",
      data: settings,
    });
  } catch (error) {
    console.error("Update settings failed:", error);
    res.status(500).json({
      success: false,
      message: "Unable to update settings.",
    });
  }
};
