import { applications, upcomingInterviews } from "./ActionItems";
import {
  BriefcaseBusiness,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
} from "lucide-react";

const DashboardStats = () => {
  const totalApplications = applications?.length;
  const offersReceived = applications?.filter(
    (application) => application?.status === "Offer",
  ).length;
  const responseStatuses = ["Screening", "Interview", "Offer", "Rejected"];
  const respondedApplications = applications?.filter((application) =>
    responseStatuses?.includes(application?.status),
  ).length;
  const responseRate =
    totalApplications > 0
      ? Math.round((respondedApplications / totalApplications) * 100)
      : 0;
  const stats = [
    {
      title: "Total Applications",
      value: totalApplications,
      description: "All recorded applications",
      icon: BriefcaseBusiness,
      iconStyle: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Upcoming Interviews",
      value: upcomingInterviews.length,
      description: "Scheduled interviews",
      icon: CalendarDays,
      iconStyle: "bg-purple-50 text-purple-600",
    },
    {
      title: "Offers Received",
      value: offersReceived,
      description: "Offers recorded so far",
      icon: CheckCircle2,
      iconStyle: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Response Rate",
      value: `${responseRate}%`,
      description: "Applications with a response",
      icon: ChartNoAxesCombined,
      iconStyle: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats?.map((stat) => {
        const Icon = stat?.icon;

        return (
          <div
            key={stat?.title}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat?.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {stat?.value}
                </h2>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat?.iconStyle}`}
              >
                <Icon size={21} />
              </div>
            </div>

            <p className="mt-3 text-xs text-gray-500">{stat?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
