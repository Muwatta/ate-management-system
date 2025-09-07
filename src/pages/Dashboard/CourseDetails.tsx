import { useParams } from 'react-router-dom';

export default function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6">Course Details: {id}</h1>
        <p className="text-gray-600">View details for this course.</p>
      </div>
    </div>
  );
}