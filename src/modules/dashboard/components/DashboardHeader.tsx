import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back, Aarohi! Here's your job search overview.
        </p>
      </div>

      <button
        type="button"
        onClick={() => navigate("/applications")}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <BriefcaseBusiness size={18} />
        Manage Applications
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default DashboardHeader;
