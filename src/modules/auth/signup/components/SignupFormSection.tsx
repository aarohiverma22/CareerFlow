import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { jobIcon } from "../../../../assets";
import Input from "../../../../componenets/reusable/Input";
import Button from "../../../../componenets/reusable/Button";
import { SIGNUP_CONTENT } from "../../../../utils/constants/contentConstant";
import { signupValidationSchema } from "../../../../utils/validations/loginValidation";

const SignupFormSection = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Signup values:", values);

    // API call will go here
    // navigate("/login");
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
            {SIGNUP_CONTENT.CREATE_HEADING}
          </h1>

          <p className="text-sm leading-relaxed text-[#595C61FF]">
            {SIGNUP_CONTENT.DESC}
          </p>
        </div>

        {/* Signup Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form className="mt-7 flex w-full flex-col gap-5">
              {/* Full Name */}
              <Input
                type="text"
                label="Full Name"
                placeholder="Enter your full name"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                trim="trim"
                required
                error={touched.fullName ? errors.fullName : undefined}
              />

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
                placeholder="Create a password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={touched.password ? errors.password : undefined}
              />

              {/* Submit */}
              <div className="flex w-full justify-center">
                <Button
                  type="submit"
                  text="Create Account"
                  buttonClassName="w-full"
                  wrapperClassName="w-full"
                />
              </div>

              {/* Login */}
              <div className="mt-1 flex justify-center gap-1 text-sm">
                <span className="text-[#595C61FF]">
                  {SIGNUP_CONTENT.HAVE_ACCOUNT}
                </span>

                <Button
                  type="button"
                  text="Login here"
                  onClick={() => navigate("/login")}
                  buttonClassName="bg-transparent p-0 font-medium text-[#4F46E5FF] hover:underline"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default SignupFormSection;
