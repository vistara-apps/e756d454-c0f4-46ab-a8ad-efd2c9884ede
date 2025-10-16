import { Brain } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-pulse-slow">
          <Brain className="w-16 h-16 text-primary mx-auto" />
        </div>
        <p className="text-muted">Loading MindMeld...</p>
      </div>
    </div>
  );
}
