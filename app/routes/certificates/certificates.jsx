import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { List, ListItem } from '~/components/list';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import { Fragment, useState } from 'react';
import { Modal } from '~/components/Modal/Modal';
import adobeAfterEffectsCert from '~/assets/certificates/UC-4c7604d3-efdb-4a3d-aeaf-ebe7cf7cba26.jpg';
import dartAdvancedCert from '~/assets/certificates/UC-9eca3ac5-80b1-4deb-9634-bb9333f56aca.jpg';
import iosSwiftBootcampCert from '~/assets/certificates/UC-NNL2TKF5.jpg';
import salesforcePlatformDeveloperCert from '~/assets/certificates/UC-0f64e9d6-3334-4a59-aec6-56dd7a7204de.jpg';
import styles from './certificates.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Certificates',
    description: 'Course certificates in software development and creative tools',
  });
};

const CertificateCard = ({ image, title, issuer, date, description, onImageClick }) => (
  <div className={styles.certificateCard}>
    <div
      className={styles.certificateImageWrapper}
      onClick={() => onImageClick(image, title)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onImageClick(image, title);
        }
      }}
      aria-label={`View ${title} certificate`}
    >
      <Image
        src={image}
        alt={title}
        className={styles.certificateImage}
        width={400}
        height={300}
        sizes={`(max-width: ${media.mobile}px) 90vw, 400px`}
      />
      <div className={styles.certificateOverlay}>
        <span className={styles.viewIcon}>View</span>
      </div>
    </div>
    <div className={styles.certificateContent}>
      <h3 className={styles.certificateTitle}>{title}</h3>
      <p className={styles.certificateMeta}>
        <span className={styles.certificateIssuer}>{issuer}</span>
        <span className={styles.certificateDate}>{date}</span>
      </p>
      {description && (
        <p className={styles.certificateDescription}>{description}</p>
      )}
    </div>
  </div>
);

export const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      image: salesforcePlatformDeveloperCert,
      title: 'Salesforce Certified Platform Developer I (LWC & Aura)',
      issuer: 'Udemy',
      date: 'December 29, 2024',
      description: 'Course covering Salesforce Platform Developer concepts, Lightning Web Components, and Aura.',
    },
    {
      image: adobeAfterEffectsCert,
      title: 'Adobe After Effects CC Bootcamp: Beginner to Advanced',
      issuer: 'Udemy',
      date: 'April 15, 2026',
      description: 'A 35-hour course in Adobe After Effects, from beginner foundations to advanced techniques.',
    },
    {
      image: dartAdvancedCert,
      title: 'Dart - Advanced Course',
      issuer: 'Udemy',
      date: 'December 3, 2020',
      description: 'An advanced course in the Dart programming language.',
    },
    {
      image: iosSwiftBootcampCert,
      title: 'iOS 12 & Swift - The Complete iOS App Development Bootcamp',
      issuer: 'Udemy',
      date: 'July 30, 2019',
      description: 'A 55.5-hour bootcamp in iOS app development with Swift.',
    },
  ];

  const handleImageClick = (imageSrc, title) => {
    setSelectedImage({ src: imageSrc, alt: title });
  };

  return (
    <Fragment>
      <ProjectContainer className={styles.certificates}>
        <ProjectHeader
          title="Certificates"
          description="Course certificates documenting structured learning in software development and creative tools."
        />
        
        <ProjectSection padding="top" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Course Certificates</ProjectSectionHeading>
              <ProjectSectionText>
                A selection of courses completed in Salesforce, mobile development, Dart, and motion graphics.
              </ProjectSectionText>
            </ProjectTextRow>
            
            <div className={styles.certificatesGrid}>
              {certificates.map((cert) => (
                <CertificateCard
                  key={cert.title}
                  {...cert}
                  onImageClick={handleImageClick}
                />
              ))}
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Learning Approach</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I prioritize hands-on, project-based learning to ensure skills are 
                    immediately applicable to real-world scenarios.
                  </ListItem>
                  <ListItem>
                    I apply what I learn through hands-on projects and practical work.
                  </ListItem>
                  <ListItem>
                    I focus on technologies and skills that complement my existing 
                    expertise while opening new creative and technical possibilities.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      
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
      
      <Footer />
    </Fragment>
  );
};
