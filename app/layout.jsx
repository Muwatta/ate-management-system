import '../app/styles/globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'School Management System',
  description: 'Efficient, scalable school management portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        {children}
      </body>
    </html>
  );
}