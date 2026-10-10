import { Bell } from "lucide-react";
import type { NotificationSettingsProps } from "../../../utils/types/settingsTypes";
import { notificationOptions } from "../../../utils/constants/contentConstant";
import SettingsSection from "./SettingsSection";

const NotificationSettings = ({
  settings,
  onChange,
}: NotificationSettingsProps) => {
  return (
    <SettingsSection
      title="Notifications"
      description="Choose which updates you want to receive."
      icon={<Bell size={20} />}
    >
      {notificationOptions?.map((option) => (
        <div
          key={option.key}
          className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
        >
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900">{option.title}</p>
            <p className="mt-1 text-sm text-gray-500">{option.description}</p>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={settings[option.key]}
            aria-label={option.title}
            onClick={() => onChange(option.key, !settings[option.key])}
            className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
              settings[option.key] ? "bg-indigo-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                settings[option.key] ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      ))}
    </SettingsSection>
  );
};

export default NotificationSettings;
