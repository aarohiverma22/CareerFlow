import { BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import { useFormikContext } from "formik";
import type { ProfileFormValues } from "../../../utils/types/profileTypes";

const ProfileOverview = () => {
  const { values } = useFormikContext<ProfileFormValues>();

  const initials = values.fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-700 ring-4 ring-indigo-50">
          {initials || "U"}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="break-words text-xl font-semibold text-gray-900">
            {values.fullName || "Your Name"}
          </h2>

          <p className="mt-1 text-sm font-medium text-indigo-600">
            {values.jobTitle || "Add your job title"}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-2 break-all">
              <Mail size={16} />
              {values.email || "Add your email"}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {values.location || "Add your location"}
            </span>

            <span className="flex items-center gap-2">
              <BriefcaseBusiness size={16} />
              {values.experience || "Add experience"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
