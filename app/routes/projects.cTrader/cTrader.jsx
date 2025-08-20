/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cTraderScreenShot from '~/assets/cTrader.png';
import equityStopNew from '~/assets/equity-stop-order-cooldown.png';
import equityStopOld from '~/assets/Equity-Stop-Old.png';

import { Fragment, useState } from 'react';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon';
import { Footer } from '~/components/footer';
import { Modal } from '~/components/Modal/Modal';
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
} from '~/layouts/project';
import { createProjectMeta } from '~/components/project-template';
import { useProjectPage } from '~/hooks/use-project-page';
import { useMagnifier } from '~/hooks/use-magnifier';
import { createImageVariants } from '~/utils/project-helpers';
import { List, ListItem } from '~/components/list';
import { media } from '~/utils/style';
import styles from './cTrader.module.css';

// Project configuration
const projectConfig = {
  title: 'Equity Stop Plugin with Cooldown for cTrader',
  description: 'When I was experimenting with my trading journey, I found that the cTrader plugin for Equity Stop was a bit clunky and need more customization. This enhanced version offers additional features for better trade management. I have designed it specifically for the use of martingale trading, hence the "+" and "-" buttons for doubling and halving the lot size and the "Stop Loss" and "Take Profit" fields. The UI has been optimized by grouping related components together, resulting in a more efficient use of space.',
  roles: ['cTrader', 'Plugin', 'C#'],
  url: 'https://github.com/julesmeister/Equity-Stop-w--Cooldown-cTrader',
  linkLabel: 'View on GitHub',
  backgroundImage: cTraderScreenShot,
  sectionNames: ['header', 'intro', 'features']
};

// Sidebar comparison images
const sidebarImages = [
  { src: equityStopOld, alt: 'The old look created by Acronew.' },
  { src: equityStopNew, alt: 'The new enhanced look created by me.' }
];

export const meta = createProjectMeta(projectConfig.title, projectConfig.description);

export const Slice = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { magnifier, showMagnifier, hideMagnifier, updateMagnifier } = useMagnifier();
  const { sectionRefs } = useProjectPage(projectConfig.sectionNames);

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
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={projectConfig.backgroundImage}
          srcSet={`${projectConfig.backgroundImage} 1280w, ${projectConfig.backgroundImage} 2560w`}
          width={1280}
          height={800}
          placeholder={projectConfig.backgroundImage}
          opacity={0.8}
        />
        <ProjectHeader
          title={projectConfig.title}
          description={projectConfig.description}
          url={projectConfig.url}
          linkLabel={projectConfig.linkLabel}
          roles={projectConfig.roles}
          ref={sectionRefs.header}
        />
        <ProjectSection padding="top" ref={sectionRefs.intro}>
          <ProjectSectionContent>
            <div 
              className={styles.themeImageWrapper}
              onClick={() => handleImageClick(cTraderScreenShot, "Enhanced Equity Stop plugin interface showing lot size controls and cooldown features")}
              onMouseMove={(e) => handleMouseMove(e, cTraderScreenShot)}
              onMouseEnter={(e) => handleMouseEnter(e, cTraderScreenShot)}
              onMouseLeave={handleMouseLeave}
            >
              <ProjectImage
                className={styles.themeImage}
                {...createImageVariants(cTraderScreenShot, "Enhanced Equity Stop plugin interface showing lot size controls and cooldown features", { width: 800, height: 500 })}
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
              />
            </div>
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
        <ProjectSection ref={sectionRefs.features}>
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
              {sidebarImages.map((img, index) => (
                <div 
                  key={index}
                  className={styles.sidebarImageWrapper}
                  onClick={() => handleImageClick(img.src, img.alt)}
                  onMouseMove={(e) => handleMouseMove(e, img.src)}
                  onMouseEnter={(e) => handleMouseEnter(e, img.src)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    className={styles.sidebarImage}
                    {...createImageVariants(img.src, img.alt, { width: 350, height: 750 })}
                    sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                  />
                </div>
              ))}
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>

      {/* Magnifier */}
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

      {/* Modal for full-size images */}
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
      
      <Footer />
    </Fragment>
  );
};
