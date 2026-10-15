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
import { certificatesData } from './certificates-data';
import styles from './certificates.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Certificates',
    description: 'Course certificates in software development and creative tools',
  });
};

const CertificateImageButton = ({ image, title, className, imageClassName, sizes, onImageClick, children }) => (
  <button
    className={className}
    type="button"
    onClick={() => onImageClick(image, title)}
    aria-label={`View ${title} certificate`}
  >
    <Image
      src={image}
      alt=""
      className={imageClassName}
      width={600}
      height={400}
      sizes={sizes}
    />
    {children}
  </button>
);

const PdfDocumentPreview = ({ documents }) => (
  <div
    className={`${styles.certificateImageWrapper} ${styles.documentPreview}`}
    role="img"
    aria-label={`${documents.length} PDF certificate${documents.length === 1 ? '' : 's'}`}
  >
    <div className={styles.documentPreviewStack}>
      {documents.slice(0, 3).map((document, index) => (
        <div className={styles.documentSheet} key={document.title}>
          <span className={styles.pdfBadge}>PDF</span>
          <span className={styles.documentPreviewTitle}>{document.title}</span>
          <span className={styles.documentPreviewIndex}>
            {String(index + 1).padStart(2, '0')} / {String(documents.length).padStart(2, '0')}
          </span>
        </div>
      ))}
    </div>
    <span className={styles.documentCount}>{documents.length} PDF FILES</span>
  </div>
);

const CertificateCard = ({ image, gallery, title, issuer, date, description, documents, onImageClick }) => (
  <article className={`${styles.certificateCard} ${gallery ? styles.mergedCertificateCard : ''}`}>
    {gallery ? (
      <div className={`${styles.certificateImageWrapper} ${styles.mergedCertificateImages}`}>
        <span className={styles.projectIndex}>FLUTTER / DART</span>
        {gallery.map((certificate) => (
          <CertificateImageButton
            className={styles.mergedCertificateImage}
            imageClassName={styles.certificateImage}
            image={certificate.image}
            title={certificate.title}
            sizes={`(max-width: ${media.mobile}px) 42vw, 360px`}
            onImageClick={onImageClick}
            key={certificate.title}
          >
            <span className={styles.mergedCertificateLabel}>
              {certificate.label}
              <small>{certificate.date}</small>
            </span>
          </CertificateImageButton>
        ))}
      </div>
    ) : image ? (
      <CertificateImageButton
        className={styles.certificateImageWrapper}
        imageClassName={styles.certificateImage}
        image={image}
        title={title}
        sizes={`(max-width: ${media.mobile}px) 90vw, 400px`}
        onImageClick={onImageClick}
      >
        <span className={styles.certificateOverlay}>
          <span className={styles.viewIcon}>View</span>
        </span>
      </CertificateImageButton>
    ) : documents ? (
      <PdfDocumentPreview documents={documents} />
    ) : null}
    <div className={styles.certificateContent}>
      <h3 className={styles.certificateTitle}>{title}</h3>
      {(issuer || date) && (
        <p className={styles.certificateMeta}>
          {issuer && <span className={styles.certificateIssuer}>{issuer}</span>}
          {date && <span className={styles.certificateDate}>{date}</span>}
        </p>
      )}
      {description && <p className={styles.certificateDescription}>{description}</p>}
      {documents && (
        <ul className={styles.certificateDocuments}>
          {documents.map((document) => (
            <li key={document.title}>
              <a href={document.file} target="_blank" rel="noreferrer">
                {document.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </article>
);

export const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
                A selection of learning across software development, data, and creative tools.
              </ProjectSectionText>
            </ProjectTextRow>
            
            <div className={styles.certificatesGrid}>
              {certificatesData.map((certificate) => (
                <CertificateCard
                  key={certificate.title}
                  {...certificate}
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
