import * as Yup from "yup";

export const addApplicationValidationSchema = Yup.object({
  company: Yup.string()
    .trim()
    .required("Company is required")
    .max(100, "Company must not exceed 100 characters"),

  jobTitle: Yup.string()
    .trim()
    .required("Job title is required")
    .max(100, "Job title must not exceed 100 characters"),

  status: Yup.string()
    .oneOf(
      ["Applied", "Screening", "Interview", "Offer", "Rejected", "Withdrawn"],
      "Invalid application status",
    )
    .required("Status is required"),

  dateApplied: Yup.string().required("Date applied is required"),

  location: Yup.string()
    .trim()
    .max(100, "Location must not exceed 100 characters"),

  salaryMin: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .min(0, "Salary cannot be negative")
    .typeError("Minimum salary must be a number"),

  salaryMax: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value,
    )
    .min(0, "Salary cannot be negative")
    .typeError("Maximum salary must be a number")
    .test(
      "max-greater-than-min",
      "Maximum salary must be greater than or equal to minimum salary",
      function (value) {
        const { salaryMin } = this.parent;

        if (value === undefined || salaryMin === undefined) {
          return true;
        }

        return value >= salaryMin;
      },
    ),

  jobUrl: Yup.string()
    .trim()
    .url("Please enter a valid URL")
    .max(500, "URL must not exceed 500 characters"),

  notes: Yup.string().trim().max(1000, "Notes must not exceed 1000 characters"),
});
