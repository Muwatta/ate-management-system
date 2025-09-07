import { useAuth } from '../context/AuthContext';
import {
  FaUserPlus,
  FaBook,
  FaBullhorn,
  FaUserCircle,
  FaUsers,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaCog,
} from 'react-icons/fa';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-900">
          Welcome, {user?.name || 'Admin'}
        </h1>
        <Button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Settings
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
                <p className="text-gray-600">1,240 Enrolled</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaChalkboardTeacher className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Teachers</h3>
                <p className="text-gray-600">85 Active</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaBook className="text-purple-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Courses</h3>
                <p className="text-gray-600">42 Available</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6 flex items-center space-x-4">
              <FaMoneyBillWave className="text-yellow-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Revenue</h3>
                <p className="text-gray-600">$12,400</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Management Shortcuts */}
        <section>
          <h2 className="text-xl font-bold text-indigo-900 mb-4">Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaUserPlus, title: "Admission", desc: "Manage student admissions" },
              { icon: FaBook, title: "Courses", desc: "Oversee course catalog" },
              { icon: FaBullhorn, title: "Events", desc: "Manage school events" },
              { icon: FaUserCircle, title: "Users", desc: "Administer user accounts" },
              { icon: FaCog, title: "Roles & Permissions", desc: "Control access levels" },
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
            <p className="text-gray-700">📢 New event “AI Bootcamp” created by Teacher A</p>
            <p className="text-gray-700">👤 John Doe admitted to Computer Science</p>
            <p className="text-gray-700">📘 New course “React + Vite” published</p>
          </div>
        </section>

      </main>
    </div>
  );
}
