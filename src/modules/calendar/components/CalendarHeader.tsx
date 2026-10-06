import { CalendarDays, Clock3, CircleCheck } from "lucide-react";
import StatCard from "../../../componenets/reusable/StatCard";

const CalendarHeader = () => {
  return (
    <section className="w-full">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Calendar
        </h1>

        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Manage your interviews and track your upcoming job activities.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Interviews"
          value={5}
          subtitle="2 scheduled this week"
          icon={<CalendarDays size={20} />}
        />

        <StatCard
          title="Pending"
          value={3}
          subtitle="Awaiting action"
          icon={<Clock3 size={20} />}
        />

        <StatCard
          title="Completed"
          value={8}
          subtitle="Completed interviews"
          icon={<CircleCheck size={20} />}
        />
      </div>
    </section>
  );
};

export default CalendarHeader;
