'use client';

import { Award, Lock, Share2, ExternalLink } from 'lucide-react';

const BADGES = [
  {
    id: 1,
    name: 'DeFi Pioneer',
    description: 'Completed Intro to DeFi learning path',
    earned: true,
    rarity: 'Common',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Smart Contract Expert',
    description: 'Built and deployed 5 smart contracts',
    earned: false,
    rarity: 'Rare',
    color: 'from-purple-500 to-pink-500',
    progress: 60,
  },
  {
    id: 3,
    name: 'NFT Collector',
    description: 'Mastered NFT fundamentals',
    earned: true,
    rarity: 'Uncommon',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'Knowledge Sharer',
    description: 'Helped 10 learners with explanations',
    earned: false,
    rarity: 'Epic',
    color: 'from-orange-500 to-red-500',
    progress: 30,
  },
];

export function KnowledgeBadges() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-fg">Knowledge Badges</h2>
          <p className="text-sm text-muted mt-1">
            Earn on-chain credentials for your learning achievements
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-white/10 text-fg hover:border-primary transition-all duration-200">
          <Share2 className="w-4 h-4" />
          <span className="text-sm font-medium">Share Profile</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Badges" value="12" />
        <StatCard label="Earned" value="8" />
        <StatCard label="In Progress" value="4" />
        <StatCard label="Reputation" value="2,450" />
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BADGES.map((badge) => (
          <div
            key={badge.id}
            className={`
              bg-surface rounded-lg border border-white/10
              overflow-hidden transition-all duration-200
              ${badge.earned ? 'hover:border-primary/50 cursor-pointer' : 'opacity-60'}
            `}
          >
            {/* Badge Visual */}
            <div className={`h-48 bg-gradient-to-br ${badge.color} relative`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                {badge.earned ? (
                  <Award className="w-20 h-20 text-white drop-shadow-lg" />
                ) : (
                  <Lock className="w-20 h-20 text-white/50" />
                )}
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 rounded text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                  {badge.rarity}
                </span>
              </div>
            </div>

            {/* Badge Info */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-fg mb-1">{badge.name}</h3>
                <p className="text-sm text-muted">{badge.description}</p>
              </div>

              {/* Progress for locked badges */}
              {!badge.earned && badge.progress && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>Progress</span>
                    <span>{badge.progress}%</span>
                  </div>
                  <div className="h-2 bg-bg rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${badge.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Action Button */}
              {badge.earned ? (
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-accent transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span>View on Chain</span>
                </button>
              ) : (
                <button className="w-full px-4 py-2 rounded-lg bg-bg border border-white/10 text-muted font-medium cursor-not-allowed">
                  Locked
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-white/10">
      <div className="text-2xl font-bold text-fg mb-1">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}
