import { jobIcon, loginImg } from "../../../../assets";
import {
  features,
  SIGNUP_CONTENT,
} from "../../../../utils/constants/contentConstant";

const SignupLeftSection = () => {
  return (
    <section className="relative hidden min-h-screen w-full overflow-hidden md:flex md:w-1/2">
      {/* Background Image */}
      <img
        src={loginImg}
        alt="JobTrack career tracking"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/75" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col px-10 py-10 xl:px-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={jobIcon} alt="JobTrack" className="size-9" />

          <span className="text-2xl font-bold text-[#4F46E5FF]">JobTrack</span>
        </div>

        {/* Main Content */}
        <div className="my-auto max-w-xl">
          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-[#170062] xl:text-5xl">
            {SIGNUP_CONTENT.HEADING}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#25018C]">
            {SIGNUP_CONTENT.SUB_HEADING}
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-col gap-5">
            {features?.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                {/* Tick */}
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#4F46E5] text-sm font-bold text-white">
                  ✓
                </span>

                <span className="text-base font-medium text-[#1D1F23FF]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupLeftSection;
