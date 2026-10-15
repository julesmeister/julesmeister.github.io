import { Fragment, useMemo } from 'react';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
} from '~/layouts/project';
import { useProjectPage } from '~/hooks/use-project-page';
import { useProjectImageViewer } from '~/hooks/use-project-image-viewer';
import { baseMeta } from '~/utils/meta';
import { ProjectImageViewer } from './project-image-viewer';
import { ProjectSections } from './project-sections';

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
  imageViewer: imageViewerEnabled = false,
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
  const imageViewer = useProjectImageViewer();
  const sectionImageHandlers = getImageHandlers || (imageViewerEnabled ? imageViewer.getImageHandlers : undefined);

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
      {imageViewerEnabled && (
        <ProjectImageViewer {...imageViewer} />
      )}
      <Footer />
    </Fragment>
  );
};