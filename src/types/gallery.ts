export type GalleryCategory = 'all' | 'labs' | 'projects' | 'activities' | 'events';

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'labs' | 'projects' | 'activities' | 'events';
  categoryLabel: string;
  image: string;
  altText: string;
  date?: string;
  isPlaceholder?: boolean;
}
