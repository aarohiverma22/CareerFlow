import { useFormikContext } from "formik";
import type {
  ProfileFormValues,
  Props,
} from "../../../utils/types/profileTypes";
import { socilaLinks } from "../../../utils/constants/contentConstant";
import Input from "../../../componenets/reusable/Input";

const SocialLinks = ({ isEditing }: Props) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<ProfileFormValues>();

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
      <h2 className="font-semibold text-gray-900">Professional Links</h2>
      <p className="mt-1 text-sm text-gray-500">
        Help recruiters discover your professional work.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {socilaLinks?.map(({ label, name, icon: Icon, placeholder }) => (
          <div key={name} className="min-w-0">
            {isEditing ? (
              <Input
                label={label}
                name={name}
                type="url"
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched[name] && typeof errors[name] === "string"
                    ? errors[name]
                    : undefined
                }
                placeholder={placeholder}
              />
            ) : (
              <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
                <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
                  <Icon size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{label}</p>

                  {values[name] ? (
                    <a
                      href={values[name]}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block break-all text-sm text-indigo-600 hover:underline"
                    >
                      {values[name]}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-gray-400">Not provided</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
