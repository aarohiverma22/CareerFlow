import type { SettingsSectionProps } from "../../../utils/types/settingsTypes";

const SettingsSection = ({
  title,
  description,
  icon,
  children,
}: SettingsSectionProps) => {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
          {icon}
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">{title}</h2>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <div className="divide-y divide-gray-100">{children}</div>
    </section>
  );
};

export default SettingsSection;
