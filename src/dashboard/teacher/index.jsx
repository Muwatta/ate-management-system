'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getCourses } from '../api/courses';

export default function TeacherDashboard() {
  const { user, loading } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!loading && user) {
      getCourses(user.id, 'teacher').then(setCourses);
    }
  }, [user, loading]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in.</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>
      
      <h2 className="text-2xl font-semibold mb-2">Welcome, {user.first_name}</h2>
      <h2 className="mt-4 text-xl">Your Courses</h2>
      <ul className="space-y-2 mb-6">
        {courses.map(course => (
          <li key={course.id} className="p-4 bg-white shadow rounded">
            {course.title}
          </li>
        ))}
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2">Manage Results</h2>
      <p className="text-gray-600 mb-4">Upload results online or via CSV</p>
      <input type="file" accept=".csv" className="border p-2 rounded mb-4" />
      <button className="px-4 py-2 bg-green-600 text-white rounded">Upload Results</button>
    </div>
  );
}
