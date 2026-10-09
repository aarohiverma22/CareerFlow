import { BriefcaseBusiness } from "lucide-react";
import { useFormikContext } from "formik";
import type {
  ProfileFormValues,
  Props,
} from "../../../utils/types/profileTypes";
import { professionalFields } from "../../../utils/constants/contentConstant";
import Input from "../../../componenets/reusable/Input";

const ProfessionalInformation = ({ isEditing }: Props) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<ProfileFormValues>();

  const skills = values.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
          <BriefcaseBusiness size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">
            Professional Information
          </h2>
          <p className="text-sm text-gray-500">
            Your experience, skills, and career preferences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {professionalFields?.map(({ label, name }) => (
          <div key={name}>
            {isEditing ? (
              <Input
                label={label}
                name={name}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched[name] && typeof errors[name] === "string"
                    ? errors[name]
                    : undefined
                }
                required={name !== "preferredLocation"}
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            ) : (
              <>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="mt-1 break-words text-sm font-medium text-gray-900">
                  {values[name] || "Not provided"}
                </p>
              </>
            )}
          </div>
        ))}

        <div>
          {isEditing ? (
            <div>
              <label
                htmlFor="workMode"
                className="mb-1.5 block text-sm font-medium text-gray-700"
              >
                Preferred Work Mode
              </label>
              <select
                id="workMode"
                name="workMode"
                value={values.workMode}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
                <option value="Any">Any</option>
              </select>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500">Preferred Work Mode</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {values.workMode || "Not provided"}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-5">
        <p className="mb-3 text-sm font-medium text-gray-700">Skills</p>

        {isEditing ? (
          <div>
            <textarea
              name="skills"
              value={values.skills}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={3}
              placeholder="React, TypeScript, JavaScript"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            <p className="mt-1 text-xs text-gray-500">
              Separate skills with commas.
            </p>
            {touched.skills && errors.skills && (
              <p className="mt-1 text-xs text-red-500">{errors.skills}</p>
            )}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills?.length > 0 ? (
              skills?.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-sm text-gray-400">No skills added</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfessionalInformation;
