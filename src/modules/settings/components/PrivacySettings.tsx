import { ShieldCheck } from "lucide-react";
import type { PrivacySettingsProps } from "../../../utils/types/settingsTypes";
import SettingsSection from "./SettingsSection";

const PrivacySettings = ({ settings, onChange }: PrivacySettingsProps) => {
  return (
    <SettingsSection
      title="Privacy"
      description="Manage your profile visibility and data preferences."
      icon={<ShieldCheck size={20} />}
    >
      <div className="flex items-center justify-between gap-4 py-4 first:pt-0">
        <div>
          <p className="text-sm font-medium text-gray-900">Public Profile</p>
          <p className="mt-1 text-sm text-gray-500">
            Allow other users to view your professional profile.
          </p>
        </div>

        <input
          type="checkbox"
          checked={settings.profileVisibility}
          onChange={(event) =>
            onChange("profileVisibility", event.target.checked)
          }
          aria-label="Public Profile"
          className="h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
        />
      </div>

      <div className="flex items-center justify-between gap-4 py-4 last:pb-0">
        <div>
          <p className="text-sm font-medium text-gray-900">Usage Analytics</p>
          <p className="mt-1 text-sm text-gray-500">
            Allow anonymous usage data to help improve the application.
          </p>
        </div>

        <input
          type="checkbox"
          checked={settings.analyticsConsent}
          onChange={(event) =>
            onChange("analyticsConsent", event.target.checked)
          }
          aria-label="Usage Analytics"
          className="h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
        />
      </div>
    </SettingsSection>
  );
};

export default PrivacySettings;
