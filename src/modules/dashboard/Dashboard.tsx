import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/DashboardStats";
import ApplicationPipeline from "./components/ApplicationPipeline";
import UpcomingInterviews from "./components/UpcomingInterviews";
import RecentApplications from "./components/RecentApplications";

const Dashboard = () => {
  return (
    <main className="min-w-0 space-y-6 p-4 sm:p-6 lg:p-8">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <ApplicationPipeline />
        <UpcomingInterviews />
      </div>
      <RecentApplications />
    </main>
  );
};

export default Dashboard;
