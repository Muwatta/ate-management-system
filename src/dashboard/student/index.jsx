'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getCourses, getEnrollments } from '../api/courses';

export default function StudentDashboard() {
  const { user, loading } = useAuth();
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    if (!loading && user) {
      getCourses(user.id).then(setCourses);
      getEnrollments(user.id).then(setEnrollments);
    }
  }, [user, loading]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in.</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.first_name}</h1>
      <h2 className="mt-4 text-xl">Your Courses</h2>
      <ul className="space-y-2 mb-6">
        {courses.map(course => (
          <li key={course.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
            {course.title}
          </li>
        ))}
      </ul>
      <h2 className="mt-4 text-xl">Enrollments</h2>
      <ul className="space-y-2">
        {enrollments.map(enroll => (
          <li key={enroll.id} className="p-4 bg-white shadow rounded">
            {enroll.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
