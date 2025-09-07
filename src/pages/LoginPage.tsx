import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaSpinner } from 'react-icons/fa';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher' | 'admin' | ''>('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // Placeholder for backend API call
      // const response = await api.login({ email, password, role });
      // login(response.user, response.token);
      login(
        {
          id: '1',
          name: 'John Doe',
          email,
          role,
        },
        'placeholder-token' // Replace with actual token from backend
      );
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleLogin = (selectedRole: 'student' | 'teacher' | 'admin') => {
    login(
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: selectedRole,
      },
      'placeholder-token' // Replace with actual token from backend
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Welcome to LMS Portal
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Sign in to access your personalized dashboard
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="Enter your email"
              aria-required="true"
              disabled={loading}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              placeholder="Enter your password"
              aria-required="true"
              disabled={loading}
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) =>
                setRole(e.target.value as 'student' | 'teacher' | 'admin' | '')
              }
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
              aria-required="true"
              disabled={loading}
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-200 flex items-center justify-center"
            disabled={loading}
            aria-label="Sign in"
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : null}
            Sign In
          </button>
        </form>

        {/* Quick Role-Based Login (for testing) */}
        <div className="mt-6 space-y-4">
          <p className="text-center text-sm text-gray-600">
            Or choose a role to quick login (testing only):
          </p>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleRoleLogin('student')}
              className="py-2 px-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200"
              disabled={loading}
            >
              Student
            </button>
            <button
              onClick={() => handleRoleLogin('teacher')}
              className="py-2 px-3 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition duration-200"
              disabled={loading}
            >
              Teacher
            </button>
            <button
              onClick={() => handleRoleLogin('admin')}
              className="py-2 px-3 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition duration-200"
              disabled={loading}
            >
              Admin
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/forgot-password"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition duration-200"
            aria-label="Forgot password"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}