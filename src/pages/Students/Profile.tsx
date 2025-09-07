import { useAuth } from '../../context/AuthContext';

export default function StudentProfile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6">Student Profile</h1>
        <p className="text-gray-600">Name: {user?.name || 'Student'}</p>
        <p className="text-gray-600">Email: {user?.email || 'N/A'}</p>
      </div>
    </div>
  );
}