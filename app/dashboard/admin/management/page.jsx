'use client';
import { useState } from 'react';
import { createManagement } from '../../../../lib/supabase';

export default function AddManagementPage() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createManagement({ name, description: desc });
    setLoading(false);
    setSuccess(true);
    setName('');
    setDesc('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Management Record</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 m-2 w-full"
        />
        <input
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          className="border p-2 m-2 w-full"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full" disabled={loading}>
          {loading ? 'Saving...' : 'Add Management'}
        </button>
        {success && <div className="text-green-600 mt-2">Added!</div>}
      </form>
    </div>
  );
}
