import { Sun } from "lucide-react";
import type { AppearanceSettingsProps } from "../../../utils/types/settingsTypes";
import { appearanceSettingsOptions } from "../../../utils/constants/contentConstant";
import SettingsSection from "./SettingsSection";

const AppearanceSettings = ({
  settings,
  onChange,
}: AppearanceSettingsProps) => {
  return (
    <SettingsSection
      title="Appearance"
      description="Choose how CareerFlow should look."
      icon={<Sun size={20} />}
    >
      <div className="py-4 first:pt-0 last:pb-0">
        <p className="text-sm font-medium text-gray-900">Theme Preference</p>

        <p className="mt-1 text-sm text-gray-500">
          Select your preferred appearance.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {appearanceSettingsOptions?.map(({ value, label, icon: Icon }) => {
            const selected = settings.theme === value;

            return (
              <button
                key={value}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange("theme", value)}
                className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                  selected
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-600"
                    : "border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-gray-50"
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{label}</span>
                <span
                  className={`ml-auto flex h-4 w-4 items-center justify-center rounded-full border ${
                    selected ? "border-indigo-600" : "border-gray-300"
                  }`}
                >
                  {selected && (
                    <span className="h-2 w-2 rounded-full bg-indigo-600" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </SettingsSection>
  );
};

export default AppearanceSettings;
