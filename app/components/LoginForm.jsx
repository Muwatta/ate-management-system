import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Example login API call (replace with your real backend logic)
async function loginUser({ username, password }) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) throw new Error('Invalid credentials');
  return res.json();
}

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    setLoading(true);
    try {
      await loginUser({ username, password });
      // Redirect or update UI on success
      window.location.href = '/dashboard'; // Change as needed
    } catch (err) {
      setError(err.message || 'Login failed');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col bg-papayawhip">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img
              src="/images/ATE-img-logo.jpg"
              alt="Algorise Tech Explorers Logo"
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 text-relblack">Login</h2>
          <form onSubmit={handleSubmit}>
            {error && <div className="text-red-600 mb-4">{error}</div>}
            <input
              className="block w-full mb-4 p-2 border rounded"
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
            />
            <input
              className="block w-full mb-6 p-2 border rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
