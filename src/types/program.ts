export interface Program {
  id: string;
  number: string;
  title: string;
  slug: string;
  grades: string;
  curriculumAlignment: string;
  shortDescription: string;
  detailedDescription: string;
  learningOutcomes: string[];
  keyTopics?: string[];
  equipmentSample?: string[];
  image: string;
  imageAlt: string;
  isPlaceholder?: boolean;
}
