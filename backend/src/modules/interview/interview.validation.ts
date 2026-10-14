import { z } from "zod";
import { INTERVIEW_TYPES, INTERVIEW_STATUSES } from "./interview.model.js";

const optionalHttpUrl = z
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

const interviewFields = {
  applicationId: z.string().trim().nullable().optional(),
  title: z.string().trim().min(1).max(150),
  company: z.string().trim().min(1).max(120),
  type: z.enum(INTERVIEW_TYPES).optional(),
  status: z.enum(INTERVIEW_STATUSES).optional(),
  scheduledAt: z.coerce.date(),
  durationMinutes: z.coerce.number().int().min(5).max(480).optional(),
  location: z.string().trim().max(300).optional(),
  meetingUrl: optionalHttpUrl,
  interviewerName: z.string().trim().max(120).optional(),
  notes: z.string().trim().max(3000).optional(),
};

export const createInterviewSchema = z.object(interviewFields);

export const updateInterviewSchema = z
  .object({
    applicationId: interviewFields.applicationId,
    title: interviewFields.title.optional(),
    company: interviewFields.company.optional(),
    type: interviewFields.type,
    status: interviewFields.status,
    scheduledAt: interviewFields.scheduledAt.optional(),
    durationMinutes: interviewFields.durationMinutes,
    location: interviewFields.location,
    meetingUrl: interviewFields.meetingUrl,
    interviewerName: interviewFields.interviewerName,
    notes: interviewFields.notes,
  })
  .strict()
  .refine(
    (data) => Object.values(data).some((value) => value !== undefined),
    "Provide at least one field to update.",
  );

export const interviewListQuerySchema = z
  .object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
    status: z.enum(INTERVIEW_STATUSES).optional(),
    search: z.string().trim().max(120).optional(),
    from: z.coerce.date().optional(),
    to: z.coerce.date().optional(),
    sort: z.enum(["upcoming", "oldest", "newest"]).default("upcoming"),
  })
  .refine((data) => !data.from || !data.to || data.from <= data.to, {
    path: ["to"],
    message: "'to' must be on or after 'from'.",
  });
