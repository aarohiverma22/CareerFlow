import LoginFormSection from "./components/LoginFormSection";
import LoginLeftSection from "./components/LoginLeftSection";

const Login = () => {
  return (
    <div className="flex w-full min-h-screen bg-white">
      <LoginLeftSection />
      <LoginFormSection />
    </div>
  );
};

export default Login;
