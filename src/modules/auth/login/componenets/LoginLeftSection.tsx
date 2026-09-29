import { loginImg } from "../../../../assets";
import RatioCards from "./RatioCards";

const LoginLeftSection = () => {
  return (
    <section className="hidden min-h-screen w-full flex-col justify-center bg-[#F6F7F9] px-6 py-10 md:flex md:w-1/2 md:px-10 md:py-8 xl:px-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Heading Section */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-[#170062] xl:text-5xl">
            Master Your Career <span className="text-[#4F46E5]">Pipeline</span>
          </h1>

          <p className="mt-3 max-w-lg text-sm font-normal leading-relaxed text-[#25018C] xl:text-base">
            From application to offer, track every step of your professional
            journey with precision and clarity.
          </p>
        </div>

        {/* Illustration */}
        <div className="mt-7 flex w-full justify-start">
          <div className="w-full max-w-lg overflow-hidden rounded-xl">
            <img
              src={loginImg}
              alt="CareerFlow application tracking dashboard"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 pt-8">
          <div className="border-r-2 border-[#D9D9E0] pr-5">
            <RatioCards value="2.4K+" label="APPLICATIONS" />
          </div>

          <div className="border-r-2 border-[#D9D9E0] px-5">
            <RatioCards value="850+" label="INTERVIEWS" />
          </div>

          <div className="pl-5">
            <RatioCards value="12%" label="SUCCESS RATE" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginLeftSection;
