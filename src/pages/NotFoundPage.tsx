import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or you don't have access to it.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
          aria-label="Go back home"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
}