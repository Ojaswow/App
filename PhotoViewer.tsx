import PhotoViewer from '../PhotoViewer';

export default function PhotoViewerExample() {
  return (
    <div className="p-4 bg-background min-h-screen">
      <PhotoViewer
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        title="Mountain Peak Landscape"
        onBack={() => console.log('Back to gallery')}
        onNext={() => console.log('Next photo')}
        onPrevious={() => console.log('Previous photo')}
        className="w-full h-96"
      />
    </div>
  );
}