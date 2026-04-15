import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { List, ListItem } from '~/components/list';
import {
  ProjectBackground,
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
import styles from './certificates.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Certificates',
    description: 'Professional certifications and achievements',
  });
};

const CertificateCard = ({ image, title, issuer, date, description, onImageClick }) => (
  <div className={styles.certificateCard}>
    <div 
      className={styles.certificateImageWrapper}
      onClick={() => onImageClick(image, title)}
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
      image: adobeAfterEffectsCert,
      title: 'Adobe After Effects',
      issuer: 'Udemy',
      date: '2026',
      description: 'Comprehensive course on motion graphics and visual effects using Adobe After Effects.',
    },
  ];

  const handleImageClick = (imageSrc, title) => {
    setSelectedImage({ src: imageSrc, alt: title });
  };

  return (
    <Fragment>
      <ProjectContainer className={styles.certificates}>
        <ProjectBackground
          src={null}
          opacity={0.5}
        />
        <ProjectHeader
          title="Certificates"
          description="A collection of my professional certifications and educational achievements that demonstrate my commitment to continuous learning and skill development."
        />
        
        <ProjectSection padding="top" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Professional Certifications</ProjectSectionHeading>
              <ProjectSectionText>
                I believe in continuously expanding my skillset through structured learning 
                and professional certification programs. Here are the credentials I've earned 
                throughout my career.
              </ProjectSectionText>
            </ProjectTextRow>
            
            <div className={styles.certificatesGrid}>
              {certificates.map((cert, index) => (
                <CertificateCard
                  key={index}
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
                    Each certification represents not just course completion, but 
                    demonstrated competency through practical assessments.
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
