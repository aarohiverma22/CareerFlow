import { jobIcon } from "../../../../assets";

const LoginFormSection = () => {
  return (
    <div className="flex flex-col justify-center items-start ml-[25%]">
      <div className="flex gap-4">
        <img src={jobIcon} alt="job-tracker" className="size-10" />
        <span className="text-2xl font-bold text-[#4F46E5FF]">JobTrack</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-3xl font-semibold text-[#1D1F23FF] mt-10">
          Welcome Back
        </span>
        <span className="text-base font-normal text-[#595C61FF]">
          Enter your credentials to access your job tracking portal.
        </span>
      </div>
    </div>
  );
};

export default LoginFormSection;
