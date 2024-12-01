
import lotelHomeLarge from '~/assets/Lotel-Home-Cut.jpg';
import lotelHomePlaceholder from '~/assets/Lotel-Home-Cut.jpg';
import lotelHome from '~/assets/Lotel-Home-Cut.jpg';
import lotelMartLarge from '~/assets/Lotel-Mart.jpg';
import lotelMartPlaceholder from '~/assets/Lotel-Mart.jpg';
import lotelMart from '~/assets/Lotel-Mart.jpg';
import lotelTransactionsLarge from '~/assets/Lotel-Transactions.jpg';
import lotelTransactionsPlaceholder from '~/assets/Lotel-Transactions.jpg';
import lotelTransactions from '~/assets/Lotel-Transactions.jpg';
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
  ProjectImageColumns,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './lotel.module.css';

const title = 'Lotel Android App';
const description =
  'I rebuilt this project using Flutterflow and Firebase, migrating it from a desktop Electron app with a Vue frontend. I have onboarded our staff and co-owners, who use the app on their Android phones to monitor hotels\' performance. It has been in production for over a year and is still used actively today. A limited demo mode is available upon request.';
const roles = ['Android', 'Flutterflow', 'Firebase'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={lotelHomeLarge}
          srcSet={`${lotelHomeLarge} 1280w, ${lotelHomeLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={lotelHomeLarge}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://lotel-7ac21u.flutterflow.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImageColumns
              images={[
                {
                  srcSet: `${lotelHome} 800w, ${lotelHomeLarge} 1920w`,
                  width: 800,
                  height: 500,
                  placeholder: lotelHomePlaceholder,
                  alt: 'The Slice web application showing a selected user annotation.',
                },
                {
                  srcSet: `${lotelMart} 800w, ${lotelMartLarge} 1920w`,
                  width: 800,
                  height: 500,
                  placeholder: lotelMartPlaceholder,
                  alt: 'The Slice web application showing a selected user annotation.',
                },
                {
                  srcSet: `${lotelTransactions} 800w, ${lotelTransactionsLarge} 1920w`,
                  width: 800,
                  height: 500,
                  placeholder: lotelTransactionsPlaceholder,
                  alt: 'The Slice web application showing a selected user annotation.',
                },
              ]}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Why I chose Flutterflow?</ProjectSectionHeading>
              <ProjectSectionText>
                For a project with a simple CRUD requirement like this, where the UI is not overly complex, I chose Flutterflow for its rapid prototyping capabilities. This allowed me to quickly develop a functional app that was easy for my target users to utilize, as they were all on Android. It's also easily available to be used on the web.
              </ProjectSectionText>
              <ProjectSectionText>
                Flutterflow abstracts a lot of the UI code away from the developer, and it's easy to work with. I also like the way it handles the app's state, which is important for a simple app like this.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${lotelTransactions} 350w, ${lotelTransactionsLarge} 700w`}
                width={350}
                height={750}
                placeholder={lotelTransactionsPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${lotelMart} 350w, ${lotelMartLarge} 700w`}
                width={350}
                height={750}
                placeholder={lotelMartPlaceholder}
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
