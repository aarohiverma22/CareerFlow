import { events } from "../../utils/constants/contentConstant";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarView = () => {
  return (
    <section className="min-w-0 w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="min-w-0">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
          dayMaxEvents={3}
        />
      </div>
    </section>
  );
};

export default CalendarView;
