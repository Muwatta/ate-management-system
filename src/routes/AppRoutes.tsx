import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../pages/Home';
import NotFound from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import EventsNewsPage from '../pages/EventsNewsPage';
import Login from '../pages/LoginPage';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPasswordPage';
import Dashboard from '../pages/Dashboard';
import CourseList from '../pages/Dashboard/CourseList';
import CourseDetails from '../pages/Dashboard/CourseDetails';
import Assignments from '../pages/Dashboard/Assignments';
import Grades from '../pages/Dashboard/Grades';
import Calendar from '../pages/Calendar';
import Messages from '../pages/Messages';
import Students from '../components/StudentDashboard';
import StudentProfile from '../pages/Students/Profile';
import Progress from '../pages/Students/Progress';
import Teachers from '../components/TeacherDashboard';
import CreateCourse from '../pages/Teachers/CreateCourse';
import ManageStudents from '../pages/Teachers/ManageStudents';
import Admin from '../components/AdminDashboard';
import ManageUsers from '../pages/Admin/ManageUsers';
import AcademicsPage from '../pages/AcademicsPage';
import AdmissionPage from '../pages/AdmissionPage';
import Settings from '../pages/Settings';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/events-news" element={<EventsNewsPage />} />

      {/* Auth with layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* Dashboard with layout */}
      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/courses"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
              <CourseList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/courses/:id"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
              <CourseDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/assignments"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher']}>
              <Assignments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/grades"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher']}>
              <Grades />
            </ProtectedRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher']}>
              <Calendar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher']}>
              <Messages />
            </ProtectedRoute>
          }
        />

        {/* Students */}
        <Route
          path="/students"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <Students />
            </ProtectedRoute>
          }
        />
        <Route
          path="/students/profile"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/students/progress"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <Progress />
            </ProtectedRoute>
          }
        />

        {/* Teachers */}
        <Route
          path="/teachers"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <Teachers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teachers/create-course"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <CreateCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teachers/manage-students"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <ManageStudents />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/manage-users"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <ManageUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/academics"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
              <AcademicsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admission"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdmissionPage />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute allowedRoles={['student', 'teacher', 'admin']}>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}