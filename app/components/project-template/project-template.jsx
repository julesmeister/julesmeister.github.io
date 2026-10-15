import { Fragment, useMemo, useState } from 'react';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Modal } from '~/components/Modal/Modal';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
} from '~/layouts/project';
import { useProjectPage } from '~/hooks/use-project-page';
import { useMagnifier } from '~/hooks/use-magnifier';
import { baseMeta } from '~/utils/meta';
import { ProjectSections } from './project-sections';
import '~/styles/project-interactions.css';

const defaultSectionNames = ['header', 'intro', 'details'];

export const createProjectMeta = (title, description) => () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const ProjectTemplate = ({
  title,
  description,
  roles,
  url,
  secondaryUrl,
  secondaryLinkLabel,
  pdfUrl,
  pdfLinkLabel,
  backgroundImage,
  backgroundOptions,
  theme,
  imageViewer = false,
  sections,
  getImageHandlers,
  children,
  sectionNames,
  className
}) => {
  const resolvedSectionNames = useMemo(
    () => sections
      ? ['header', ...sections.map((section) => section.id)]
      : sectionNames || defaultSectionNames,
    [sections, sectionNames]
  );
  const {
    currentSectionIndex,
    visibleSections,
    sectionRefs
  } = useProjectPage(resolvedSectionNames);
  const themeStyles = theme ? {
    '--project-primary': theme.primary,
    '--project-secondary': theme.secondary,
  } : undefined;
  const [selectedImage, setSelectedImage] = useState(null);
  const { magnifier, showMagnifier, hideMagnifier, updateMagnifier } = useMagnifier();
  const getImageViewerHandlers = (image, alt) => ({
    onClick: () => setSelectedImage({ src: image, alt }),
    onMouseMove: (event) => updateMagnifier(event, image),
    onMouseEnter: (event) => showMagnifier(event, image),
    onMouseLeave: hideMagnifier,
  });
  const sectionImageHandlers = getImageHandlers || (imageViewer ? getImageViewerHandlers : undefined);

  return (
    <Fragment>
      <ProjectContainer className={className} style={themeStyles}>
        {backgroundImage && (
          <ProjectBackground
            src={backgroundImage}
            srcSet={`${backgroundImage} 1280w, ${backgroundImage} 2560w`}
            width={1280}
            height={800}
            placeholder={backgroundImage}
            opacity={0.8}
            {...backgroundOptions}
          />
        )}
        <ProjectHeader
          title={title}
          description={description}
          url={url}
          secondaryUrl={secondaryUrl}
          secondaryLinkLabel={secondaryLinkLabel}
          pdfUrl={pdfUrl}
          pdfLinkLabel={pdfLinkLabel}
          roles={roles}
          ref={sectionRefs.header}
        />
        
        {/* Render children with section refs passed down */}
        {sections ? (
          <ProjectSections
            sections={sections}
            sectionRefs={sectionRefs}
            getImageHandlers={sectionImageHandlers}
          />
        ) : typeof children === 'function' ? (
          children({ sectionRefs, visibleSections, currentSectionIndex })
        ) : children}
      </ProjectContainer>
      {imageViewer && magnifier.isVisible && (
        <div
          className="magnifier"
          style={{
            left: magnifier.x,
            top: magnifier.y,
            backgroundImage: `url(${magnifier.currentImage})`,
            backgroundPosition: `${magnifier.backgroundX}% ${magnifier.backgroundY}%`,
          }}
        />
      )}
      {imageViewer && selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
          <div className="modalImageContainer">
            <Image src={selectedImage.src} alt={selectedImage.alt} className="modalImage" />
            <p className="modalCaption">{selectedImage.alt}</p>
          </div>
        </Modal>
      )}
      <Footer />
    </Fragment>
  );
};