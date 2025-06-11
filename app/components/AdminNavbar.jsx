import Link from 'next/link';

export default function AdminNavbar({ adminName = "Admin" }) {
  return (
    <nav className="bg-blue-900 text-white p-4 flex items-center justify-between shadow">
      {/* Logo and Admin Name */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/ATE-img-logo.jpg"
          alt="Algorise Tech Explorers Logo"
          className="h-10 w-auto"
        />
        <span className="font-bold text-lg">{adminName}</span>
      </div>
      {/* Centered nav links */}
      <ul className="flex space-x-8 mx-auto">
        <li>
          <Link
            href="/dashboard/admin/users"
            className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-colors pb-1"
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/admin/notifications"
            className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-colors pb-1"
          >
            Notifications
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/admin/audit-logs"
            className="hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-colors pb-1"
          >
            Audit Logs
          </Link>
        </li>
      </ul>
    </nav>
  );
}