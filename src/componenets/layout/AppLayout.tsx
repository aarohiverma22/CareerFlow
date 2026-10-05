import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidenav from "./Sidenav";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <Sidenav />

      {/* Main Application Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <Header username="Aarohi Verma" />

        {/* Page Content */}
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
