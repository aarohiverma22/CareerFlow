import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { applications } from "./ActionItems";
import GenericTable, {
  type Column,
} from "../../../componenets/reusable/GenericTable";

type ApplicationRecord = (typeof applications)[number];

const statusStyles: Record<string, string> = {
  Applied: "bg-indigo-50 text-indigo-700",
  Screening: "bg-sky-50 text-sky-700",
  Interview: "bg-purple-50 text-purple-700",
  Offer: "bg-emerald-50 text-emerald-700",
  Rejected: "bg-rose-50 text-rose-700",
  Withdrawn: "bg-gray-100 text-gray-600",
};

const RecentApplications = () => {
  const navigate = useNavigate();

  const recentApplications = [...applications]
    .sort((a, b) => b.dateApplied.localeCompare(a.dateApplied))
    .slice(0, 5);

  const formatDate = (date: string): string => {
    return new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const columns: Column<ApplicationRecord>[] = [
    {
      key: "company",
      header: "Company / Role",
      render: (_value, row) => (
        <div>
          <p className="text-sm font-medium text-gray-900">{row.company}</p>

          <p className="mt-1 text-xs text-gray-500">{row.jobTitle}</p>
        </div>
      ),
    },
    {
      key: "dateApplied",
      header: "Date Applied",
      render: (value) => formatDate(String(value)),
    },
    {
      key: "status",
      header: "Status",
      render: (value) => {
        const status = String(value);

        return (
          <span
            className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${
              statusStyles[status] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {status}
          </span>
        );
      },
    },
  ];

  return (
    <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your latest job application activity.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/applications")}
          className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          View all
          <ArrowRight size={15} />
        </button>
      </div>

      {recentApplications.length === 0 ? (
        <div className="py-10 text-center">
          <BriefcaseBusiness size={32} className="mx-auto text-gray-400" />

          <p className="mt-3 text-sm font-medium text-gray-700">
            No applications yet
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Start tracking your job search by adding an application.
          </p>
        </div>
      ) : (
        <div className="mt-5">
          <GenericTable<ApplicationRecord>
            columns={columns}
            data={recentApplications}
            emptyMessage="No recent applications found."
          />
        </div>
      )}
    </section>
  );
};

export default RecentApplications;
