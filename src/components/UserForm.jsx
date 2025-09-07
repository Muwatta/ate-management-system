import { useState } from 'react';
import { generateUserId } from '../../lib/idGenerator';
import axios from 'axios';

const CLASS_LIST = [
  'JSS1A', 'JSS1B', 'JSS2A', 'JSS2B', 'JSS3A', 'JSS3B',
  'SS1A', 'SS1B', 'SS2A', 'SS2B', 'SS3A', 'SS3B'
];

export default function UserForm({ onUserCreated }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'student',
    classId: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const id = generateUserId(form.role);
    const password = form.lastName; // Surname as password
    const userData = { ...form, id, password, mustChangePassword: true };

    // Replace Supabase call with Django API call
    try {
      await axios.post('http://localhost:8000/api/users/', userData); // Update URL as needed
      setCreated({ id, password, email: form.email });
      setStep(2);
      if (onUserCreated) onUserCreated(userData);
    } catch (error) {
      // Handle error
      alert('Failed to create user');
    }
    setLoading(false);
  }

  function handleNext() {
    window.location.href = `/mail?email=${encodeURIComponent(created.email)}&id=${encodeURIComponent(created.id)}&password=${encodeURIComponent(created.password)}`;
  }

  return (
    <div className="w-full max-w-lg">
      {step === 1 && (
        <form className="bg-white rounded shadow p-6 mb-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">First Name</label>
            <input
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="hod">HoD</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Class</label>
            <select
              name="classId"
              value={form.classId}
              onChange={handleChange}
              required={form.role === 'student' || form.role === 'teacher' || form.role === 'hod'}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Class</option>
              {CLASS_LIST.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              name="password"
              type="text"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
          >
            {loading ? 'Saving...' : 'Next'}
          </button>
        </form>
      )}

      {step === 2 && created && (
        <div className="bg-white rounded shadow p-6 mb-6">
          <div className="mb-4 text-green-700">
            <div><b>User ID:</b> {created.id}</div>
            <div><b>Initial Password:</b> {created.password}</div>
            <div><b>Email:</b> {created.email}</div>
          </div>
          <button
            onClick={handleNext}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
          >
            Next (Send Credentials)
          </button>
        </div>
      )}
    </div>
  );
}