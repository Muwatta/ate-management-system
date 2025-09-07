import { useAuth } from '../context/AuthContext';
import {
  FaUsers,
  FaBookOpen,
  FaClipboardList,
  FaBullhorn,
  FaChartLine,
} from 'react-icons/fa';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TeacherDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-900">
          Welcome, {user?.name || 'Teacher'}
        </h1>
        <Button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          New Announcement
        </Button>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-8">
        
        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaUsers className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Students</h3>
                <p className="text-gray-600">180 Assigned</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaBookOpen className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Courses</h3>
                <p className="text-gray-600">6 Active</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaClipboardList className="text-purple-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Assignments</h3>
                <p className="text-gray-600">24 Pending</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaChartLine className="text-yellow-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Performance</h3>
                <p className="text-gray-600">78% Avg Score</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Management Shortcuts */}
        <section>
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Classroom Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaClipboardList, title: "Gradebook", desc: "Manage grades & assessments" },
              { icon: FaBookOpen, title: "Courses", desc: "Update course materials" },
              { icon: FaUsers, title: "Students", desc: "Track attendance & progress" },
              { icon: FaBullhorn, title: "Announcements", desc: "Communicate with students" },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-200 cursor-pointer">
                <Icon className="text-indigo-600 text-3xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Recent Activity</h2>
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <p className="text-gray-700">📘 Assignment “JavaScript Basics” submitted by Jane Doe</p>
            <p className="text-gray-700">👤 New student enrolled in “Web Development 101”</p>
            <p className="text-gray-700">📢 Announcement sent: “Exam Schedule Released”</p>
          </div>
        </section>

      </main>
    </div>
  );
}
