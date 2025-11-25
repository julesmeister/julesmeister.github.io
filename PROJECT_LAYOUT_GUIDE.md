# Project Layout Design Guide

This guide provides comprehensive instructions for creating new project pages in the portfolio, based on established patterns from existing projects.

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Core Patterns](#core-patterns)
4. [Layout Types](#layout-types)
5. [Common Components](#common-components)
6. [Hooks & Utilities](#hooks--utilities)
7. [Styling Guidelines](#styling-guidelines)
8. [Step-by-Step Implementation](#step-by-step-implementation)

---

## Overview

All project pages follow a consistent architecture using:
- **Remix routing** (file-based routes in `app/routes/projects.*`)
- **Modern layout pattern** with timeline steps and feature cards
- **Interactive features** (image magnifier, modal viewer)
- **Shared components** from `~/layouts/project`
- **Custom hooks** for page logic and interactions

---

## File Structure

### Directory Structure
```
app/routes/projects.{projectName}/
├── route.js                    # Route export
├── {projectName}.jsx           # Main component file
└── {projectName}.module.css    # Component styles
```

### Route File (`route.js`)
```javascript
export { ProjectName as default, meta } from './{projectName}';
```

### Main Component File Pattern
```javascript
// 1. Image imports
import backgroundImg from '~/assets/{project}/...';

// 2. React imports
import { Fragment, useState } from 'react';

// 3. Component imports
import { Image } from '~/components/image';
import { Footer } from '~/components/footer';
import { Modal } from '~/components/Modal/Modal';

// 4. Layout imports
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';

// 5. Utilities and hooks
import { createProjectMeta } from '~/components/project-template';
import { useProjectPage } from '~/hooks/use-project-page';
import { useMagnifier } from '~/hooks/use-magnifier';
import { createImageVariants, createTimelineStep, createFeatureCard } from '~/utils/project-helpers';
import { media } from '~/utils/style';

// 6. Styles
import styles from './{projectName}.module.css';
```

---

## Core Patterns

### 1. Project Configuration
Every project should define a configuration object:

```javascript
const projectConfig = {
  title: 'Project Title',
  description: 'Detailed description of the project (2-3 sentences)',
  roles: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
  url: 'https://project-url.com',
  linkLabel: 'Visit website',
  secondaryUrl: 'https://github.com/username/repo',  // Optional
  secondaryLinkLabel: 'View on Github',               // Optional
  pdfUrl: '/path/to/certificate.pdf',                 // Optional
  pdfLinkLabel: 'View Certificate',                   // Optional
  backgroundImage: backgroundImg,
  sectionNames: ['header', 'intro', 'features', 'details', 'tech-stack']
};
```

### 2. Data Structures

#### Timeline Steps (3 steps recommended)
```javascript
const timelineSteps = [
  createTimelineStep(1, image1, 'Step Title', 'Description of what this step shows'),
  createTimelineStep(2, image2, 'Step Title', 'Description of what this step shows'),
  createTimelineStep(3, image3, 'Step Title', 'Description of what this step shows')
];
```

#### Feature Cards (2-3 cards recommended)
```javascript
const featureCards = [
  createFeatureCard(4, image4, 'Feature Title', 'Feature description'),
  createFeatureCard(5, image5, 'Feature Title', 'Feature description'),
  createFeatureCard(6, image6, 'Feature Title', 'Feature description')
];
```

#### Sidebar Images (for tech stack section)
```javascript
const sidebarImages = [
  { src: image7, alt: 'Descriptive alt text for accessibility' },
  { src: image8, alt: 'Descriptive alt text for accessibility' }
];
```

### 3. Component Structure

```javascript
export const ProjectName = () => {
  // State management
  const [selectedImage, setSelectedImage] = useState(null);

  // Hooks
  const { magnifier, showMagnifier, hideMagnifier, updateMagnifier } = useMagnifier();
  const { sectionRefs } = useProjectPage(projectConfig.sectionNames);

  // Event handlers
  const handleImageClick = (imageSrc, alt) => {
    setSelectedImage({ src: imageSrc, alt });
  };

  const handleMouseMove = (e, imageSrc) => {
    updateMagnifier(e, imageSrc);
  };

  const handleMouseLeave = () => {
    hideMagnifier();
  };

  const handleMouseEnter = (e, imageSrc) => {
    showMagnifier(e, imageSrc);
  };

  return (
    <Fragment>
      {/* Main content */}
      <ProjectContainer>
        {/* Background, Header, Sections */}
      </ProjectContainer>

      {/* Magnifier */}
      {magnifier.isVisible && (
        <div className={styles.magnifier} style={{...}} />
      )}

      {/* Modal */}
      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
          {/* Modal content */}
        </Modal>
      )}

      <Footer />
    </Fragment>
  );
};
```

---

## Layout Types

### Layout 1: Modern Timeline + Feature Flow (Recommended)

**Best for**: New projects, modern presentations
**Examples**: `lotel`, `orbitandchill`, `blueprintjs_flutter`

**Sections**:
1. **Project Background & Header** - Hero section
2. **Timeline Section** - 3 sequential steps showing project flow
3. **Advanced Features Section** - 2-3 feature cards in flow layout
4. **Details Section** (Optional) - Additional content with sidebar images
5. **Tech Stack Section** - Two-column layout with text and sidebar images

**Template**:
```javascript
<ProjectContainer>
  <ProjectBackground {...config} />
  <ProjectHeader {...config} ref={sectionRefs.header} />

  {/* Timeline Section */}
  <ProjectSection padding="top" ref={sectionRefs.intro}>
    <ProjectSectionContent>
      <div className={styles.timelineContainer}>
        <div className={styles.timelineSteps}>
          {timelineSteps.map((step, index) => (
            <div key={index} className={styles.timelineStep} data-step={step.stepNumber}>
              <div className={styles.timelineImage} {...handlers}>
                <div className={styles.stepNumber}>{step.stepNumber}</div>
                <Image {...createImageVariants(step.image, step.title)} />
              </div>
              <div className={styles.timelineContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectSectionContent>
  </ProjectSection>

  {/* Features Section */}
  <ProjectSection ref={sectionRefs.features}>
    <ProjectSectionContent>
      <ProjectSectionHeading>Advanced Features</ProjectSectionHeading>
      <ProjectSectionText>
        Overview paragraph about the features
      </ProjectSectionText>
      <div className={styles.featureFlow}>
        {featureCards.map((feature) => (
          <div key={feature.featureNumber} className={styles.featureCard}>
            <div className={styles.featureNumber}>{feature.featureNumber}</div>
            <div className={styles.featureImageWrapper} {...handlers}>
              <Image {...createImageVariants(feature.image, feature.title)} />
            </div>
            <div className={styles.featureContent}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ProjectSectionContent>
  </ProjectSection>

  {/* Tech Stack Section (Two-column) */}
  <ProjectSection ref={sectionRefs['tech-stack']}>
    <ProjectSectionColumns centered className={styles.columns}>
      <div className={styles.imagesText}>
        <ProjectSectionHeading>Technology Stack</ProjectSectionHeading>
        <ProjectSectionText>
          Detailed description of technologies used...
        </ProjectSectionText>
        <ProjectSectionText>
          Additional technical details...
        </ProjectSectionText>
      </div>
      <div className={styles.sidebarImages}>
        {sidebarImages.map((img, index) => (
          <div key={index} className={styles.sidebarImageWrapper} {...handlers}>
            <Image className={styles.sidebarImage} {...createImageVariants(img.src, img.alt)} />
          </div>
        ))}
      </div>
    </ProjectSectionColumns>
  </ProjectSection>
</ProjectContainer>
```

### Layout 2: Traditional Grid Layout

**Best for**: Projects with complex content, detailed explanations
**Examples**: `sweldo`, `airlineCrewScheduling`

**Sections**:
1. **Project Background & Header**
2. **Grid Sections** - Image + text side by side
3. **Full-width Image Sections** - Large screenshots with captions
4. **Text Rows** - Problem statements, challenges

**Template**:
```javascript
<ProjectContainer>
  <ProjectBackground {...config} />
  <ProjectHeader {...config} ref={sectionRefs.header} />

  {/* Grid Section */}
  <ProjectSection padding="top" ref={sectionRefs.section1}>
    <ProjectSectionContent className={styles.grid}>
      <div className={styles.gridImage}>
        <div className={styles.gridBackground}>
          <Image {...imageConfig} />
        </div>
      </div>
      <div className={styles.gridText}>
        <ProjectSectionHeading>Section Title</ProjectSectionHeading>
        <ProjectSectionText>
          Content description...
        </ProjectSectionText>
      </div>
    </ProjectSectionContent>
  </ProjectSection>

  {/* Full-width Image Section */}
  <ProjectSection padding="top" ref={sectionRefs.section2}>
    <ProjectSectionContent>
      <ProjectImage {...imageConfig} />
      <div className={styles.captionWrapper}>
        <span className={styles.captionContent}>
          <Icon icon="link" className={styles.captionIcon} />
          <span className={styles.imageCaption}>
            "Caption describing the image"
          </span>
        </span>
      </div>
    </ProjectSectionContent>
  </ProjectSection>

  {/* Text Row Section */}
  <ProjectSection ref={sectionRefs.section3}>
    <ProjectTextRow>
      <ProjectSectionHeading>The Problem</ProjectSectionHeading>
      <ProjectSectionText>
        Detailed explanation of the challenge...
      </ProjectSectionText>
    </ProjectTextRow>
  </ProjectSection>
</ProjectContainer>
```

---

## Common Components

### ProjectBackground
```javascript
<ProjectBackground
  src={backgroundImage}
  srcSet={`${backgroundImage} 1280w, ${backgroundImage} 2560w`}
  width={1280}
  height={800}
  placeholder={backgroundImage}
  opacity={0.8}  // 0.5 for dark theme, 0.8 for light
/>
```

### ProjectHeader
```javascript
<ProjectHeader
  title={projectConfig.title}
  description={projectConfig.description}
  url={projectConfig.url}
  linkLabel={projectConfig.linkLabel}
  secondaryUrl={projectConfig.secondaryUrl}        // Optional
  secondaryLinkLabel={projectConfig.secondaryLinkLabel}  // Optional
  pdfUrl={projectConfig.pdfUrl}                    // Optional
  pdfLinkLabel={projectConfig.pdfLinkLabel}        // Optional
  roles={projectConfig.roles}
  ref={sectionRefs.header}
/>
```

### Image with Interactive Features
```javascript
<div
  className={styles.imageWrapper}
  onClick={() => handleImageClick(imageSrc, altText)}
  onMouseMove={(e) => handleMouseMove(e, imageSrc)}
  onMouseEnter={(e) => handleMouseEnter(e, imageSrc)}
  onMouseLeave={handleMouseLeave}
>
  <Image
    {...createImageVariants(imageSrc, altText, { width: 600, height: 400 })}
    sizes="(max-width: 768px) 90vw, 45vw"
  />
</div>
```

### Magnifier Component
```javascript
{magnifier.isVisible && (
  <div
    className={styles.magnifier}
    style={{
      left: magnifier.x,
      top: magnifier.y,
      backgroundImage: `url(${magnifier.currentImage})`,
      backgroundPosition: `${magnifier.backgroundX}% ${magnifier.backgroundY}%`,
    }}
  />
)}
```

### Modal Component
```javascript
{selectedImage && (
  <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
    <div className={styles.modalImageContainer}>
      <Image
        src={selectedImage.src}
        alt={selectedImage.alt}
        className={styles.modalImage}
      />
      <p className={styles.modalCaption}>{selectedImage.alt}</p>
    </div>
  </Modal>
)}
```

---

## Hooks & Utilities

### `useProjectPage(sectionNames)`
Manages section refs and navigation.

```javascript
const { sectionRefs } = useProjectPage([
  'header',
  'intro',
  'features',
  'details'
]);

// Use refs in sections
<ProjectSection ref={sectionRefs.intro}>
```

### `useMagnifier()`
Provides magnifier functionality for images.

```javascript
const {
  magnifier,           // State object
  showMagnifier,       // (e, imageSrc) => void
  hideMagnifier,       // () => void
  updateMagnifier      // (e, imageSrc) => void
} = useMagnifier();
```

### `createImageVariants(src, alt, options)`
Generates responsive image props.

```javascript
createImageVariants(imageSrc, altText, {
  width: 800,
  height: 500,
  sizes: '(max-width: 768px) 90vw, 50vw'
});
```

### `createTimelineStep(number, image, title, description)`
Creates timeline step data.

```javascript
createTimelineStep(
  1,
  imageSource,
  'Step Title',
  'Step description'
);
```

### `createFeatureCard(number, image, title, description)`
Creates feature card data.

```javascript
createFeatureCard(
  4,
  imageSource,
  'Feature Title',
  'Feature description'
);
```

### `createProjectMeta(title, description)`
Generates SEO meta tags.

```javascript
export const meta = createProjectMeta(
  projectConfig.title,
  projectConfig.description
);
```

---

## Styling Guidelines

### CSS Module Structure

**Required classes for Modern Timeline Layout:**

```css
/* Container for timeline */
.timelineContainer {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space4XL) 0;
}

.timelineSteps {
  display: flex;
  flex-direction: column;
  gap: var(--space4XL);
}

/* Individual timeline step */
.timelineStep {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space3XL);
  align-items: center;
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: calc(var(--index, 0) * 0.2s);
}

/* Alternate layout for even steps */
.timelineStep:nth-child(even) {
  grid-template-columns: 1fr 1fr;
  direction: rtl;
}

.timelineStep:nth-child(even) > * {
  direction: ltr;
}

/* Step number badge */
.stepNumber {
  position: absolute;
  top: -15px;
  left: -15px;
  width: 50px;
  height: 50px;
  background: var(--colorPrimary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fontSizeH4);
  font-weight: var(--fontWeightBold);
  color: var(--colorTextTitle);
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Timeline image container */
.timelineImage {
  position: relative;
  cursor: pointer;
  border-radius: var(--borderRadius);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.timelineImage:hover {
  transform: scale(1.02);
}

/* Timeline content */
.timelineContent {
  padding: var(--spaceL);
}

.timelineContent h3 {
  font-size: var(--fontSizeH3);
  font-weight: var(--fontWeightMedium);
  color: var(--colorTextTitle);
  margin-bottom: var(--spaceM);
}

.timelineContent p {
  font-size: var(--fontSizeBodyL);
  color: var(--colorTextBody);
  line-height: 1.6;
}

/* Feature flow layout */
.featureFlow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space2XL);
  margin-top: var(--space3XL);
}

.featureCard {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spaceL);
  padding: var(--spaceXL);
  background: var(--colorBackgroundLight);
  border-radius: var(--borderRadius);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featureCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.featureNumber {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: var(--colorPrimary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fontSizeH5);
  font-weight: var(--fontWeightBold);
  color: var(--colorTextTitle);
}

.featureImageWrapper {
  cursor: pointer;
  border-radius: var(--borderRadius);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.featureImageWrapper:hover {
  transform: scale(1.05);
}

.featureContent h4 {
  font-size: var(--fontSizeH4);
  font-weight: var(--fontWeightMedium);
  color: var(--colorTextTitle);
  margin-bottom: var(--spaceS);
}

.featureContent p {
  font-size: var(--fontSizeBodyM);
  color: var(--colorTextBody);
  line-height: 1.6;
}

/* Sidebar images */
.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space3XL);
  align-items: start;
}

.sidebarImages {
  display: flex;
  flex-direction: column;
  gap: var(--spaceXL);
}

.sidebarImageWrapper {
  cursor: pointer;
  border-radius: var(--borderRadius);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.sidebarImageWrapper:hover {
  transform: scale(1.05);
}

.sidebarImage {
  width: 100%;
  height: auto;
}

/* Magnifier */
.magnifier {
  position: fixed;
  width: 200px;
  height: 200px;
  border: 3px solid var(--colorPrimary);
  border-radius: 50%;
  pointer-events: none;
  background-repeat: no-repeat;
  background-size: 300%;
  z-index: 9999;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

/* Modal */
.modalImageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spaceL);
}

.modalImage {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--borderRadius);
}

.modalCaption {
  font-size: var(--fontSizeBodyM);
  color: var(--colorTextBody);
  text-align: center;
  max-width: 600px;
}

/* Responsive */
@media (max-width: 1024px) {
  .timelineStep {
    grid-template-columns: 1fr;
  }

  .timelineStep:nth-child(even) {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .columns {
    grid-template-columns: 1fr;
  }

  .featureFlow {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .timelineContainer {
    padding: var(--space2XL) 0;
  }

  .stepNumber {
    width: 40px;
    height: 40px;
    font-size: var(--fontSizeH5);
  }

  .featureNumber {
    width: 35px;
    height: 35px;
  }
}
```

### CSS Variables Reference
The portfolio uses these CSS variables (from `global.module.css`):

**Spacing**: `--spaceS`, `--spaceM`, `--spaceL`, `--spaceXL`, `--space2XL`, `--space3XL`, `--space4XL`

**Colors**:
- `--colorPrimary`
- `--colorTextTitle`
- `--colorTextBody`
- `--colorBackgroundLight`

**Typography**:
- `--fontSizeH3`, `--fontSizeH4`, `--fontSizeH5`
- `--fontSizeBodyL`, `--fontSizeBodyM`
- `--fontWeightBold`, `--fontWeightMedium`

**Border**: `--borderRadius`

---

## Step-by-Step Implementation

### Step 1: Create Project Directory
```bash
mkdir app/routes/projects.{projectName}
```

### Step 2: Add Images
1. Place images in `app/assets/{projectName}/`
2. Use descriptive filenames
3. Optimize images (recommended: < 500KB each)

### Step 3: Create Route File
Create `route.js`:
```javascript
export { ProjectName as default, meta } from './{projectName}';
```

### Step 4: Create Main Component
Create `{projectName}.jsx` with:

1. **Imports** (images, components, hooks, utilities, styles)
2. **Project Configuration** object
3. **Data Structures** (timeline steps, feature cards, sidebar images)
4. **Meta Export** using `createProjectMeta`
5. **Component** with:
   - State and hooks
   - Event handlers
   - JSX structure
   - Magnifier
   - Modal
   - Footer

### Step 5: Create Styles
Create `{projectName}.module.css` with required classes for your chosen layout type.

### Step 6: Add to Projects Data
Update `app/routes/home/projects-data.js`:

```javascript
export const projects = [
  // ... existing projects
  {
    id: '{projectName}',
    title: 'Project Title',
    description: 'Brief description (1-2 sentences)',
    image: projectImage,
    route: '/projects/{projectName}',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    featured: false,  // Set to true for homepage feature
  }
];
```

### Step 7: Test
1. Run dev server: `npm run dev`
2. Navigate to `/projects/{projectName}`
3. Test image interactions (magnifier, modal)
4. Test responsive layout
5. Verify section navigation

---

## Best Practices

### Images
- **Optimize**: Keep images under 500KB
- **Format**: Use JPG for photos, PNG for UI screenshots
- **Alt text**: Always provide descriptive alt text
- **Sizes**: Use responsive `sizes` attribute

### Accessibility
- Provide meaningful alt text
- Use semantic HTML
- Ensure keyboard navigation works
- Maintain color contrast

### Performance
- Lazy load images below the fold
- Use `placeholder` prop for blur-up effect
- Minimize CSS module size
- Use CSS variables for consistency

### Content
- **Title**: Clear, concise (3-5 words)
- **Description**: Detailed but scannable (2-3 sentences)
- **Roles**: 3-4 key technologies
- **Timeline**: 3 steps showing project flow
- **Features**: 2-3 advanced features
- **Tech Stack**: Detailed technical explanation

### Code Quality
- Use ESLint disable comments sparingly
- Keep component file under 300 lines
- Extract complex logic to utilities
- Follow existing naming conventions
- Comment complex CSS calculations

---

## Checklist for New Projects

- [ ] Create project directory structure
- [ ] Add optimized images to assets
- [ ] Create `route.js` with proper export
- [ ] Create main component with all sections
- [ ] Define project configuration
- [ ] Create timeline steps data (3 steps)
- [ ] Create feature cards data (2-3 cards)
- [ ] Add sidebar images for tech stack
- [ ] Implement all event handlers
- [ ] Add magnifier component
- [ ] Add modal component
- [ ] Create CSS module with required classes
- [ ] Add responsive breakpoints
- [ ] Export meta using `createProjectMeta`
- [ ] Update `projects-data.js`
- [ ] Test image interactions
- [ ] Test responsive layout
- [ ] Test section navigation
- [ ] Verify accessibility
- [ ] Optimize performance

---

## Common Patterns Reference

### Pattern: Interactive Image
```javascript
// In component
const handleImageClick = (imageSrc, alt) => {
  setSelectedImage({ src: imageSrc, alt });
};

// In JSX
<div
  onClick={() => handleImageClick(img.src, img.alt)}
  onMouseMove={(e) => handleMouseMove(e, img.src)}
  onMouseEnter={(e) => handleMouseEnter(e, img.src)}
  onMouseLeave={handleMouseLeave}
>
  <Image {...createImageVariants(img.src, img.alt)} />
</div>
```

### Pattern: Section with Ref
```javascript
<ProjectSection ref={sectionRefs.sectionName}>
  <ProjectSectionContent>
    {/* Content */}
  </ProjectSectionContent>
</ProjectSection>
```

### Pattern: Responsive Image Sizes
```javascript
sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 70vw, 50vw`}
```

---

## Troubleshooting

### Images not loading
- Check import paths
- Verify images exist in assets folder
- Check file extensions match imports

### Magnifier not working
- Verify `useMagnifier` hook is called
- Check event handlers are attached
- Ensure CSS class `.magnifier` exists

### Sections not navigating
- Verify `sectionNames` array matches ref keys
- Check `useProjectPage` hook is called
- Ensure refs are attached to sections

### Styles not applying
- Check CSS module import
- Verify class names match
- Check for CSS variable availability

### Modal not appearing
- Verify `Modal` component is imported
- Check `selectedImage` state management
- Ensure modal is outside `ProjectContainer`

---

## Examples Comparison

| Feature | Lotel | Orbit & Chill | Blueprint Flutter | Sweldo | Airline |
|---------|-------|---------------|-------------------|--------|---------|
| Layout Type | Modern Timeline | Modern Timeline | Modern Timeline | Traditional Grid | Traditional Grid |
| Timeline Steps | 3 | 3 | 3 | N/A | N/A |
| Feature Cards | 2 | 3 | 3 | N/A | N/A |
| Magnifier | ✓ | ✓ | ✓ | ✗ | ✗ |
| Modal | ✓ | ✓ | ✓ | ✗ | ✗ |
| Sidebar Images | ✓ | ✓ | ✓ | ✗ | ✗ |
| Code Snippets | ✗ | ✗ | ✗ | ✗ | ✓ |
| Secondary Link | ✓ | ✓ | ✗ | ✗ | ✗ |
| PDF Link | ✗ | ✗ | ✗ | ✗ | ✓ |

**Recommendation**: Use **Modern Timeline Layout** for new projects as it provides better visual flow and user engagement.

---

## Additional Resources

- **Project Layouts**: `app/layouts/project/`
- **Shared Components**: `app/components/`
- **Utilities**: `app/utils/project-helpers.js`
- **Hooks**: `app/hooks/use-project-page.js`, `app/hooks/use-magnifier.js`
- **Global Styles**: `app/global.module.css`
- **Example Projects**: All projects in `app/routes/projects.*/`

---

## Version History

- **v1.0** (Current) - Initial guide based on existing project patterns
- Created: 2025-11-25
- Based on: lotel, sweldo, orbitandchill, blueprintjs_flutter, airlineCrewScheduling

---

*This guide is a living document. Update it as new patterns emerge or best practices change.*
