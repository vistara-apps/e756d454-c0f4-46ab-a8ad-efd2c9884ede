'use client';

import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-fg mb-2">Something went wrong!</h2>
          <p className="text-muted">{error.message || 'An unexpected error occurred'}</p>
        </div>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-accent transition-all duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
