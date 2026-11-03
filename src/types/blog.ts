export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  body: string[];
  coverImage: string;
  coverImageAlt: string;
  author: string;
  authorRole?: string;
  publishedAt: string;
  category: string;
  readingTime: string;
  isPlaceholder?: boolean;
}
