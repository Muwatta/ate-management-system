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
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth(); // Assume user.role exists (e.g., "admin", "teacher", "student")

  // Define role-based menu items
  const menuConfig = {
    admin: [
      { path: "/dashboard", label: "Dashboard", icon: <FaHome /> },
      { path: "/dashboard/courses", label: "Courses", icon: <FaBook /> },
      { path: "/dashboard/assignments", label: "Assignments", icon: <FaTasks /> },
      { path: "/dashboard/grades", label: "Grades", icon: <FaGraduationCap /> },
      { path: "/students", label: "Students", icon: <FaUsers /> },
      { path: "/teachers", label: "Teachers", icon: <FaChalkboardTeacher /> },
      { path: "/admin/users", label: "User Management", icon: <FaUserShield /> },
      { path: "/settings", label: "Settings", icon: <FaCog /> },
    ],
    teacher: [
      { path: "/dashboard", label: "Dashboard", icon: <FaHome /> },
      { path: "/dashboard/my-courses", label: "My Courses", icon: <FaBook /> },
      { path: "/dashboard/assignments", label: "Assignments", icon: <FaTasks /> },
      { path: "/dashboard/grades", label: "Gradebook", icon: <FaGraduationCap /> },
      { path: "/students", label: "My Students", icon: <FaUsers /> },
      { path: "/settings", label: "Settings", icon: <FaCog /> },
    ],
    student: [
      { path: "/dashboard", label: "Dashboard", icon: <FaHome /> },
      { path: "/dashboard/courses", label: "My Courses", icon: <FaBook /> },
      { path: "/dashboard/assignments", label: "Assignments", icon: <FaTasks /> },
      { path: "/dashboard/grades", label: "My Grades", icon: <FaGraduationCap /> },
      { path: "/settings", label: "Settings", icon: <FaCog /> },
    ],
  };

  // Default to "student" if no role
  const menuItems = menuConfig[user?.role || "student"];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-md"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo / Branding */}
        <div className="flex items-center justify-center h-16 border-b">
          <span className="text-2xl font-bold text-indigo-700">School LMS</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)} // close on mobile
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
      </aside>
    </>
  );
}
