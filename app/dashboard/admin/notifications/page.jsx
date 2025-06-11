'use client';

import { useEffect, useState, useRef } from 'react';
import { getNotifications } from '../../../../lib/supabase';
import NotificationList from '../../../components/NotificationList';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

export default function AdminNotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const latestNotificationId = useRef<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications();

        // Detect new notification
        if (latestNotificationId.current && data[0]?.id !== latestNotificationId.current) {
          const newOnes = data.filter(n => n.id !== latestNotificationId.current);
          newOnes.forEach(n => {
            toast.success(n.title || 'You have a new notification');
          });
        }

        // Update state
        setNotifications(data);
        if (data.length > 0) {
          latestNotificationId.current = data[0].id;
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load notifications.');
        setLoading(false);
      }
    };

    fetchNotifications(); // Initial fetch

    const interval = setInterval(fetchNotifications, 10000); // Poll every 10s
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10 text-gray-500">
          <Loader2 className="animate-spin w-6 h-6" />
          <span className="ml-2">Loading...</span>
        </div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : notifications.length === 0 ? (
        <div className="text-gray-500">No notifications yet.</div>
      ) : (
        <NotificationList notifications={notifications} />
      )}
    </div>
  );
}
