'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUsers, getCourses, getResults } from '../api/admin';

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!loading && user && user.role === 'admin') {
      getUsers().then(setUsers);
      getCourses().then(setCourses);
      getResults().then(setResults);
    }
  }, [user, loading]);

  if (loading) return <div>Loading...</div>;
  if (!user || user.role !== 'admin') return <div>Unauthorized</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <section>
        <h2 className="mt-4 text-xl">Users</h2>
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.email} ({u.role})</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mt-4 text-xl">Courses</h2>
        <ul>
          {courses.map(c => (
            <li key={c.id}>{c.title}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mt-4 text-xl">Results</h2>
        <ul>
          {results.map(r => (
            <li key={r.id}>{r.student} - {r.grade}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
