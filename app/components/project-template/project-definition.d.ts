export type ProjectImageOptions = {
  width?: number;
  height?: number;
};

export type TimelineSection = {
  id: string;
  type: 'timeline';
  layout?: 'horizontal' | 'vertical';
  padding?: 'top' | 'none' | 'both';
  offsets?: number[];
  imageOptions?: ProjectImageOptions;
  imageSizes?: string;
  items: Array<{
    id?: string;
    stepNumber: number;
    image: string;
    title: string;
    description: string;
    alt?: string;
  }>;
};

export type FeatureSection = {
  id: string;
  type: 'features';
  layout?: 'alternating' | 'grid';
  heading: string;
  description?: string;
  delays?: number[];
  imageOptions?: ProjectImageOptions;
  imageSizes?: string;
  items: Array<{
    id?: string;
    featureNumber: number;
    image: string;
    title: string;
    description: string;
    alt?: string;
  }>;
};

export type ImageTextSection = {
  id: string;
  type: 'image-text';
  heading: string;
  paragraphs: string[];
  imageOffsets?: number[];
  imageOptions?: ProjectImageOptions;
  imageSizes?: string;
  images: Array<{ src: string; alt: string }>;
};

export type TextSegment = string | { text: string; href: string };

export type TextBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; content: string | TextSegment[] };

export type TextSection = {
  id: string;
  type: 'text';
  heading?: string;
  paragraphs?: string[];
  blocks?: TextBlock[];
};

export type ProjectSection =
  | TimelineSection
  | FeatureSection
  | ImageTextSection
  | TextSection;

export type ProjectDefinition = {
  title: string;
  description: string;
  roles?: string[];
  url?: string;
  linkLabel?: string;
  secondaryUrl?: string;
  secondaryLinkLabel?: string;
  pdfUrl?: string;
  pdfLinkLabel?: string;
  backgroundImage?: string;
  backgroundOptions?: {
    srcSet?: string;
    width?: number;
    height?: number;
    opacity?: number;
  };
  theme?: {
    primary?: string;
    secondary?: string;
  };
  imageViewer?: boolean;
  sections: ProjectSection[];
};