import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <AuthProvider>
      <Toaster 
        position="top-right" 
        toastOptions={{ 
          duration: 2000,
          className: 'animate-fadeIn animate-fadeOut',
        }} 
      />
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </ErrorBoundary>
    </AuthProvider>
  );
}

export default App;