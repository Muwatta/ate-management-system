import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'teacher' | 'admin' | ''>('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !role) {
      setError('Please fill in all fields');
      toast.error('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await login(email, password); // Call updated login function
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } catch (err) {
      setError('Login failed. Please try again.');
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
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