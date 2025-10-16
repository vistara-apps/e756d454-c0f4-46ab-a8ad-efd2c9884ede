'use client';

import { useState } from 'react';
import { Send, Sparkles, Globe, Share2, BookmarkPlus } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
];

export function TopicExplainer() {
  const [topic, setTopic] = useState('');
  const [language, setLanguage] = useState('en');
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExplain = async () => {
    if (!topic.trim()) return;

    setIsLoading(true);
    // Simulate AI explanation
    setTimeout(() => {
      setExplanation(
        `A ZK-rollup (Zero-Knowledge rollup) is a Layer 2 scaling solution that bundles multiple transactions together and processes them off the main blockchain. It uses zero-knowledge proofs to verify the validity of these transactions without revealing their details. This approach significantly increases transaction throughput while maintaining security and reducing costs.`
      );
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Input Section */}
      <div className="bg-surface rounded-lg p-6 border border-white/10 shadow-lg">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted mb-2">
              What would you like to learn?
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleExplain()}
                placeholder="e.g., What is a ZK-rollup?"
                className="
                  flex-1 px-4 py-3 rounded-lg
                  bg-bg border border-white/10
                  text-fg placeholder:text-muted
                  focus:outline-none focus:border-primary
                  transition-all duration-200
                "
              />
              <button
                onClick={handleExplain}
                disabled={!topic.trim() || isLoading}
                className="
                  px-6 py-3 rounded-lg
                  bg-primary text-white font-medium
                  hover:bg-accent transition-all duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                  flex items-center gap-2
                "
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="
                px-3 py-1.5 rounded-md
                bg-bg border border-white/10
                text-fg text-sm
                focus:outline-none focus:border-primary
              "
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      {explanation && (
        <div className="bg-surface rounded-lg p-6 border border-white/10 shadow-lg animate-fade-in">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-fg mb-2">AI Explanation</h3>
              <p className="text-fg leading-7">{explanation}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            <ActionButton icon={<Share2 />} label="Share" />
            <ActionButton icon={<BookmarkPlus />} label="Save to Path" />
            <ActionButton icon={<Sparkles />} label="Explain More" />
          </div>
        </div>
      )}

      {/* Popular Topics */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          {['DeFi Basics', 'Smart Contracts', 'NFTs', 'Layer 2', 'DAOs'].map((topic) => (
            <button
              key={topic}
              onClick={() => setTopic(topic)}
              className="
                px-4 py-2 rounded-lg
                bg-surface border border-white/10
                text-fg text-sm font-medium
                hover:border-primary hover:bg-surface/80
                transition-all duration-200
              "
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="
        flex items-center gap-2 px-3 py-1.5 rounded-md
        bg-bg border border-white/10
        text-fg text-sm font-medium
        hover:border-primary hover:bg-bg/80
        transition-all duration-200
      "
    >
      <span className="w-4 h-4">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
