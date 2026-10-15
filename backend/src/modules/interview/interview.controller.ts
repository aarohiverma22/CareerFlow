import type { Request, Response } from "express";
import mongoose from "mongoose";

import Interview from "./interview.model.js";
import Application from "../applications/application.model.js";
import {
  createInterviewSchema,
  updateInterviewSchema,
  interviewListQuerySchema,
} from "./interview.validation.js";

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

const getInterviewId = (req: Request, res: Response): string | undefined => {
  const id = req.params.id;

  if (typeof id !== "string" || !mongoose.isValidObjectId(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid interview ID.",
    });
    return undefined;
  }

  return id;
};

const handleError = (res: Response, error: unknown, message: string): void => {
  if (
    error instanceof mongoose.Error.ValidationError ||
    error instanceof mongoose.Error.CastError
  ) {
    res.status(400).json({
      success: false,
      message: "Invalid interview data.",
    });
    return;
  }

  console.error(message, error);
  res.status(500).json({ success: false, message });
};

const validateApplicationOwnership = async (
  applicationId: string | null | undefined,
  userId: string,
): Promise<boolean> => {
  if (applicationId === undefined || applicationId === null) {
    return true;
  }

  if (!mongoose.isValidObjectId(applicationId)) {
    return false;
  }

  const application = await Application.exists({
    _id: applicationId,
    userId,
  });

  return Boolean(application);
};

// POST /api/interviews
export const createInterview = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const parsed = createInterviewSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: parsed.error.issues,
    });
    return;
  }

  try {
    const data = parsed.data;

    const ownsApplication = await validateApplicationOwnership(
      data.applicationId,
      userId,
    );

    if (!ownsApplication) {
      res.status(400).json({
        success: false,
        message: "The linked application is invalid or unavailable.",
      });
      return;
    }

    const interview = await Interview.create({
      ...data,
      applicationId: data.applicationId ?? null,
      userId,
    });

    res.status(201).json({
      success: true,
      message: "Interview created successfully.",
      data: interview,
    });
  } catch (error) {
    handleError(res, error, "Unable to create interview.");
  }
};

// GET /api/interviews
export const getInterviews = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const parsed = interviewListQuerySchema.safeParse(req.query);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Invalid query parameters.",
      errors: parsed.error.issues,
    });
    return;
  }

  try {
    const { page, limit, status, search, from, to, sort } = parsed.data;

    const filter: Record<string, unknown> = { userId };

    if (status) filter.status = status;

    if (search) {
      const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escaped, "i");

      filter.$or = [
        { title: regex },
        { company: regex },
        { interviewerName: regex },
      ];
    }

    if (from || to) {
      const scheduledAt: Record<string, Date> = {};
      if (from) scheduledAt.$gte = from;
      if (to) scheduledAt.$lte = to;
      filter.scheduledAt = scheduledAt;
    }

    const sortOrder = sort === "oldest" ? 1 : -1;
    const sortField = sort === "upcoming" ? "scheduledAt" : "createdAt";
    const skip = (page - 1) * limit;

    const [interviews, total] = await Promise.all([
      Interview.find(filter)
        .sort({ [sortField]: sortOrder, _id: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean(),
      Interview.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      data: interviews,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    handleError(res, error, "Unable to fetch interviews.");
  }
};

// GET /api/interviews/:id
export const getInterviewById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const id = getInterviewId(req, res);
  if (!id) return;

  try {
    const interview = await Interview.findOne({
      _id: id,
      userId,
    }).lean();

    if (!interview) {
      res.status(404).json({
        success: false,
        message: "Interview not found.",
      });
      return;
    }

    res.status(200).json({ success: true, data: interview });
  } catch (error) {
    handleError(res, error, "Unable to fetch interview.");
  }
};

// PATCH /api/interviews/:id
export const updateInterview = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const id = getInterviewId(req, res);
  if (!id) return;

  const parsed = updateInterviewSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: parsed.error.issues,
    });
    return;
  }

  try {
    const data = parsed.data;

    if (data.applicationId !== undefined) {
      const ownsApplication = await validateApplicationOwnership(
        data.applicationId,
        userId,
      );

      if (!ownsApplication) {
        res.status(400).json({
          success: false,
          message: "The linked application is invalid or unavailable.",
        });
        return;
      }
    }

    const interview = await Interview.findOneAndUpdate(
      { _id: id, userId },
      { $set: data },
      { new: true, runValidators: true },
    );

    if (!interview) {
      res.status(404).json({
        success: false,
        message: "Interview not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Interview updated successfully.",
      data: interview,
    });
  } catch (error) {
    handleError(res, error, "Unable to update interview.");
  }
};

// DELETE /api/interviews/:id
export const deleteInterview = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const id = getInterviewId(req, res);
  if (!id) return;

  try {
    const interview = await Interview.findOneAndDelete({
      _id: id,
      userId,
    });

    if (!interview) {
      res.status(404).json({
        success: false,
        message: "Interview not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Interview deleted successfully.",
    });
  } catch (error) {
    handleError(res, error, "Unable to delete interview.");
  }
};
