import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useParallax } from '~/hooks';
import { forwardRef, useRef, useState } from 'react';
import { classes, cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './project.module.css';
import { Modal } from '~/components/Modal/Modal';
import { Link as RouterLink } from '@remix-run/react';
import {
  siAndroid,
  siAngular,
  siDart,
  siDotnet,
  siElectron,
  siExpo,
  siFirebase,
  siFlutter,
  siFramer,
  siJetpackcompose,
  siKotlin,
  siLightning,
  siNextdotjs,
  siOpenrouter,
  siOpensourceinitiative,
  siReact,
  siRxjs,
  siShadcnui,
  siSupabase,
  siTailwindcss,
  siTurso,
  siTypescript,
  siVercel,
} from 'simple-icons';

const initDelay = 300;

const roleIcons = {
  Angular: siAngular,
  'Angular Material': siAngular,
  RxJS: siRxjs,
  'Lightning Web Components': siLightning,
  'Apex Classes': siLightning,
  'Apex Triggers': siLightning,
  Salesforce: siLightning,
  Flutter: siFlutter,
  Dart: siDart,
  'Open Source': siOpensourceinitiative,
  'C#': siDotnet,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  'Tailwind CSS': siTailwindcss,
  Tailwind: siTailwindcss,
  Firebase: siFirebase,
  'Framer Motion': siFramer,
  Android: siAndroid,
  Flutterflow: siFlutter,
  Kotlin: siKotlin,
  'Jetpack Compose': siJetpackcompose,
  'React Native': siReact,
  Expo: siExpo,
  Supabase: siSupabase,
  'Nextron': siElectron,
  React: siReact,
  Electron: siElectron,
  'shadcn/ui': siShadcnui,
  'Openrouter AI': siOpenrouter,
  Vercel: siVercel,
  Turso: siTurso,
};

const fallbackRoleIconPaths = {
  'JSON Server': 'M3 4h18v4H3zM3 10h18v4H3zM3 16h18v4H3z',
  'Custom Components': 'M3 3h8v8H3zM13 3h8v5h-8zM13 10h8v11h-8zM3 13h8v8H3z',
  cTrader: 'M3 3v18h18v-2H5V3H3zm4 13 4-4 3 2 6-7-1.5-1.3-4.8 5.6-3.2-2.1L5.6 14.6 7 16z',
  Plugin: 'M9 3h6v4h4v4h-4v6h4v4h-4v-4H9v4H5v-4h4v-6H5V7h4V3z',
  'No-Code': 'M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z',
  Astrology: 'M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z',
  CSV: 'M5 2h10l4 4v16H5V2zm9 1.5V7h3.5L14 3.5zM8 11h8v1.5H8V11zm0 4h8v1.5H8V15zm0 4h8v1.5H8V19z',
};

export const ProjectHeader = forwardRef(
  (
    {
      title,
      description,
      linkLabel = 'Visit website',
      url,
      secondaryLinkLabel,
      secondaryUrl,
      pdfLinkLabel,
      pdfUrl,
      roles,
      className,
    },
    ref
  ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <Section className={classes(styles.header, className)} as="section" ref={ref}>
        <div className={styles.headerShell}>
          <div className={styles.systemLine}>
            <RouterLink className={styles.backLink} to="/#projects" aria-label="Back to projects">
              <Icon icon="arrow-left-line" size={12} />
              <span>Projects</span>
            </RouterLink>
            <span className={styles.systemName}><b aria-hidden="true">&gt;_</b> PROJECT.SYSTEM</span>
            <span className={styles.systemMeta}>CASE FILE / 2026</span>
          </div>
          <div
            className={styles.headerContent}
            style={cssProps({ initDelay: numToMs(initDelay) })}
          >
            <div className={styles.details}>
              <p className={styles.headerEyebrow}>PROJECT / CASE STUDY</p>
              <Heading className={styles.title} level={2} as="h1">
                {title}
              </Heading>
              <Text className={styles.description} size="xl" as="p">
                {description}
              </Text>
              <div className={styles.headerActions}>
                {!!url && (
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.linkButton}
                    icon="chevron-right"
                    href={url}
                  >
                    {linkLabel}
                  </Button>
                )}
                {!!secondaryUrl && (
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.linkButton}
                    icon="chevron-right"
                    href={secondaryUrl}
                  >
                    {secondaryLinkLabel}
                  </Button>
                )}
                {!!pdfUrl && (
                  <>
                    <Button
                      secondary
                      iconHoverShift
                      className={styles.linkButton}
                      icon="chevron-right"
                      onClick={() => setIsModalOpen(true)}
                    >
                      {pdfLinkLabel}
                    </Button>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                      <iframe
                        src={pdfUrl}
                        style={{ width: '100vh', height: '80vh', border: 'none' }}
                        title="PDF"
                      />
                    </Modal>
                  </>
                )}
              </div>
            </div>
            {!!roles?.length && (
              <aside className={styles.metaPanel} aria-label="Project technologies">
                <p className={styles.metaLabel}>TECH STACK / INDEX</p>
                <ul className={styles.meta}>
                  {roles.map((role, index) => (
                    <li
                      className={styles.metaItem}
                      style={cssProps({ delay: numToMs(initDelay + 300 + index * 140) })}
                      key={role}
                    >
                      <span className={styles.metaIndex}>{String(index + 1).padStart(2, '0')}</span>
                      <svg className={styles.metaIcon} viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d={roleIcons[role]?.path || fallbackRoleIconPaths[role] || 'M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16'}
                          fill={roleIcons[role] ? `#${roleIcons[role].hex}` : 'currentColor'}
                        />
                      </svg>
                      <Text secondary>{role}</Text>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </div>
      </Section>
    );
  }
);

export const ProjectContainer = ({ className, ...rest }) => (
  <article className={classes(styles.project, className)} {...rest} />
);

export const ProjectSection = forwardRef(
  (
    {
      className,
      light,
      padding = 'both',
      fullHeight,
      backgroundOverlayOpacity = 0.9,
      backgroundElement,
      children,
      ...rest
    },
    ref
  ) => (
    <section
      className={classes(styles.section, className)}
      data-light={light}
      data-full-height={fullHeight}
      ref={ref}
      {...rest}
    >
      <span className={styles.sectionIndex} aria-hidden="true" />
      {!!backgroundElement && (
        <div
          className={styles.sectionBackground}
          style={cssProps({ opacity: backgroundOverlayOpacity })}
        >
          {backgroundElement}
        </div>
      )}
      <Section className={styles.sectionInner} data-padding={padding}>
        {children}
      </Section>
    </section>
  )
);

export const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();

  useParallax(0.6, value => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty('--offset', `${value}px`);
  });

  return (
    <Transition in timeout={msToNum(tokens.base.durationM)}>
      {({ visible, nodeRef }) => (
        <div
          className={classes(styles.backgroundImage, className)}
          data-visible={visible}
          ref={nodeRef}
        >
          <div className={styles.backgroundImageElement} ref={imageRef}>
            <Image cover alt="" role="presentation" {...rest} />
          </div>
          <div className={styles.backgroundScrim} style={cssProps({ opacity })} />
        </div>
      )}
    </Transition>
  );
};

export const ProjectImage = ({ className, alt, ...rest }) => (
  <div className={classes(styles.image, className)}>
    <Image reveal alt={alt} delay={300} {...rest} />
  </div>
);

export const ProjectImageColumns = ({ images }) => (
  <div className={styles.imageColumns}>
    {images.map((image, index) => (
      <div key={index} className={styles.imageColumn}>
        <Image reveal alt={image.alt} delay={300} {...image} />
      </div>
    ))}
  </div>
);

export const ProjectSectionContent = ({ className, width = 'l', ...rest }) => (
  <div
    className={classes(styles.sectionContent, className)}
    data-width={width}
    {...rest}
  />
);

export const ProjectSectionHeading = ({ className, level = 3, as = 'h2', ...rest }) => (
  <Heading
    className={classes(styles.sectionHeading, className)}
    as={as}
    level={level}
    align="auto"
    {...rest}
  />
);

export const ProjectSectionText = ({ className, ...rest }) => (
  <Text className={classes(styles.sectionText, className)} size="l" as="p" {...rest} />
);

export const ProjectTextRow = ({
  center,
  stretch,
  justify = 'center',
  width = 'm',
  noMargin,
  className,
  centerMobile,
  ...rest
}) => (
  <div
    className={classes(styles.textRow, className)}
    data-center={center}
    data-stretch={stretch}
    data-center-mobile={centerMobile}
    data-no-margin={noMargin}
    data-width={width}
    data-justify={justify}
    {...rest}
  />
);

export const ProjectSectionColumns = ({ className, centered, ...rest }) => (
  <ProjectSectionContent
    className={classes(styles.sectionColumns, className)}
    data-centered={centered}
    {...rest}
  />
);
