import { useEffect, useState } from "react";
import type { SettingsState } from "../../utils/types/settingsTypes";
import SettingsHeader from "./components/SettingsHeader";
import NotificationSettings from "./components/NotificationSettings";
import AppearanceSettings from "./components/AppearanceSettings";
import PrivacySettings from "./components/PrivacySettings";
import SecuritySettings from "./components/SecuritySettings";

const initialSettings: SettingsState = {
  emailNotifications: true,
  interviewReminders: true,
  applicationUpdates: true,
  weeklySummary: false,
  theme: "light",
  profileVisibility: false,
  analyticsConsent: true,
};

const Settings = () => {
  const [settings, setSettings] = useState<SettingsState>(initialSettings);

  const updateSetting = <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K],
  ) => {
    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));
  };
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const shouldUseDark =
        settings.theme === "dark" ||
        (settings.theme === "system" && mediaQuery.matches);
      root.classList.toggle("dark", shouldUseDark);
    };
    applyTheme();
    if (settings.theme === "system") {
      mediaQuery.addEventListener("change", applyTheme);
      return () => {
        mediaQuery.removeEventListener("change", applyTheme);
      };
    }
  }, [settings.theme]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 sm:p-6 lg:p-8">
      <SettingsHeader />
      <NotificationSettings settings={settings} onChange={updateSetting} />
      <AppearanceSettings settings={settings} onChange={updateSetting} />
      <PrivacySettings settings={settings} onChange={updateSetting} />
      <SecuritySettings />
    </div>
  );
};

export default Settings;
