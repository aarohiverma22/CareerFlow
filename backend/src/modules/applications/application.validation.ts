import { z } from "zod";
import { APPLICATION_STATUSES } from "./application.model.js";

const optionalUrl = z
  .string()
  .trim()
  .max(2048)
  .refine((value) => {
    if (!value) return true;

    try {
      const url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  }, "Enter a valid HTTP or HTTPS URL.")
  .optional();

const applicationFields = {
  company: z.string().trim().min(1, "Company is required.").max(120),
  jobTitle: z.string().trim().min(1, "Job title is required.").max(120),
  status: z.enum(APPLICATION_STATUSES).optional(),
  dateApplied: z.coerce.date(),
  location: z.string().trim().max(150).optional(),
  salaryMin: z.coerce.number().finite().min(0).optional(),
  salaryMax: z.coerce.number().finite().min(0).optional(),
  jobUrl: optionalUrl,
  notes: z.string().trim().max(3000).optional(),
};

export const createApplicationSchema = z
  .object(applicationFields)
  .superRefine((data, context) => {
    if (
      data.salaryMin !== undefined &&
      data.salaryMax !== undefined &&
      data.salaryMin > data.salaryMax
    ) {
      context.addIssue({
        code: "custom",
        path: ["salaryMax"],
        message: "Maximum salary must be at least the minimum salary.",
      });
    }
  });

export const updateApplicationSchema = z
  .object({
    company: applicationFields.company.optional(),
    jobTitle: applicationFields.jobTitle.optional(),
    status: applicationFields.status,
    dateApplied: applicationFields.dateApplied.optional(),
    location: applicationFields.location,
    salaryMin: applicationFields.salaryMin,
    salaryMax: applicationFields.salaryMax,
    jobUrl: applicationFields.jobUrl,
    notes: applicationFields.notes,
  })
  .strict()
  .refine(
    (data) => Object.values(data).some((value) => value !== undefined),
    "Provide at least one field to update.",
  )
  .superRefine((data, context) => {
    if (
      data.salaryMin !== undefined &&
      data.salaryMax !== undefined &&
      data.salaryMin > data.salaryMax
    ) {
      context.addIssue({
        code: "custom",
        path: ["salaryMax"],
        message: "Maximum salary must be at least the minimum salary.",
      });
    }
  });

export const applicationListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  status: z.enum(APPLICATION_STATUSES).optional(),
  search: z.string().trim().max(120).optional(),
  sort: z.enum(["newest", "oldest"]).default("newest"),
});
