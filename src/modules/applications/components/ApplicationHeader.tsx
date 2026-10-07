import {
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  TrendingUp,
  Plus,
} from "lucide-react";
import Button from "../../../componenets/reusable/Button";
import StatCard from "../../../componenets/reusable/StatCard";
import { useState } from "react";
import AddApplicationModal from "./AddApplicationModal";

const ApplicationHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Applications
          </h1>

          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Manage and track your job application pipeline and interview status.
          </p>
        </div>

        <div className="shrink-0">
          <Button
            text="Add Application"
            icon={<Plus size={18} />}
            className="w-full sm:w-auto"
            onClick={() => {
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      {/* Statistic Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Applications"
          value={24}
          subtitle="+3 this week"
          icon={<BriefcaseBusiness size={20} />}
        />

        <StatCard
          title="Active Interviews"
          value={5}
          subtitle="2 scheduled today"
          icon={<CalendarDays size={20} />}
        />

        <StatCard
          title="Pending Offers"
          value={1}
          subtitle="Expires in 4 days"
          icon={<Clock3 size={20} />}
        />

        <StatCard
          title="Response Rate"
          value="42%"
          subtitle="+5% from last month"
          icon={<TrendingUp size={20} />}
        />
      </div>

      {/* Add Application Modal */}
      <AddApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ApplicationHeader;
