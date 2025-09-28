import { useState } from 'react';
import TabNavigation from '../TabNavigation';

export default function TabNavigationExample() {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="p-4 bg-background min-h-screen">
      <TabNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="max-w-md mx-auto"
      />
      <div className="mt-4 text-center text-muted-foreground">
        Active tab: {activeTab}
      </div>
    </div>
  );
}