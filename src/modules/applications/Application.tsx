import ApplicationHeader from "./components/ApplicationHeader";
import ApplicationTable from "./components/ApplicationTable";

const Application = () => {
  return (
    <div className="flex min-w-0 flex-col gap-6 m-5">
      <ApplicationHeader />
      <ApplicationTable />
    </div>
  );
};

export default Application;
