import type { Request, Response } from "express";
import mongoose from "mongoose";
import Application from "./application.model.js";
import {
  createApplicationSchema,
  updateApplicationSchema,
  applicationListQuerySchema,
} from "./application.validation.js";

type AuthenticatedRequest = Request & {
  userId?: string;
};

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

const getApplicationId = (req: Request, res: Response): string | undefined => {
  const id = req.params.id;

  if (typeof id !== "string" || !mongoose.isValidObjectId(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid application ID.",
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
      message: "Invalid application data.",
    });
    return;
  }

  console.error(message, error);

  res.status(500).json({
    success: false,
    message,
  });
};

// POST /api/applications
export const createApplication = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const parsed = createApplicationSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: parsed.error.issues,
    });
    return;
  }

  try {
    const application = await Application.create({
      ...parsed.data,
      userId,
    });

    res.status(201).json({
      success: true,
      message: "Application created successfully.",
      data: application,
    });
  } catch (error) {
    handleError(res, error, "Unable to create application.");
  }
};

// GET /api/applications
export const getApplications = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const parsed = applicationListQuerySchema.safeParse(req.query);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Invalid query parameters.",
      errors: parsed.error.issues,
    });
    return;
  }

  try {
    const { page, limit, status, search, sort } = parsed.data;

    const filter: Record<string, unknown> = { userId };

    if (status) {
      filter.status = status;
    }

    if (search) {
      const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const searchRegex = new RegExp(escapedSearch, "i");

      filter.$or = [
        { company: searchRegex },
        { jobTitle: searchRegex },
        { location: searchRegex },
      ];
    }

    const sortOrder = sort === "oldest" ? 1 : -1;
    const skip = (page - 1) * limit;

    const [applications, total] = await Promise.all([
      Application.find(filter)
        .sort({ dateApplied: sortOrder, _id: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean(),

      Application.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      data: applications,
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
    handleError(res, error, "Unable to fetch applications.");
  }
};

// GET /api/applications/:id
export const getApplicationById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const id = getApplicationId(req, res);
  if (!id) return;

  try {
    const application = await Application.findOne({
      _id: id,
      userId,
    }).lean();

    if (!application) {
      res.status(404).json({
        success: false,
        message: "Application not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    handleError(res, error, "Unable to fetch application.");
  }
};

// PATCH /api/applications/:id
export const updateApplication = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const id = getApplicationId(req, res);
  if (!id) return;

  const parsed = updateApplicationSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: parsed.error.issues,
    });
    return;
  }

  try {
    const application = await Application.findOneAndUpdate(
      { _id: id, userId },
      { $set: parsed.data },
      { new: true, runValidators: true },
    );

    if (!application) {
      res.status(404).json({
        success: false,
        message: "Application not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Application updated successfully.",
      data: application,
    });
  } catch (error) {
    handleError(res, error, "Unable to update application.");
  }
};

// DELETE /api/applications/:id
export const deleteApplication = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const userId = getUserId(req, res);
  if (!userId) return;

  const id = getApplicationId(req, res);
  if (!id) return;

  try {
    const application = await Application.findOneAndDelete({
      _id: id,
      userId,
    });

    if (!application) {
      res.status(404).json({
        success: false,
        message: "Application not found.",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully.",
    });
  } catch (error) {
    handleError(res, error, "Unable to delete application.");
  }
};
