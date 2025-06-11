'use client';
import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import { createUser, getClasses } from '../../lib/supabase';

export default function AdminPage() {
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getClasses()
      .then(setClasses)
      .catch(() => setError('Failed to load classes'));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-papayawhip p-8">
      <h1 className="text-2xl font-bold mb-6">Admin User Management</h1>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <UserForm onSubmit={createUser} classes={classes} />
      {/* ...user list... */}
    </div>
  );
}