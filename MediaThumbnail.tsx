import MediaThumbnail from '../MediaThumbnail';

export default function MediaThumbnailExample() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-background min-h-screen">
      <MediaThumbnail
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1"
        title="Ocean Waves"
        duration="2:34"
        isVideo={true}
        onPlay={() => console.log('Playing Ocean Waves video')}
        onFavorite={() => console.log('Favorited Ocean Waves')}
      />
      <MediaThumbnail
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        title="Mountain View"
        isVideo={false}
        isFavorite={true}
        onPlay={() => console.log('Viewing Mountain View photo')}
        onFavorite={() => console.log('Unfavorited Mountain View')}
      />
    </div>
  );
}