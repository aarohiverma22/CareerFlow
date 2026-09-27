import { loginImg } from "../../../../assets";
import RatioCards from "./RatioCards";

const LoginLeftSection = () => {
  return (
    <section className="flex min-h-screen w-1/2 flex-col bg-[#F6F7F9] px-16 py-12">
      {/* Heading Section */}
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight text-[#170062]">
          Master Your Career <span className="text-[#4F46E5]">Pipeline</span>
        </h1>

        <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-[#25018C]">
          From application to offer, track every step of your professional
          journey with precision and clarity.
        </p>
      </div>

      {/* Illustration */}
      <div className="mt-10 flex w-full justify-center">
        <div className="w-full max-w-xl overflow-hidden rounded-xl">
          <img
            src={loginImg}
            alt="CareerFlow application tracking dashboard"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-auto grid grid-cols-3 pt-12">
        <div className="border-r-2 border-[#D9D9E0] pr-8">
          <RatioCards value="2.4K+" label="APPLICATIONS" />
        </div>

        <div className="border-r-2 border-[#D9D9E0] px-8">
          <RatioCards value="850+" label="INTERVIEWS" />
        </div>

        <div className="pl-8">
          <RatioCards value="12%" label="SUCCESS RATE" />
        </div>
      </div>
    </section>
  );
};

export default LoginLeftSection;
