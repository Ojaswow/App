import SettingsScreen from '../SettingsScreen';

export default function SettingsScreenExample() {
  return (
    <div className="p-4 bg-background min-h-screen">
      <SettingsScreen onBack={() => console.log('Back to home')} />
    </div>
  );
}