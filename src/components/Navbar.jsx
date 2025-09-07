import { useState, useMemo, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaBookOpen,
  FaUserPlus,
  FaEnvelope,
  FaBullhorn,
  FaUserCircle,
  FaTachometerAlt,
  FaSearch,
  FaBell,
  FaCalendarAlt,
  FaTasks,
  FaBook,
  FaComments,
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  // Debug user state
  useEffect(() => {
    console.log('Navbar user state:', user);
  }, [user]);

  // Memoized role-based menus
  const roleMenus = useMemo(() => {
    if (!user) {
      return [
        { path: '/about', label: 'About', icon: <FaBookOpen /> },
        { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
        { path: '/events-news', label: 'Events & News', icon: <FaBullhorn /> },
      ];
    }

    switch (user.role) {
      case 'student':
        return [
          { path: '/dashboard/courses', label: 'Courses', icon: <FaBook /> },
          { path: '/dashboard/assignments', label: 'Assignments', icon: <FaTasks /> },
          { path: '/dashboard/grades', label: 'Grades', icon: <FaBookOpen /> },
          { path: '/calendar', label: 'Calendar', icon: <FaCalendarAlt /> },
          { path: '/messages', label: 'Messages', icon: <FaComments /> },
        ];
      case 'teacher':
        return [
          { path: '/dashboard/courses', label: 'Courses', icon: <FaBook /> },
          { path: '/dashboard/assignments', label: 'Assignments', icon: <FaTasks /> },
          { path: '/events-news', label: 'Events', icon: <FaBullhorn /> },
          { path: '/messages', label: 'Messages', icon: <FaComments /> },
        ];
      case 'admin':
        return [
          { path: '/admission', label: 'Admission', icon: <FaUserPlus /> },
          { path: '/dashboard/courses', label: 'Courses', icon: <FaBook /> },
          { path: '/events-news', label: 'Events', icon: <FaBullhorn /> },
          { path: '/admin/manage-users', label: 'Users', icon: <FaUserCircle /> },
        ];
      default:
        return [];
    }
  }, [user]);

  // Memoized dashboard path
  const dashboardPath = useMemo(() => {
    if (!user) return null;
    switch (user.role) {
      case 'student':
        return '/students';
      case 'teacher':
        return '/teachers';
      case 'admin':
        return '/admin';
      default:
        return null;
    }
  }, [user]);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-600 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 font-bold text-2xl text-white hover:text-indigo-200 transition duration-300 ease-in-out"
          aria-label="Algorise Tech Explorers Home"
        >
          <img
            src="/images/ATE-img-logo.jpg"
            alt="Algorise Tech Explorers Logo"
            className="h-12 w-auto rounded-lg shadow-md"
            style={{ maxHeight: 48 }}
            onError={() => console.error('Failed to load logo image')}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {roleMenus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-2 text-white text-base font-medium hover:text-indigo-200 hover:bg-indigo-700 px-4 py-2 rounded-lg transition duration-300 ease-in-out ${
                  isActive ? 'bg-indigo-700 text-indigo-100' : ''
                }`
              }
              aria-label={menu.label}
            >
              {menu.icon} {menu.label}
            </NavLink>
          ))}
          {user && (
            <div className="flex items-center gap-4">
              <button
                className="text-white hover:text-indigo-200 p-2 rounded-full hover:bg-indigo-700 transition duration-300"
                aria-label="Search"
              >
                <FaSearch className="text-lg" />
              </button>
              <button
                className="text-white hover:text-indigo-200 p-2 rounded-full hover:bg-indigo-700 transition duration-300 relative"
                aria-label="Notifications"
              >
                <FaBell className="text-lg" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          )}
        </div>

        {/* Profile / Auth */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-white hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg p-2 transition duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

          {/* Profile / Login */}
          <div className="relative group">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-full"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <span className="inline-block rounded-full overflow-hidden border-2 border-indigo-200 w-12 h-12 bg-gray-200">
                <FaUserCircle className="w-full h-full text-gray-500 text-3xl" />
              </span>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-3 z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-300 ease-in-out">
              {!user ? (
                <Link
                  to="/login"
                  className="block px-4 py-3 text-base text-gray-800 hover:bg-indigo-100 hover:text-indigo-900 transition duration-200"
                  aria-label="Login"
                >
                  Login
                </Link>
              ) : (
                <>
                  <div className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs capitalize">{user.role}</p>
                  </div>
                  {dashboardPath && (
                    <Link
                      to={dashboardPath}
                      className="block px-4 py-3 text-base text-gray-800 hover:bg-indigo-100 hover:text-indigo-900 transition duration-200"
                      aria-label="Dashboard"
                    >
                      <FaTachometerAlt className="inline mr-2" /> Dashboard
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-3 text-base text-gray-800 hover:bg-indigo-100 hover:text-indigo-900 transition duration-200"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-indigo-800 px-4 pb-4 shadow-lg animate-slide-down">
          {roleMenus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 border-b border-indigo-600 text-white text-base font-medium hover:text-indigo-200 hover:bg-indigo-900 rounded-lg transition duration-200 ${
                  isActive ? 'bg-indigo-900 text-indigo-100' : ''
                }`
              }
              onClick={() => setOpen(false)}
              aria-label={menu.label}
            >
              {menu.icon} {menu.label}
            </NavLink>
          ))}
          {user && (
            <div className="flex items-center gap-4 py-3 border-b border-indigo-600">
              <button
                className="flex items-center gap-3 text-white text-base font-medium hover:text-indigo-200 hover:bg-indigo-900 rounded-lg transition duration-200 w-full"
                aria-label="Search"
              >
                <FaSearch className="text-xl" /> Search
              </button>
              <button
                className="flex items-center gap-3 text-white text-base font-medium hover:text-indigo-200 hover:bg-indigo-900 rounded-lg transition duration-200 w-full relative"
                aria-label="Notifications"
              >
                <FaBell className="text-xl" /> Notifications
                <span className="absolute left-6 top-2 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          )}
          {!user ? (
            <Link
              to="/login"
              className="flex items-center gap-3 py-3 text-white text-base font-medium hover:text-indigo-200 hover:bg-indigo-900 rounded-lg transition duration-200 mt-2"
              onClick={() => setOpen(false)}
              aria-label="Login"
            >
              <FaUserCircle className="text-xl" /> Login
            </Link>
          ) : (
            <>
              {dashboardPath && (
                <Link
                  to={dashboardPath}
                  className="flex items-center gap-3 py-3 text-white text-base font-medium hover:text-indigo-200 hover:bg-indigo-900 rounded-lg transition duration-200 mt-2"
                  onClick={() => setOpen(false)}
                  aria-label="Dashboard"
                >
                  <FaTachometerAlt className="text-xl" /> Dashboard
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="flex items-center gap-3 py-3 text-white text-base font-medium hover:text-indigo-200 hover:bg-indigo-900 rounded-lg transition duration-200 mt-2 w-full text-left"
                aria-label="Logout"
              >
                <FaUserCircle className="text-xl" /> Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}