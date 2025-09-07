import { useAuth } from '../context/AuthContext';
import {
  FaBook,
  FaTasks,
  FaChartPie,
  FaBullhorn,
} from 'react-icons/fa';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StudentDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-900">
          Welcome, {user?.name || 'Student'}
        </h1>
        <Button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          My Profile
        </Button>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto p-6 space-y-8">
        
        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaBook className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Courses</h3>
                <p className="text-gray-600">5 Enrolled</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaTasks className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Assignments</h3>
                <p className="text-gray-600">3 Due</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaChartPie className="text-purple-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Progress</h3>
                <p className="text-gray-600">65% Completed</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-xl font-bold text-indigo-900 mb-4">My Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaBook, title: "Courses", desc: "Access enrolled courses" },
              { icon: FaTasks, title: "Assignments", desc: "Submit & track homework" },
              { icon: FaChartPie, title: "Progress", desc: "View learning progress" },
              { icon: FaBullhorn, title: "Announcements", desc: "Stay updated" },
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
            <p className="text-gray-700">📘 New course available: “AI for Beginners”</p>
            <p className="text-gray-700">📝 Assignment graded: “HTML Basics” — 92%</p>
            <p className="text-gray-700">📢 Announcement: “Holiday Break next week”</p>
          </div>
        </section>

      </main>
    </div>
  );
}
