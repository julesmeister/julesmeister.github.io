import { Modal } from '~/components/Modal/Modal';
import '~/styles/project-interactions.css';

const ChevronIcon = ({ direction }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
  </svg>
);

const stopPropagation = event => event.stopPropagation();

export const ProjectImageViewer = ({
  magnifier,
  selectedImage,
  closeImage,
  allImages = [],
  currentImageIndex = -1,
  onPreviousImage,
  onNextImage,
}) => {
  const hasMultipleImages = allImages.length > 1;
  const canGoPrevious = currentImageIndex > 0;
  const canGoNext = currentImageIndex >= 0 && currentImageIndex < allImages.length - 1;

  return (
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
        <Modal
          isOpen={!!selectedImage}
          onClose={closeImage}
          onPrevious={onPreviousImage}
          onNext={onNextImage}
          hasPrevious={canGoPrevious}
          hasNext={canGoNext}
        >
          {hasMultipleImages && (
            <button
              type="button"
              className="modalNavButton prev"
              onClick={event => {
                event.stopPropagation();
                onPreviousImage?.();
              }}
              onKeyDown={stopPropagation}
              disabled={!canGoPrevious}
              aria-label="Previous image"
              title="Previous (←)"
            >
              <ChevronIcon direction="left" />
            </button>
          )}
          <div
            className="modalImageContainer"
            role="presentation"
            onClick={stopPropagation}
            onKeyDown={stopPropagation}
          >
            <img
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modalImage"
              decoding="async"
            />
            <p className="modalCaption">{selectedImage.alt}</p>
            {hasMultipleImages && (
              <span className="modalImageCounter">
                {currentImageIndex + 1} / {allImages.length}
              </span>
            )}
          </div>
          {hasMultipleImages && (
            <button
              type="button"
              className="modalNavButton next"
              onClick={event => {
                event.stopPropagation();
                onNextImage?.();
              }}
              onKeyDown={stopPropagation}
              disabled={!canGoNext}
              aria-label="Next image"
              title="Next (→)"
            >
              <ChevronIcon direction="right" />
            </button>
          )}
        </Modal>
      )}
    </>
  );
};
