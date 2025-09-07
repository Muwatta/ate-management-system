'use client';
export default function Certificate({ student, course, date }) {
  return (
    <div className="border p-6 rounded shadow bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Certificate of Completion</h2>
      <p>This certifies that <strong>{student}</strong> has completed <strong>{course}</strong> on {date}.</p>
    </div>
  );
}