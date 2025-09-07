import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/';

export const fetchCourses = async (token) => {
  const res = await axios.get(`${API_URL}courses/`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};
