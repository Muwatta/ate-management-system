export default function NotificationList({ notifications = [] }) {
  if (!notifications.length) {
    return <div className="text-gray-500">No notifications yet.</div>;
  }

  return (
    <ul className="space-y-3">
      {notifications.map((n) => (
        <li key={n.id} className="bg-papayawhip border-l-4 border-orange-500 p-4 rounded shadow">
          <div className="font-semibold text-relblack">{n.type || 'Notification'}</div>
          <div className="text-sm text-gray-700">{n.message}</div>
          {n.user && (
            <div className="text-xs text-gray-500 mt-1">
              User: {n.user} {n.class && <>| Class: {n.class}</>}
            </div>
          )}
          <div className="text-xs text-gray-400 mt-1">
            {new Date(n.createdAt || n.time).toLocaleString()}
          </div>
        </li>
      ))}
    </ul>
  );
}