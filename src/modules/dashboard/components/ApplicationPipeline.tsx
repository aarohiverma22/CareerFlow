import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { applications } from "./ActionItems";
import { pipelineStatuses } from "../../../utils/constants/contentConstant";

const ApplicationPipeline = () => {
  const navigate = useNavigate();
  const total = applications?.length;

  return (
    <section className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Application Pipeline
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Track your progress across hiring stages.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/applications")}
          className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          View all
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="mt-6 space-y-5">
        {pipelineStatuses?.map((status) => {
          const count = applications?.filter(
            (application) => application?.status === status?.label,
          ).length;

          const percentage = total > 0 ? (count / total) * 100 : 0;

          return (
            <div key={status?.label}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${status?.color}`}
                  />

                  <span className="text-sm text-gray-700">{status?.label}</span>
                </div>

                <span className="text-sm font-semibold text-gray-900">
                  {count}
                </span>
              </div>

              <div
                className="h-2 overflow-hidden rounded-full bg-gray-100"
                role="progressbar"
                aria-label={`${status?.label} applications`}
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={count}
              >
                <div
                  className={`h-full rounded-full transition-all duration-300 ${status?.color}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-lg bg-indigo-50 p-3">
        <p className="text-sm text-indigo-700">
          You have{" "}
          <span className="font-semibold">
            {
              applications?.filter(
                (application) => application?.status === "Interview",
              ).length
            }
          </span>{" "}
          applications currently in the interview stage.
        </p>
      </div>
    </section>
  );
};

export default ApplicationPipeline;
