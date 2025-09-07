import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

// Public
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFoundPage')); 
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const EventsNewsPage = lazy(() => import('../pages/EventsNewsPage'));

// Auth
const Login = lazy(() => import('../pages/LoginPage'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPasswordPage'));

// Dashboard
const Dashboard = lazy(() => import('../pages/Dashboard'));
const CourseList = lazy(() => import('../pages/Dashboard/CourseList'));
const CourseDetails = lazy(() => import('../pages/Dashboard/CourseDetails'));
const Assignments = lazy(() => import('../pages/Dashboard/Assignments'));
const Grades = lazy(() => import('../pages/Dashboard/Grades'));
const Calendar = lazy(() => import('../pages/Calendar')); // New
const Messages = lazy(() => import('../pages/Messages')); // New

// Students
const Students = lazy(() => import('../components/StudentDashboard'));
const StudentProfile = lazy(() => import('../pages/Students/Profile'));
const Progress = lazy(() => import('../pages/Students/Progress'));

// Teachers
const Teachers = lazy(() => import('../components/TeacherDashboard'));
const CreateCourse = lazy(() => import('../pages/Teachers/CreateCourse'));
const ManageStudents = lazy(() => import('../pages/Teachers/ManageStudents'));

// Admin
const Admin = lazy(() => import('../components/AdminDashboard'));
const ManageUsers = lazy(() => import('../pages/Admin/ManageUsers'));
const AcademicsPage = lazy(() => import('../pages/AcademicsPage'));
const AdmissionPage = lazy(() => import('../pages/AdmissionPage'));

// Settings
const Settings = lazy(() => import('../pages/Settings'));

// Layouts
const AuthLayout = lazy(() => import('../layouts/AuthLayout'));
const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-600">Loading...</div>}>
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
    </Suspense>
  );
}