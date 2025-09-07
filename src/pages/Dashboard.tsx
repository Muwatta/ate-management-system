import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6">
          Welcome to Your Dashboard, {user?.name || 'User'}
        </h1>
        <p className="text-gray-600">Access your courses, assignments, and more.</p>
      </div>
    </div>
  );
}