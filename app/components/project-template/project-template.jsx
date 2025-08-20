import { Fragment } from 'react';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
} from '~/layouts/project';
import { useProjectPage } from '~/hooks/use-project-page';
import { baseMeta } from '~/utils/meta';

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
  children,
  sectionNames = ['header', 'intro', 'details'],
  className
}) => {
  const {
    currentSectionIndex,
    visibleSections,
    sectionRefs
  } = useProjectPage(sectionNames);

  return (
    <Fragment>
      <ProjectContainer className={className}>
        {backgroundImage && (
          <ProjectBackground
            src={backgroundImage}
            srcSet={`${backgroundImage} 1280w, ${backgroundImage} 2560w`}
            width={1280}
            height={800}
            placeholder={backgroundImage}
            opacity={0.8}
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
        {typeof children === 'function' 
          ? children({ sectionRefs, visibleSections, currentSectionIndex })
          : children
        }
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};