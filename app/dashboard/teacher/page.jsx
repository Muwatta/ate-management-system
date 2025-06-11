'use client';
import { useEffect, useState } from 'react';
import { getUsersByRole, getStudentsByClass, saveScores } from '../../../lib/supabase';

export default function TeacherDashboard() {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [students, setStudents] = useState([]);
  const [scores, setScores] = useState({});

  useEffect(() => {
    getUsersByRole('teacher').then(teachers => {
      const teacher = teachers[0];
      setClasses(teacher?.classes || []);
      setSubjects(teacher?.subjects || []);
    });
  }, []);

  useEffect(() => {
    if (selectedClass) {
      getStudentsByClass(selectedClass).then(setStudents);
    } else {
      setStudents([]);
    }
    setScores({});
  }, [selectedClass]);

  const handleScoreChange = (studentId, field, value) => {
    setScores(prev => ({
      ...prev,
      [studentId]: { ...prev[studentId], [field]: value }
    }));
  };

  const handleSubmit = async () => {
    try {
      await saveScores(selectedClass, selectedSubject, scores);
      alert('Scores saved successfully!');
      setScores({});
    } catch (err) {
      alert('Failed to save scores: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-papayawhip p-8">
      <h1 className="text-2xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="mb-4 flex gap-4">
        <select
          className="border px-2 py-1 rounded"
          value={selectedClass}
          onChange={e => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          {classes.map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
        <select
          className="border px-2 py-1 rounded"
          value={selectedSubject}
          onChange={e => setSelectedSubject(e.target.value)}
          disabled={!subjects.length}
        >
          <option value="">Select Subject</option>
          {subjects.map(sub => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>
      </div>
      {selectedClass && selectedSubject && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="border px-2 py-1">Student Name</th>
                <th className="border px-2 py-1">CA1</th>
                <th className="border px-2 py-1">CA2</th>
                <th className="border px-2 py-1">Assignment</th>
                <th className="border px-2 py-1">Exam</th>
              </tr>
            </thead>
            <tbody>
              {students.map(stu => (
                <tr key={stu.id}>
                  <td className="border px-2 py-1">{stu.firstName} {stu.lastName}</td>
                  {['ca1', 'ca2', 'assignment', 'exam'].map(field => (
                    <td className="border px-2 py-1" key={field}>
                      <input
                        type="number"
                        className="w-16 border rounded px-1 py-0.5"
                        value={scores[stu.id]?.[field] || ''}
                        onChange={e => handleScoreChange(stu.id, field, e.target.value)}
                        min={0}
                        max={field === 'exam' ? 60 : 20}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="mt-4 bg-black text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save Scores
          </button>
        </div>
      )}
    </div>
  );
}
