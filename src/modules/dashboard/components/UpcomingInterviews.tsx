import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { upcomingInterviews } from "./ActionItems";

const UpcomingInterviews = () => {
  const navigate = useNavigate();
  const sortedInterviews = [...upcomingInterviews].sort((a, b) =>
    a.date.localeCompare(b.date),
  );
  const formatDate = (date: string) => {
    return new Date(`${date}T12:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
  };

  return (
    <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Upcoming Interviews
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Stay prepared for your next opportunity.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/calendar")}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          View calendar
        </button>
      </div>

      {sortedInterviews?.length === 0 ? (
        <div className="py-10 text-center">
          <CalendarDays size={32} className="mx-auto text-gray-400" />

          <p className="mt-3 text-sm font-medium text-gray-700">
            No upcoming interviews
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Your scheduled interviews will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          {sortedInterviews?.slice(0, 4)?.map((interview) => (
            <div
              key={interview.id}
              className="flex items-start gap-3 rounded-lg border border-gray-100 p-3"
            >
              <div className="flex min-w-14 flex-col items-center justify-center rounded-lg bg-indigo-50 px-2 py-3">
                <CalendarDays size={17} className="mb-1 text-indigo-600" />

                <span className="text-xs font-semibold text-indigo-700">
                  {formatDate(interview.date)}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-gray-900">
                  {interview.jobTitle}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {interview.company}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  {interview.interviewType}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock3 size={13} />
                    {interview.time}
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <MapPin size={13} />
                    Check details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingInterviews;
