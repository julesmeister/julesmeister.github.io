import { Image } from '~/components/image';
import { Link } from '~/components/link';
import {
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { createImageVariants } from '~/utils/project-helpers';
import styles from './project-sections.module.css';

const ImageFrame = ({ image, alt, section, className, getImageHandlers, style, children }) => (
  <div className={className} style={style} {...getImageHandlers?.(image, alt)}>
    {children}
    <Image
      {...createImageVariants(image, alt, {
        ...section.imageOptions,
        sizes: section.imageSizes,
      })}
    />
  </div>
);

const TimelineSection = ({ section, sectionRef, getImageHandlers }) => (
  <ProjectSection padding={section.padding || 'top'} ref={sectionRef}>
    <ProjectSectionContent>
      <div className={styles.timelineContainer}>
        <div className={styles.timelineItems} data-layout={section.layout || 'horizontal'}>
          {section.items.map((item, index) => (
            <div
              className={styles.timelineItem}
              data-step={item.stepNumber}
              key={item.id || item.stepNumber}
              style={{
                '--item-offset': `${section.offsets?.[index] || 0}px`,
                '--item-delay': `${1 + index * 0.3}s`,
              }}
            >
              <ImageFrame
                image={item.image}
                alt={item.alt || item.title}
                section={section}
                className={styles.timelineImage}
                getImageHandlers={getImageHandlers}
              >
                <span className={styles.stepNumber}>{item.stepNumber}</span>
              </ImageFrame>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectSectionContent>
  </ProjectSection>
);

const FeatureSection = ({ section, sectionRef, getImageHandlers }) => (
  <ProjectSection ref={sectionRef}>
    <ProjectSectionContent>
      <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
      {section.description && (
        <ProjectSectionText>{section.description}</ProjectSectionText>
      )}
      <div className={styles.featureItems} data-layout={section.layout || 'alternating'}>
        {section.items.map((item, index) => (
          <article
            className={styles.featureCard}
            data-feature={item.id || `feature-${item.featureNumber}`}
            key={item.id || item.featureNumber}
            style={{ '--item-delay': `${section.delays?.[index] ?? index * 0.2}s` }}
          >
            <span className={styles.featureNumber}>{item.featureNumber}</span>
            <ImageFrame
              image={item.image}
              alt={item.alt || item.title}
              section={section}
              className={styles.featureImage}
              getImageHandlers={getImageHandlers}
            />
            <div className={styles.featureContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </ProjectSectionContent>
  </ProjectSection>
);

const ImageTextSection = ({ section, sectionRef, getImageHandlers }) => (
  <ProjectSection ref={sectionRef}>
    <ProjectSectionColumns centered className={styles.imageTextColumns}>
      <div className={styles.imageTextCopy}>
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {section.paragraphs.map((paragraph) => (
          <ProjectSectionText key={paragraph}>{paragraph}</ProjectSectionText>
        ))}
      </div>
      <div className={styles.imageStack}>
        {section.images.map((image, index) => (
          <ImageFrame
            image={image.src}
            alt={image.alt}
            section={section}
            className={styles.imageStackItem}
            getImageHandlers={getImageHandlers}
            style={{ '--image-offset': `${section.imageOffsets?.[index] ?? (index === 0 ? 5 : -5)}%` }}
            key={image.alt}
          />
        ))}
      </div>
    </ProjectSectionColumns>
  </ProjectSection>
);

const renderTextContent = (content) => Array.isArray(content)
  ? content.map((segment, index) => typeof segment === 'string'
      ? segment
      : <Link href={segment.href} key={`${segment.href}-${index}`}>{segment.text}</Link>)
  : content;

const TextSection = ({ section, sectionRef }) => (
  <ProjectSection ref={sectionRef}>
    <ProjectSectionContent>
      {section.heading && <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>}
      {section.paragraphs?.map((paragraph, index) => (
        <ProjectSectionText key={index}>{paragraph}</ProjectSectionText>
      ))}
      {section.blocks?.map((block, index) => (
        block.type === 'heading' ? (
          <ProjectSectionHeading key={index}>{block.text}</ProjectSectionHeading>
        ) : (
          <ProjectSectionText key={index}>{renderTextContent(block.content)}</ProjectSectionText>
        )
      ))}
    </ProjectSectionContent>
  </ProjectSection>
);

const sectionRenderers = {
  timeline: TimelineSection,
  features: FeatureSection,
  'image-text': ImageTextSection,
  text: TextSection,
};

export const ProjectSections = ({ sections, sectionRefs, getImageHandlers }) => (
  <>
    {sections.map((section) => {
      const SectionRenderer = sectionRenderers[section.type];

      if (!SectionRenderer) {
        throw new Error(`Unknown project section type: ${section.type}`);
      }

      return (
        <SectionRenderer
          key={section.id}
          section={section}
          sectionRef={sectionRefs[section.id]}
          getImageHandlers={getImageHandlers}
        />
      );
    })}
  </>
);