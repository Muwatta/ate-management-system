import React, { ReactNode, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaHome,
  FaBook,
  FaTasks,
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaCog,
  FaCalendarAlt,
  FaFileAlt,
  FaComments,
  FaChartLine,
  FaLock,
  FaUserShield,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/Button";
import { toast } from "react-hot-toast";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const role = user?.role || "student";

  const menuConfig = {
    admin: [
      { path: "/dashboard", label: "Dashboard", icon: <FaHome /> },
      { path: "/courses", label: "Courses", icon: <FaBook /> },
      { path: "/assignments", label: "Assignments", icon: <FaTasks /> },
      { path: "/grades", label: "Grades", icon: <FaGraduationCap /> },
      { path: "/students", label: "Students", icon: <FaUsers /> },
      { path: "/teachers", label: "Teachers", icon: <FaChalkboardTeacher /> },
      { path: "/events", label: "Events", icon: <FaCalendarAlt /> },
      { path: "/reports", label: "Reports", icon: <FaFileAlt /> },
      { path: "/admin/users", label: "User Management", icon: <FaUserShield /> },
      { path: "/settings/security", label: "Security", icon: <FaLock /> },
      { path: "/settings", label: "Settings", icon: <FaCog /> },
    ],
    teacher: [
      { path: "/dashboard", label: "Dashboard", icon: <FaHome /> },
      { path: "/my-courses", label: "My Courses", icon: <FaBook /> },
      { path: "/assignments", label: "Assignments", icon: <FaTasks /> },
      { path: "/gradebook", label: "Gradebook", icon: <FaGraduationCap /> },
      { path: "/my-students", label: "My Students", icon: <FaUsers /> },
      { path: "/discussions", label: "Discussions", icon: <FaComments /> },
      { path: "/analytics", label: "Analytics", icon: <FaChartLine /> },
      { path: "/settings", label: "Settings", icon: <FaCog /> },
    ],
    student: [
      { path: "/dashboard", label: "Dashboard", icon: <FaHome /> },
      { path: "/my-courses", label: "My Courses", icon: <FaBook /> },
      { path: "/assignments", label: "Assignments", icon: <FaTasks /> },
      { path: "/my-grades", label: "My Grades", icon: <FaGraduationCap /> },
      { path: "/discussions", label: "Discussions", icon: <FaComments /> },
      { path: "/events", label: "Events", icon: <FaCalendarAlt /> },
      { path: "/settings", label: "Settings", icon: <FaCog /> },
    ],
  };

  const menuItems = menuConfig[role];

  const handleNavClick = (label: string) => {
    toast.success(`Navigating to ${label}!`, { duration: 2000 });
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="flex items-center justify-center h-16 border-b bg-indigo-50">
          <span className="text-2xl font-bold text-indigo-700">Algorise LMS</span>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => handleNavClick(item.label)}
              className={({ isActive: active }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                  active
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-700"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-white shadow px-6 py-3">
          <div className="flex items-center space-x-2 w-1/3">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-indigo-400"
            />
          </div>

          <div className="flex items-center space-x-6">
            <Button className="relative" ariaLabel="Notifications">
              <FaBell className="text-gray-600 text-lg" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                3
              </span>
            </Button>

            <div className="relative">
              <Button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                ariaLabel="Toggle profile menu"
                className="flex items-center space-x-2"
              >
                <FaUserCircle className="text-2xl text-gray-700" />
                <span className="text-sm font-medium text-gray-700">{user?.name || "Guest"}</span>
              </Button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-50">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleNavClick("My Profile")}
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleNavClick("Settings")}
                  >
                    Settings
                  </NavLink>
                  <Button
                    onClick={logout}
                    ariaLabel="Logout"
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 bg-gray-50 p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;