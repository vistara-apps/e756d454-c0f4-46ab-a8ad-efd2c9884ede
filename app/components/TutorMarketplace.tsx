'use client';

import { Star, Clock, DollarSign, Award, MessageSquare } from 'lucide-react';

const TUTORS = [
  {
    id: 1,
    name: 'Alex Chen',
    username: '@alexchen',
    avatar: '👨‍💻',
    expertise: ['DeFi', 'Smart Contracts', 'Solidity'],
    rating: 4.9,
    sessions: 127,
    rate: 0.01,
    badges: 8,
    available: true,
  },
  {
    id: 2,
    name: 'Sarah Kim',
    username: '@sarahkim',
    avatar: '👩‍🎓',
    expertise: ['NFTs', 'Web3 Design', 'Token Economics'],
    rating: 4.8,
    sessions: 89,
    rate: 0.008,
    badges: 6,
    available: true,
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    username: '@marcusj',
    avatar: '👨‍🏫',
    expertise: ['Layer 2', 'ZK Proofs', 'Scaling'],
    rating: 5.0,
    sessions: 203,
    rate: 0.015,
    badges: 12,
    available: false,
  },
];

export function TutorMarketplace() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-fg">Expert Tutors</h2>
          <p className="text-sm text-muted mt-1">
            Learn from verified experts in the community
          </p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-accent transition-all duration-200">
          Become a Tutor
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {['All Topics', 'DeFi', 'Smart Contracts', 'NFTs', 'Layer 2'].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 rounded-lg bg-surface border border-white/10 text-fg text-sm font-medium hover:border-primary hover:bg-surface/80 transition-all duration-200"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Tutors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TUTORS.map((tutor) => (
          <div
            key={tutor.id}
            className="bg-surface rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-200 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{tutor.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-fg">{tutor.name}</h3>
                    {tutor.available && (
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    )}
                  </div>
                  <p className="text-sm text-muted">{tutor.username}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-fg font-medium">{tutor.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted">
                  <MessageSquare className="w-4 h-4" />
                  <span>{tutor.sessions} sessions</span>
                </div>
                <div className="flex items-center gap-1 text-muted">
                  <Award className="w-4 h-4" />
                  <span>{tutor.badges} badges</span>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2">
                {tutor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Rate */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted" />
                  <span className="text-lg font-semibold text-fg">{tutor.rate} ETH</span>
                  <span className="text-sm text-muted">/ hour</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                disabled={!tutor.available}
                className={`
                  w-full flex items-center justify-center gap-2
                  px-4 py-2 rounded-lg font-medium
                  transition-all duration-200
                  ${
                    tutor.available
                      ? 'bg-primary text-white hover:bg-accent'
                      : 'bg-bg border border-white/10 text-muted cursor-not-allowed'
                  }
                `}
              >
                <Clock className="w-4 h-4" />
                <span>{tutor.available ? 'Book Session' : 'Unavailable'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-semibold mb-2">Share Your Expertise</h3>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          Earn by teaching others and build your on-chain reputation as a verified expert
        </p>
        <button className="px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-all duration-200">
          Apply to Become a Tutor
        </button>
      </div>
    </div>
  );
}
