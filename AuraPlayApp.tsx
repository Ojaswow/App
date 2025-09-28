import { useState } from "react";
import EntryAnimation from "./EntryAnimation";
import SplashScreen from "./SplashScreen";
import HomeScreen from "./HomeScreen";

export default function AuraPlayApp() {
  const [showEntry, setShowEntry] = useState(true);
  const [showSplash, setShowSplash] = useState(false);

  const handleEntryComplete = () => {
    setShowEntry(false);
    setShowSplash(true);
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="h-screen w-full overflow-hidden">
      {showEntry && (
        <EntryAnimation onComplete={handleEntryComplete} />
      )}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      {!showEntry && !showSplash && (
        <HomeScreen />
      )}
    </div>
  );
}