import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .min(5, "Email must be at least 5 characters")
    .max(50, "Email must not exceed 50 characters")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    )
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters")
    .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
    .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
    .matches(/[0-9]/, "Password must contain at least 1 number")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least 1 special character",
    )
    .required("Password is required"),
});
