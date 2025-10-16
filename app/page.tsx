'use client';

import { useState, useEffect } from 'react';
import { Brain, BookOpen, Award, Users, Sparkles, MessageSquare } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { TopicExplainer } from './components/TopicExplainer';
import { LearningPaths } from './components/LearningPaths';
import { KnowledgeBadges } from './components/KnowledgeBadges';
import { TutorMarketplace } from './components/TutorMarketplace';

type Tab = 'explore' | 'paths' | 'badges' | 'tutors';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('explore');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-slow">
          <Brain className="w-16 h-16 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Brain className="w-8 h-8 text-primary" />
                <Sparkles className="w-4 h-4 text-accent absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-fg">MindMeld</h1>
                <p className="text-xs text-muted">AI Tutor</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-4xl font-semibold text-fg">
            Learn Anything, Instantly
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-7">
            Your personalized AI learning assistant on Base. Get instant explanations,
            curated learning paths, and earn on-chain knowledge badges.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <TabButton
            icon={<MessageSquare className="w-5 h-5" />}
            label="Explore"
            active={activeTab === 'explore'}
            onClick={() => setActiveTab('explore')}
          />
          <TabButton
            icon={<BookOpen className="w-5 h-5" />}
            label="Learning Paths"
            active={activeTab === 'paths'}
            onClick={() => setActiveTab('paths')}
          />
          <TabButton
            icon={<Award className="w-5 h-5" />}
            label="Badges"
            active={activeTab === 'badges'}
            onClick={() => setActiveTab('badges')}
          />
          <TabButton
            icon={<Users className="w-5 h-5" />}
            label="Tutors"
            active={activeTab === 'tutors'}
            onClick={() => setActiveTab('tutors')}
          />
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">
        {activeTab === 'explore' && <TopicExplainer />}
        {activeTab === 'paths' && <LearningPaths />}
        {activeTab === 'badges' && <KnowledgeBadges />}
        {activeTab === 'tutors' && <TutorMarketplace />}
      </div>
    </main>
  );
}

function TabButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg
        transition-all duration-200 whitespace-nowrap
        ${
          active
            ? 'bg-primary text-white shadow-lg'
            : 'bg-surface text-muted hover:bg-surface/80'
        }
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}
