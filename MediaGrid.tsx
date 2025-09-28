import { useState } from 'react';
import MediaGrid from '../MediaGrid';

// TODO: remove mock functionality - replace with real data
const mockItems = [
  {
    id: '1',
    title: 'Ocean Sunset',
    src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    duration: '2:34',
    isVideo: true,
    isFavorite: false,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2', 
    title: 'Mountain Peak',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    isVideo: false,
    isFavorite: true,
    createdAt: new Date('2024-01-14')
  },
  {
    id: '3',
    title: 'City Lights',
    src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f',
    duration: '1:22',
    isVideo: true,
    isFavorite: false,
    createdAt: new Date('2024-01-13')
  },
  {
    id: '4',
    title: 'Forest Path',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    isVideo: false,
    isFavorite: false,
    createdAt: new Date('2024-01-12')
  }
];

export default function MediaGridExample() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-4 bg-background min-h-screen">
      <MediaGrid
        items={mockItems}
        onItemClick={(item) => console.log('Opening item:', item.title)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </div>
  );
}