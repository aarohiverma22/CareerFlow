import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidenav from "./Sidenav";
import AddApplicationModal from "../../modules/applications/components/AddApplicationModal";

const AppLayout = () => {
  const [isAddApplicationOpen, setIsAddApplicationOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <Sidenav onAddApplication={() => setIsAddApplicationOpen(true)} />
      {/* Main Application Area */}
      <div className="flex min-w-0 flex-1 flex-col bg-white">
        {/* Header */}
        <Header username="Aarohi Verma" />

        {/* Page Content */}
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Add Application Modal */}
      <AddApplicationModal
        isOpen={isAddApplicationOpen}
        onClose={() => setIsAddApplicationOpen(false)}
      />
    </div>
  );
};

export default AppLayout;
