import CalendarView from "./CalendarView";
import CalendarHeader from "./components/CalendarHeader";

const Calendar = () => {
  return (
    <div className="flex min-w-0 flex-col gap-6 m-5">
      <CalendarHeader />
      <CalendarView />
    </div>
  );
};

export default Calendar;
