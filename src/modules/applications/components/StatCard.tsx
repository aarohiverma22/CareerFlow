import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: ReactNode;
}

const StatCard = ({ title, value, subtitle, icon }: StatCardProps) => {
  return (
    <div className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-gray-500">{title}</p>

          <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            {value}
          </p>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">{subtitle}</p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
