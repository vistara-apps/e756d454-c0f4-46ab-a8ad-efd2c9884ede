'use client';

import { useState } from 'react';
import { Wallet, ChevronDown } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const handleConnect = () => {
    // Simulate wallet connection
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  if (!isConnected) {
    return (
      <button
        onClick={handleConnect}
        className="
          flex items-center gap-2 px-4 py-2 rounded-lg
          bg-primary text-white font-medium
          hover:bg-accent transition-all duration-200
          shadow-lg hover:shadow-xl
        "
      >
        <Wallet className="w-5 h-5" />
        <span>Connect Wallet</span>
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-white/10">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
      <span className="text-fg font-medium">{address}</span>
      <ChevronDown className="w-4 h-4 text-muted" />
    </div>
  );
}
