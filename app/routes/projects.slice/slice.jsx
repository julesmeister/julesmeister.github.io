
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Equity Stop Plugin with Cooldown for cTrader';
const description =
  'This enhanced version offers a streamlined interface with consolidated components and additional features for better trade management. The UI has been optimized by grouping related components together, resulting in a more efficient use of space.';
const roles = ['cTrader', 'Plugin', 'C#'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
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
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${cTraderScreenShot} 800w, ${cTraderScreenShotLarge} 1920w`}
              width={800}
              height={500}
              placeholder={cTraderScreenShotPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>New Features</ProjectSectionHeading>
              <ProjectSectionText>
                It's been a pain to switch lot size with cTrader, so I tweaked the plugin to make it easier to do so. When stops are hit, the plugin will automatically cooldown depending on the timer set. This will suspend the user from overtrading and give them a chance to relax their emotions before making yet another trade.
              </ProjectSectionText>
              <ProjectSectionText>
                Furthermore, each trade executed via this plugin will automatically have stop loss/take profit assigned in accordance with the user's predefined settings.
              </ProjectSectionText>
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
