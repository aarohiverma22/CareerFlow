import SignupFormSection from "./components/SignupFormSection";
import SignupLeftSection from "./components/SignupLeftSection";

const Signup = () => {
  return (
    <div className="flex w-full min-h-screen bg-white">
      <SignupLeftSection />
      <SignupFormSection />
    </div>
  );
};

export default Signup;
