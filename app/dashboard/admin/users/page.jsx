'use client';
import { useEffect, useState } from 'react';
import { getUsers, createUser } from '../../../../lib/supabase';
import UserForm from '../../../components/UserForm';
import { can } from '../../../../lib/permissions';
import AdminNavbar from '../../../components/AdminNavbar';
import AdminFooter from '../../../components/AdminFooter';

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const user = { role: 'admin' };

  if (!can(user.role, 'create_user')) {
    return <div>Access denied.</div>;
  }

  const [form, setForm] = useState({ email: '', password: '', role: '', firstName: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCreateUser = async e => {
    e.preventDefault();
    setLoading(true);
    // Only admin should be able to call this
    const { data, error } = await supabase.auth.admin.createUser({
      email: form.email,
      password: form.password,
      user_metadata: { role: form.role, firstName: form.firstName },
    });
    setLoading(false);
    if (error) alert(error.message);
    else alert('User created!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-papayawhip">
      <AdminNavbar />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <UserForm onSubmit={createUser} />
        <ul className="bg-white rounded shadow p-6 w-full max-w-lg">
          {users.map(user => (
            <li key={user.id}>
              {user.firstName} {user.lastName} ({user.role}) {user.classId && <>- {user.classId}</>}
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateUser}>
          {/* ...inputs for email, password, role, firstName... */}
          <button type="submit" disabled={loading}>Create User</button>
        </form>
      </main>
      <AdminFooter />
    </div>
  );
}
