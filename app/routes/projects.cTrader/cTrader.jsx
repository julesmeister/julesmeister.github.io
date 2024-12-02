import cTraderScreenShotLarge from '~/assets/cTrader.png';
import cTraderScreenShotPlaceholder from '~/assets/cTrader.png';
import cTraderScreenShot from '~/assets/cTrader.png';
import equityStopNewLarge from '~/assets/equity-stop-order-cooldown.png';
import equityStopNewPlaceholder from '~/assets/equity-stop-order-cooldown.png';
import equityStopNew from '~/assets/equity-stop-order-cooldown.png';
import sliceSidebarLayersLarge from '~/assets/Equity-Stop-Old.png';
import sliceSidebarLayersPlaceholder from '~/assets/Equity-Stop-Old.png';
import sliceSidebarLayers from '~/assets/Equity-Stop-Old.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, useRef, useState, useEffect } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './cTrader.module.css';
import { List, ListItem } from '~/components/list';

const title = 'Equity Stop Plugin with Cooldown for cTrader';
const description =
  'When I was experimenting with my trading journey, I found that the cTrader plugin for Equity Stop was a bit clunky and need more customization. This enhanced version offers additional features for better trade management. I have designed it specifically for the use of martingale trading, hence the "+" and "-" buttons for doubling and halving the lot size and the "Stop Loss" and "Take Profit" fields. The UI has been optimized by grouping related components together, resulting in a more efficient use of space.';
const roles = ['cTrader', 'Plugin', 'C#'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Create refs for each section
  const introSection = useRef();
  const featuresSection = useRef();

  const sections = [introSection, featuresSection];

  useEffect(() => {
    // Initialize sections observer only when refs are ready
    if (!sections.every(section => section.current)) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            const sectionIndex = sections.findIndex(s => s.current === section);

            if (sectionIndex !== -1) {
              setCurrentSectionIndex(sectionIndex);
            }
          }
        });
      },
      { 
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1] 
      }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    return () => sectionObserver.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleSectionNav = (event) => {
      const direction = event.detail;
      const newIndex = direction === 'up' ? currentSectionIndex - 1 : currentSectionIndex + 1;
      
      if (newIndex >= 0 && newIndex < sections.length) {
        setCurrentSectionIndex(newIndex);
        sections[newIndex].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    window.addEventListener('navigate-section', handleSectionNav);
    return () => window.removeEventListener('navigate-section', handleSectionNav);
  }, [currentSectionIndex, sections]);

  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={cTraderScreenShotLarge}
          srcSet={`${cTraderScreenShotLarge} 1280w, ${cTraderScreenShotLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={cTraderScreenShotLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/julesmeister/Equity-Stop-w--Cooldown-cTrader"
          linkLabel="View on GitHub"
          roles={roles}
        />
        <ProjectSection padding="top" ref={introSection}>
          <ProjectSectionContent>
            <ProjectImage
              className={styles.themeImage}
              srcSet={`${cTraderScreenShot} 800w, ${cTraderScreenShotLarge} 1920w`}
              width={800}
              height={500}
              placeholder={cTraderScreenShotPlaceholder}
              alt="Enhanced Equity Stop plugin interface showing lot size controls and cooldown features"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "The plugin I'm referring to is on the right, below the order panel."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection ref={featuresSection}>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Enhanced Features</ProjectSectionHeading>
              <List>
                <ListItem>The plugin behind is Acronew's, the plugin in front is my own built on top of his.</ListItem>
                <ListItem>It's been a pain to switch lot sizes with cTrader, so I tweaked the plugin to make it easier to do so. 
                </ListItem>
                <ListItem>When stops are hit, the plugin will automatically cooldown depending on the timer set. This will suspend the user from overtrading and give them a chance to relax their emotions before making yet another trade.</ListItem>
                <ListItem>Furthermore, each trade executed via this plugin will automatically have stop loss/take profit assigned in accordance with the user's predefined settings.
                </ListItem>
              </List>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${equityStopNew} 350w, ${equityStopNewLarge} 700w`}
                width={350}
                height={750}
                placeholder={equityStopNewPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
