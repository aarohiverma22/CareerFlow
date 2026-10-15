import { z } from "zod";

export const updateSettingsSchema = z
  .object({
    theme: z.enum(["light", "dark", "system"]).optional(),
    dateFormat: z.enum(["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"]).optional(),
    emailNotifications: z.boolean().optional(),
    interviewReminders: z.boolean().optional(),
    applicationUpdates: z.boolean().optional(),
    defaultPageSize: z
      .union([z.literal(10), z.literal(20), z.literal(50)])
      .optional(),
  })
  .strict()
  .refine(
    (data) => Object.values(data).some((value) => value !== undefined),
    "Provide at least one setting to update.",
  );
