import { Settings2 } from "lucide-react";

const SettingsHeader = () => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
        <Settings2 size={23} />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Settings
        </h1>

        <p className="mt-1 text-sm leading-6 text-gray-500 sm:text-base">
          Customize your account, notifications, and preferences.
        </p>
      </div>
    </div>
  );
};

export default SettingsHeader;
