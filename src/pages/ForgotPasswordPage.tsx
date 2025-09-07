import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      toast.error('Please enter your email');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSuccess('Password reset link sent to your email');
        toast.success('Password reset link sent to your email');
      } else {
        throw new Error('Failed to send reset link');
      }
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
      toast.error('Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200">
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Reset Your Password
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter your email to receive a password reset link
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
          {error && (
            <p className="text-red-500 text-sm text-center" role="alert">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-500 text-sm text-center" role="alert">
              {success}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-200 flex items-center justify-center"
            disabled={loading}
            aria-label="Send reset link"
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : null}
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm text-indigo-600 hover:text-indigo-800 transition duration-200"
            aria-label="Back to login"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}