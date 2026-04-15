# Simple Page Design Guide

This guide documents the styling format and patterns for creating simple content pages (like `/uses`, `/certificates`) to ensure visual uniformity across the portfolio.

---

## Overview

Simple pages follow a consistent layout pattern using shared components from `~/layouts/project`. These pages are designed for presenting informational content with a clean, professional appearance.

---

## Page Structure

### Directory Structure

```
app/routes/{pageName}/
├── route.js                    # Route export
├── {pageName}.jsx               # Main component file
└── {pageName}.module.css        # Component styles
```

### Route File (`route.js`)

```javascript
export { PageName as default, meta } from './{pageName}';
```

### Required Imports

```javascript
// 1. React imports
import { Fragment } from 'react';

// 2. Layout imports (from ~/layouts/project)
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
  ProjectSectionColumns,  // Optional: for two-column layouts
} from '~/layouts/project';

// 3. Component imports (as needed)
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import { Modal } from '~/components/Modal/Modal';

// 4. Utilities
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

// 5. Styles
import styles from './{pageName}.module.css';
```

---

## Standard Page Template

```javascript
export const meta = () => {
  return baseMeta({
    title: 'Page Title',
    description: 'Brief description for SEO',
  });
};

export const PageName = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.pageName}>
        <ProjectBackground
          src={backgroundImage}  // or null for no background
          placeholder={placeholderImage}
          opacity={0.7}
        />
        <ProjectHeader
          title="Page Title"
          description="Brief description of the page content."
        />
        
        {/* Content Sections */}
        <ProjectSection padding="top" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Section Title</ProjectSectionHeading>
              <ProjectSectionText>
                Section content goes here...
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
```

---

## CSS Module Standards

### Base Page Styles

```css
.pageName {
  --maxWidthL: var(--maxWidthM);
}

.section {
  opacity: 0;
  padding-top: var(--space2XL);
  padding-bottom: var(--space2XL);
  margin-top: var(--space2XL);

  &:global {
    animation: fade-in 1s ease 1s forwards;
  }

  + & {
    margin-top: 0;
  }
}
```

### Common CSS Variables

| Variable | Purpose |
|----------|---------|
| `--space2XL` | Large section spacing |
| `--spaceXL` | Medium section spacing |
| `--spaceL` | Component padding |
| `--spaceM` | Small gaps |
| `--spaceS` | Micro spacing |
| `--colorTextTitle` | Heading text color |
| `--colorTextBody` | Body text color |
| `--colorBackgroundLight` | Card backgrounds |
| `--colorPrimary` | Accent color |
| `--borderRadius` | Border radius standard |
| `--fontSizeH4`, `--fontSizeH5` | Heading sizes |
| `--fontSizeBodyM`, `--fontSizeBodyS` | Body text sizes |
| `--fontWeightMedium`, `--fontWeightBold` | Font weights |

---

## Card Component Pattern

For pages displaying items in a grid (like certificates):

### Card Component Structure

```css
.itemsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space2XL);
  margin-top: var(--space3XL);
}

.itemCard {
  display: flex;
  flex-direction: column;
  background: var(--colorBackgroundLight);
  border-radius: var(--borderRadius);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.itemCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}
```

### Image Wrapper with Overlay

```css
.itemImageWrapper {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.itemImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.itemImageWrapper:hover .itemImage {
  transform: scale(1.05);
}

/* Optional overlay on hover */
.itemOverlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.itemImageWrapper:hover .itemOverlay {
  opacity: 1;
}
```

---

## Modal Integration

For image viewing in modals:

```javascript
const [selectedImage, setSelectedImage] = useState(null);

const handleImageClick = (imageSrc, title) => {
  setSelectedImage({ src: imageSrc, alt: title });
};

// In JSX:
{selectedImage && (
  <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
    <div className={styles.modalContent}>
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

```css
.modalContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spaceL);
  padding: var(--spaceL);
}

.modalImage {
  max-width: 90vw;
  max-height: 70vh;
  object-fit: contain;
  border-radius: var(--borderRadius);
}

.modalCaption {
  font-size: var(--fontSizeBodyM);
  color: var(--colorTextBody);
  text-align: center;
  margin: 0;
}
```

---

## Responsive Breakpoints

Standard breakpoints for simple pages:

```css
@media (max-width: 768px) {
  .itemsGrid {
    grid-template-columns: 1fr;
    gap: var(--spaceXL);
  }

  .itemCard {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .itemsGrid {
    gap: var(--spaceL);
  }
}
```

---

## Adding to Navigation

Update `app/layouts/navbar/nav-data.js`:

```javascript
export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Me',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Your New Page',
    pathname: '/{pageName}',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];
```

---

## Checklist for New Simple Pages

- [ ] Create page directory: `app/routes/{pageName}/`
- [ ] Create `route.js` with proper export
- [ ] Create main component `{pageName}.jsx`
  - [ ] Import required components from `~/layouts/project`
  - [ ] Define `meta` export with `baseMeta`
  - [ ] Include `<Footer />` at the end
- [ ] Create CSS module `{pageName}.module.css`
  - [ ] Base `.pageName` class with `--maxWidthL`
  - [ ] `.section` class with fade-in animation
  - [ ] Responsive breakpoints at 768px and 480px
- [ ] Add navigation link to `nav-data.js`
- [ ] Test responsive layout
- [ ] Test dark/light theme compatibility

---

## Example Reference Pages

- **`/uses`** - Text-heavy informational page with lists and tables
- **`/certificates`** - Card grid layout with images and modal viewing

---

*This guide ensures consistency across all simple content pages in the portfolio.*
