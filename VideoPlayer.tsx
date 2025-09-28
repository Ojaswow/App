import VideoPlayer from '../VideoPlayer';

export default function VideoPlayerExample() {
  return (
    <div className="p-4 bg-background min-h-screen">
      <VideoPlayer
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        title="Big Buck Bunny - Sample Video"
        onBack={() => console.log('Back to library')}
        className="w-full h-96"
      />
    </div>
  );
}