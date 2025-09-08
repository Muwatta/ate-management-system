import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaTasks,
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaCog,
  FaBars,
  FaTimes,
  FaUserShield,
  FaCalendarAlt,
  FaFileAlt,
  FaComments,
  FaChartLine,
  FaLock,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Button } from "./Button";
import { toast } from "react-hot-toast";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

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

  const menuItems = menuConfig[user?.role || "student"];

  const handleNavClick = (label) => {
    toast.success(`Navigating to ${label}!`, { duration: 2000 });
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        ariaLabel={isOpen ? "Close sidebar" : "Open sidebar"}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-md"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </Button>

      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center justify-center h-16 border-b bg-indigo-50">
          <span className="text-2xl font-bold text-indigo-700">Algorise LMS</span>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => handleNavClick(item.label)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                  isActive
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

        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <img
              src={user?.avatar || "/images/default-avatar.png"}
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-700">{user?.name || "Guest User"}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role || "student"}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}