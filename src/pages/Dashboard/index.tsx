// pages/Dashboard/index.tsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <Link to="/Dashboard/CourseList">Course List</Link>
        </li>
        <li>
          <Link to="/Dashboard/CourseDetails">Course Details</Link>
        </li>
        <li>
          <Link to="/Dashboard/Assignments">Assignments</Link>
        </li>
        <li>
          <Link to="/Dashboard/Grades">Grades</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
