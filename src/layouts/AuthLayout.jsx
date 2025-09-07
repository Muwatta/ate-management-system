import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200">
      <Outlet />
    </div>
  );
}