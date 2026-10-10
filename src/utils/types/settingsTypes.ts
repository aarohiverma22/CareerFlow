import type { ReactNode } from "react";

export interface SettingsState {
  emailNotifications: boolean;
  interviewReminders: boolean;
  applicationUpdates: boolean;
  weeklySummary: boolean;
  theme: "light" | "dark" | "system";
  profileVisibility: boolean;
  analyticsConsent: boolean;
}

export interface SettingsSectionProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

export interface NotificationSettingsProps {
  settings: SettingsState;
  onChange: <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K],
  ) => void;
}

export interface AppearanceSettingsProps {
  settings: SettingsState;
  onChange: <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K],
  ) => void;
}

export interface PrivacySettingsProps {
  settings: SettingsState;
  onChange: <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K],
  ) => void;
}

export interface PasswordValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
