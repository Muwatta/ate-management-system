export default function RoleBadge({ role }) {
  const color = {
    ADMIN: 'bg-orange-500',
    HR: 'bg-gold',
    STUDENT: 'bg-blue-500',
    TEACHER: 'bg-green-500',
    PARENT: 'bg-gray-500',
    STAFF: 'bg-gray-700',
    HOD: 'bg-purple-500',
  }[role] || 'bg-gray-300';

  return (
    <span className={`px-2 py-1 rounded text-white text-xs ${color}`}>
      {role}
    </span>
  );
}