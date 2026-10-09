import { UserRound } from "lucide-react";
import { useFormikContext } from "formik";
import Input from "../../../componenets/reusable/Input";
import type {
  Props,
  ProfileFormValues,
} from "../../../utils/types/profileTypes";
import { profileFields } from "../../../utils/constants/contentConstant";

const PersonalInformation = ({ isEditing }: Props) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<ProfileFormValues>();

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
          <UserRound size={20} />
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">Personal Information</h2>
          <p className="text-sm text-gray-500">Your basic contact details.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {profileFields?.map(({ label, name }) => (
          <div key={name} className="min-w-0">
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
                required={name === "fullName" || name === "email"}
                type={name === "email" ? "email" : "text"}
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
      </div>
    </section>
  );
};

export default PersonalInformation;
