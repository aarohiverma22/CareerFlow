import { z } from "zod";

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
  }, "Enter a valid HTTP or HTTPS URL.");

export const updateProfileSchema = z
  .object({
    name: z.string().trim().min(2).max(80).optional(),
    phone: z.string().trim().max(30).optional(),
    location: z.string().trim().max(150).optional(),
    headline: z.string().trim().max(160).optional(),
    bio: z.string().trim().max(1000).optional(),
    linkedInUrl: optionalUrl.optional(),
    githubUrl: optionalUrl.optional(),
    portfolioUrl: optionalUrl.optional(),
  })
  .strict()
  .refine(
    (data) => Object.values(data).some((value) => value !== undefined),
    "Provide at least one field to update.",
  );
