import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaChartLine } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

interface ProgressItem {
  courseId: string;
  courseTitle: string;
  completionPercentage: number;
  grade?: string;
}

export default function Progress() {
  const { user, token } = useAuth();
  const [progress, setProgress] = useState<ProgressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProgress = async () => {
      if (!user || user.role !== 'student') {
        setError('Access denied. Student role required.');
        toast.error('Access denied. Student role required.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/students/progress', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data = await response.json();
          setProgress(data);
        } else {
          throw new Error('Failed to fetch progress');
        }
      } catch (err) {
        setError('Failed to load progress. Please try again.');
        toast.error('Failed to load progress');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [user, token]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin h-8 w-8 text-teal-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FaChartLine className="h-6 w-6 text-teal-600" />
        Academic Progress
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {progress.length === 0 ? (
          <p className="text-gray-600 text-center col-span-full">
            No progress data available.
          </p>
        ) : (
          progress.map((item) => (
            <Card key={item.courseId} title={item.courseTitle} icon={FaChartLine}>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  Completion: {item.completionPercentage}%
                </p>
                {item.grade && (
                  <p className="text-gray-600 mb-2">Grade: {item.grade}</p>
                )}
                <Button
                  to={`/dashboard/courses/${item.courseId}`}
                  ariaLabel={`View ${item.courseTitle} details`}
                  variant="primary"
                >
                  View Course
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}