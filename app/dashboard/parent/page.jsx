'use client';
import { useEffect, useState } from 'react';

export default function ParentDashboard() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/parent/results')
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Your Child's Results</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {results.map(r => (
            <li key={r.id} className="mb-4 bg-white p-4 rounded shadow">
              <div><b>Term:</b> {r.term}</div>
              <div><b>Subject:</b> {r.subject}</div>
              <div><b>Score:</b> {r.score}</div>
              <button
                className="mt-2 bg-black text-white px-3 py-1 rounded"
                onClick={() => window.open(`/api/parent/results/${r.id}/pdf`, '_blank')}
              >
                Download PDF
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}