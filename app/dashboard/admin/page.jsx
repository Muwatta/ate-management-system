'use client';

import { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import AdminFooter from '../../components/AdminFooter';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

export default function AdminDashboard() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.replace('/auth/login');
      } else if (session.user.user_metadata.role !== 'admin') {
        router.replace('/auth/login');
      } else {
        setAdminName(session.user.user_metadata.username || session.user.email);
      }
    });
  }, [router]);

  const handleNavigation = () => {
    router.push('/dashboard/admin');
  };

  return (
    <div className="min-h-screen flex flex-col bg-papayawhip">
      <AdminNavbar adminName={adminName} />
      {/* Header bar with admin name on the right */}
      <div className="flex justify-end items-center px-8 py-2">
        <span className="text-lg font-semibold text-relblack">Welcome, {adminName}</span>
      </div>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 text-relblack text-center">Admin Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
          <Link href="/dashboard/admin/users" className="block bg-white rounded shadow p-6 hover:bg-orange-50">
            <div className="font-semibold text-lg mb-2">User Management</div>
            <div className="text-gray-600 text-sm">Create, edit, and manage users</div>
          </Link>
          <Link href="/dashboard/admin/notifications" className="block bg-white rounded shadow p-6 hover:bg-orange-50">
            <div className="font-semibold text-lg mb-2">Notifications</div>
            <div className="text-gray-600 text-sm">View system notifications</div>
          </Link>
          <Link href="/dashboard/admin/audit-logs" className="block bg-white rounded shadow p-6 hover:bg-orange-50">
            <div className="font-semibold text-lg mb-2">Audit Logs</div>
            <div className="text-gray-600 text-sm">Track all admin actions</div>
          </Link>
        </div>
      </main>
      <AdminFooter />
    </div>
  );
}
