'use client';

import { BookOpen, Clock, Award, ChevronRight } from 'lucide-react';

const LEARNING_PATHS = [
  {
    id: 1,
    title: 'Intro to DeFi',
    description: 'Learn the fundamentals of decentralized finance',
    modules: 8,
    duration: '2 hours',
    difficulty: 'Beginner',
    progress: 0,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Smart Contract Development',
    description: 'Build and deploy your first smart contract',
    modules: 12,
    duration: '4 hours',
    difficulty: 'Intermediate',
    progress: 35,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'NFT Mastery',
    description: 'Everything you need to know about NFTs',
    modules: 6,
    duration: '1.5 hours',
    difficulty: 'Beginner',
    progress: 100,
    color: 'from-green-500 to-emerald-500',
  },
];

export function LearningPaths() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-fg">Your Learning Paths</h2>
        <button className="text-primary hover:text-accent transition-colors duration-200 text-sm font-medium">
          Browse All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LEARNING_PATHS.map((path) => (
          <div
            key={path.id}
            className="
              bg-surface rounded-lg border border-white/10
              hover:border-primary/50 transition-all duration-200
              overflow-hidden group cursor-pointer
            "
          >
            {/* Gradient Header */}
            <div className={`h-32 bg-gradient-to-br ${path.color} relative`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white text-xs font-medium">
                  <span className="px-2 py-1 rounded bg-white/20 backdrop-blur-sm">
                    {path.difficulty}
                  </span>
                  {path.progress > 0 && (
                    <span className="px-2 py-1 rounded bg-white/20 backdrop-blur-sm">
                      {path.progress}% Complete
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-fg mb-2">{path.title}</h3>
                <p className="text-sm text-muted leading-6">{path.description}</p>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{path.modules} modules</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{path.duration}</span>
                </div>
              </div>

              {/* Progress Bar */}
              {path.progress > 0 && (
                <div className="space-y-2">
                  <div className="h-2 bg-bg rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${path.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                className="
                  w-full flex items-center justify-center gap-2
                  px-4 py-2 rounded-lg
                  bg-primary text-white font-medium
                  hover:bg-accent transition-all duration-200
                  group-hover:shadow-lg
                "
              >
                <span>{path.progress === 0 ? 'Start Learning' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Custom Path */}
      <div className="bg-surface rounded-lg p-6 border border-dashed border-white/20 text-center">
        <Award className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-fg mb-2">Create Custom Path</h3>
        <p className="text-sm text-muted mb-4">
          Build your own learning journey with AI-curated content
        </p>
        <button className="px-6 py-2 rounded-lg bg-primary text-white font-medium hover:bg-accent transition-all duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
}
