import { useAuth } from '../context/AuthContext';

export default function Settings() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6">Settings</h1>
        <p className="text-gray-600">Manage your account settings, {user?.name || 'User'}.</p>
      </div>
    </div>
  );
}