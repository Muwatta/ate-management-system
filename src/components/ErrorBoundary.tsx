import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              An unexpected error occurred. Please try again or contact support if the issue persists.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={this.handleReset}
                ariaLabel="Try again"
                variant="primary"
              >
                Try Again
              </Button>
              <Button
                to="/support"
                ariaLabel="Contact support"
                variant="secondary"
              >
                Contact Support
              </Button>
            </div>
            {this.state.error && (
              <p className="mt-4 text-sm text-gray-500">Error: {this.state.error.message}</p>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}