import React, { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

interface DashboardLayoutProps {
  children: ReactNode;
  role?: "student" | "teacher" | "admin"; // 👈 role prop
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, role = "student" }) => {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Active link checker
  const isActive = (path: string) =>
    location.pathname.startsWith(path)
      ? "text-yellow-400 font-semibold"
      : "text-gray-300 hover:text-white";

  // Sidebar menus by role
  const renderSidebarLinks = () => {
    switch (role) {
      case "student":
        return (
          <>
            <Link to="/dashboard/courses" className={isActive("/dashboard/courses")}>
              📚 My Courses
            </Link>
            <Link to="/dashboard/assignments" className={isActive("/dashboard/assignments")}>
              📝 Assignments
            </Link>
            <Link to="/dashboard/grades" className={isActive("/dashboard/grades")}>
              🎯 Grades
            </Link>
            <Link to="/students/progress" className={isActive("/students/progress")}>
              📊 Progress
            </Link>
          </>
        );

      case "teacher":
        return (
          <>
            <Link to="/teachers" className={isActive("/teachers")}>
              📖 My Dashboard
            </Link>
            <Link to="/teachers/create-course" className={isActive("/teachers/create-course")}>
              ➕ Create Course
            </Link>
            <Link to="/teachers/manage-students" className={isActive("/teachers/manage-students")}>
              👩‍🎓 Manage Students
            </Link>
          </>
        );

      case "admin":
        return (
          <>
            <Link to="/admin" className={isActive("/admin")}>
              🛠 Admin Panel
            </Link>
            <Link to="/admin/manage-users" className={isActive("/admin/manage-users")}>
              👥 Manage Users
            </Link>
            <Link to="/settings" className={isActive("/settings")}>
              ⚙ Settings
            </Link>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold">LMS</h2>
        <nav className="space-y-2 mt-6">{renderSidebarLinks()}</nav>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-3">
          {/* Search */}
          <div className="flex items-center space-x-2 w-1/3">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-yellow-400"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            {/* Notifications */}
            <button className="relative">
              <FaBell className="text-gray-600 text-lg" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                3
              </span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2"
              >
                <FaUserCircle className="text-2xl text-gray-700" />
                <span className="text-sm font-medium text-gray-700">John Doe</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                  <Link
                    to="/students/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 bg-gray-50 p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
