import axios from 'axios';

export async function login(email, password) {
  const res = await axios.post('/api/token/', { email, password });
  const token = res.data.access;
  // Optionally fetch user profile
  const profileRes = await axios.get('/api/auth/profile/', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return { token, user: profileRes.data };
}

export async function getUserProfile(token) {
  const res = await axios.get('/api/auth/profile/', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

export function logout() {
  // Optionally call backend logout endpoint
  localStorage.removeItem('access_token');
}