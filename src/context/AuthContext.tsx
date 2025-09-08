import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
}

interface AuthContextProps {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedToken = localStorage.getItem('token'); // Temporary for testing; remove if not needed
        if (storedToken) {
          const response = await fetch('/api/auth/user', {
            headers: { Authorization: `Bearer ${storedToken}` },
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            setToken(storedToken);
          } else {
            setUser(null);
            setToken(null);
            localStorage.removeItem('token'); // Clean up
          }
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const { user: userData, token: newToken } = await response.json();
        setUser(userData);
        setToken(newToken);
        localStorage.setItem('token', newToken); // Temporary for testing; remove if not needed
        toast.success('Login successful!');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Invalid credentials');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('Logout error:', error);
    }
    setUser(null);
    setToken(null);
   
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};