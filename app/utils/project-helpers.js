// Helper function to create image variants
export const createImageVariants = (src, alt, options = {}) => {
  const {
    width = 800,
    height = 500,
    sizes = '(max-width: 768px) 90vw, 50vw'
  } = options;

  return {
    srcSet: `${src} ${width}w, ${src} ${width * 2}w`,
    width,
    height,
    placeholder: src,
    alt,
    sizes
  };
};

// Helper to create timeline step data
export const createTimelineStep = (stepNumber, image, title, description) => ({
  stepNumber,
  image,
  title,
  description
});

// Helper to create feature card data
export const createFeatureCard = (featureNumber, image, title, description) => ({
  featureNumber,
  image,
  title,
  description
});

// Common project configuration schema
export const createProjectConfig = ({
  title,
  description,
  roles,
  url,
  secondaryUrl,
  secondaryLinkLabel,
  pdfUrl,
  pdfLinkLabel,
  backgroundImage,
  sections = ['header', 'intro', 'features', 'details']
}) => ({
  title,
  description,
  roles,
  url,
  secondaryUrl,
  secondaryLinkLabel,
  pdfUrl,
  pdfLinkLabel,
  backgroundImage,
  sections
});