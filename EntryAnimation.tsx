import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface EntryAnimationProps {
  onComplete: () => void;
}

export default function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const [stage, setStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timers = [
      // Stage 1: Show OJAS text
      setTimeout(() => setStage(1), 500),
      
      // Stage 2: Add glow effect
      setTimeout(() => setStage(2), 1500),
      
      // Stage 3: Transform to logo
      setTimeout(() => setStage(3), 2500),
      
      // Stage 4: Fade out and complete
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 500);
      }, 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Stage 1 & 2: OJAS Text */}
        <div className={`transition-all duration-1000 ${
          stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        } ${stage >= 2 ? 'animate-glow' : ''} ${stage >= 3 ? 'opacity-0 scale-50' : ''}`}>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            OJAS
          </h1>
          <div className="mt-4 text-lg text-muted-foreground tracking-wide">
            Created by
          </div>
        </div>

        {/* Stage 3: Transform to Logo */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
          stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}>
          <div className="glass-dark rounded-full p-8 glow-cyan animate-glow">
            <Play className="w-16 h-16 text-primary fill-primary" />
          </div>
          <div className="absolute top-full mt-6 text-center">
            <h2 className="text-2xl font-bold text-foreground">AuraPlay</h2>
            <p className="text-muted-foreground">Premium Media Experience</p>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-4 border border-primary/20 rounded-2xl">
        <div className={`absolute inset-0 border-2 border-primary rounded-2xl transition-all duration-2000 ${
          stage >= 2 ? 'animate-pulse scale-105' : 'scale-100'
        }`} />
      </div>
    </div>
  );
}