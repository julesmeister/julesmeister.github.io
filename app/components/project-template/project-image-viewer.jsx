import { Image } from '~/components/image';
import { Modal } from '~/components/Modal/Modal';
import '~/styles/project-interactions.css';

export const ProjectImageViewer = ({ magnifier, selectedImage, closeImage }) => (
  <>
    {magnifier.isVisible && (
      <div
        className="magnifier"
        style={{
          left: magnifier.x,
          top: magnifier.y,
          backgroundImage: `url(${magnifier.currentImage})`,
          backgroundPosition: `${magnifier.backgroundX}% ${magnifier.backgroundY}%`,
        }}
      />
    )}
    {selectedImage && (
      <Modal isOpen={!!selectedImage} onClose={closeImage}>
        <div className="modalImageContainer">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="modalImage"
          />
          <p className="modalCaption">{selectedImage.alt}</p>
        </div>
      </Modal>
    )}
  </>
);
