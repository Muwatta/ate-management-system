'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    setLoading(false);
    if (error) {
      alert('Invalid credentials');
    } else {
      // Fetch user role from user_metadata or management table
      const user = data.user;
      const role = user?.user_metadata?.role; // If using user_metadata
      // Or fetch from management table using user.id

      // Redirect based on role
      if (role === 'admin') router.replace('/dashboard/admin');
      else if (role === 'teacher') router.replace('/dashboard/teacher');
      else if (role === 'parent') router.replace('/dashboard/parent');
      else if (role === 'student') router.replace('/dashboard/student');
      else if (role === 'accounting') router.replace('/dashboard/accounting');
      else if (role === 'exam-officer') router.replace('/dashboard/exam-officer');
      else router.replace('/'); // fallback
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 space-y-4">
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <button type="submit" disabled={loading} className="w-full bg-black text-white py-2 rounded">
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

