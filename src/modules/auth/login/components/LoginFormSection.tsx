import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import { jobIcon } from "../../../../assets";
import { loginValidationSchema } from "../../../../utils/validations/loginValidation";

import Input from "../../../../componenets/reusable/Input";
import Button from "../../../../componenets/reusable/Button";

const LoginFormSection = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Login values:", values);

    // API call will go here
    // navigate("/dashboard");
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center px-6 py-10 md:w-1/2 md:px-10 md:py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={jobIcon} alt="JobTrack" className="size-9" />

          <span className="text-2xl font-bold text-[#4F46E5FF]">JobTrack</span>
        </div>

        {/* Heading */}
        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-[#1D1F23FF]">
            Welcome Back
          </h1>

          <p className="text-sm leading-relaxed text-[#595C61FF]">
            Enter your credentials to access your job tracking portal.
          </p>
        </div>

        {/* Login Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form className="mt-7 flex w-full flex-col gap-5">
              {/* Email */}
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                trim="trim"
                required
                error={touched.email ? errors.email : undefined}
              />

              {/* Password */}
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={touched.password ? errors.password : undefined}
              />

              {/* Forgot Password */}
              {/* <div className="flex justify-end -mb-2">
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm font-medium text-[#4F46E5FF] hover:underline"
                >
                  Forgot Password?
                </button>
              </div> */}

              {/* Signup */}
              <div className="mt-1 flex justify-center gap-1 text-sm">
                <span className="text-[#595C61FF]">Don't have an account?</span>
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="font-medium text-[#4F46E5FF] hover:underline"
                >
                  Sign up
                </button>
              </div>

              {/* Submit */}
              <div className="flex w-full justify-center">
                <Button
                  type="submit"
                  text="Sign in to Dashboard"
                  buttonClassName="w-full"
                  wrapperClassName="w-full"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default LoginFormSection;
