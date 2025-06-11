'use client';
import { useEffect, useState } from 'react';
import AdminNavbar from '../../../components/AdminNavbar';
import AdminFooter from '../../../components/AdminFooter';

async function getAuditLogs() {
  const res = await fetch('/api/audit-logs');
  if (!res.ok) throw new Error('Failed to fetch audit logs');
  return res.json();
}

export default function AuditLogsPage() {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAuditLogs()
      .then(setLogs)
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-papayawhip">
      <AdminNavbar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Audit Logs</h1>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-papayawhip text-relblack">
                <th className="py-2 px-4 text-left">Time</th>
                <th className="py-2 px-4 text-left">Action</th>
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {logs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-500">
                    No audit logs found.
                  </td>
                </tr>
              ) : (
                logs.map(log => (
                  <tr key={log.id}>
                    <td className="py-2 px-4">{new Date(log.time || log.createdAt).toLocaleString()}</td>
                    <td className="py-2 px-4">{log.action}</td>
                    <td className="py-2 px-4">{log.user}</td>
                    <td className="py-2 px-4">{log.details}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
      <AdminFooter />
    </div>
  );
}