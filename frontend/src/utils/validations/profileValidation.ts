import * as Yup from "yup";

export const profileValidationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .max(100, "Name must not exceed 100 characters")
    .required("Full name is required"),

  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .matches(/^[+]?[0-9\s()-]*$/, "Enter a valid phone number")
    .max(20, "Phone number is too long"),

  location: Yup.string().trim().max(100),
  jobTitle: Yup.string().trim().max(100).required("Job title is required"),

  experience: Yup.string().trim().required("Experience is required"),
  workMode: Yup.string().required("Select a work mode"),
  preferredLocation: Yup.string().trim().max(150),

  skills: Yup.string().max(500, "Skills must not exceed 500 characters"),

  linkedIn: Yup.string().trim().url("Enter a valid URL"),

  github: Yup.string().trim().url("Enter a valid URL"),

  portfolio: Yup.string().trim().url("Enter a valid URL"),
});
