import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Plus, Menu, X } from "lucide-react";

import { jobIcon } from "../../assets";
import { navItems } from "../../utils/constants/contentConstant";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed left-4 top-4 z-50 flex size-10 items-center justify-center rounded-lg bg-white text-[#1D1F23] shadow-md md:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-64 flex-col
          border-r border-[#E5E7EB] bg-white
          transition-transform duration-300 ease-in-out
          md:sticky md:z-30 md:flex md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header / Logo */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#F0F0F2] px-6">
          <div className="flex items-center gap-3">
            <img src={jobIcon} alt="JobTrack" className="size-9" />

            <span className="text-2xl font-bold text-[#4F46E5]">JobTrack</span>
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex size-9 items-center justify-center rounded-lg text-[#595C61] hover:bg-[#F6F7F9] md:hidden"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-4 py-6">
          <div className="flex flex-col gap-2">
            {navItems?.map((item) => {
              const Icon = item?.icon;

              return (
                <NavLink
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-[#EEF2FF] text-[#4F46E5]"
                        : "text-[#595C61] hover:bg-[#F6F7F9] hover:text-[#1D1F23]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={20} strokeWidth={isActive ? 2.2 : 2} />

                      <span>{item?.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Add Application */}
          <div className="mt-auto pt-6">
            <NavLink
              to="/applications/add"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4338CA]"
            >
              <Plus size={20} />
              <span>Add Application</span>
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidenav;
