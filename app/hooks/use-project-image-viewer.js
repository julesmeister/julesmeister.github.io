import { useCallback, useState } from 'react';
import { useMagnifier } from '~/hooks/use-magnifier';

const VIEWER_SRC_ATTR = 'data-viewer-src';
const VIEWER_ALT_ATTR = 'data-viewer-alt';

// Collect every viewer-enabled image on the page in document order, deduped by src.
const collectPageImages = () => {
  if (typeof document === 'undefined') return [];
  const seen = new Set();
  const images = [];
  document.querySelectorAll(`[${VIEWER_SRC_ATTR}]`).forEach(element => {
    const src = element.getAttribute(VIEWER_SRC_ATTR);
    if (!src || seen.has(src)) return;
    seen.add(src);
    images.push({ src, alt: element.getAttribute(VIEWER_ALT_ATTR) || '' });
  });
  return images;
};

export const useProjectImageViewer = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const { magnifier, showMagnifier, hideMagnifier, updateMagnifier } = useMagnifier();

  const openImage = useCallback((src, alt) => {
    const pageImages = collectPageImages();
    let index = pageImages.findIndex(image => image.src === src);
    if (index === -1) {
      pageImages.push({ src, alt });
      index = pageImages.length - 1;
    }
    hideMagnifier();
    setImages(pageImages);
    setCurrentImageIndex(index);
  }, [hideMagnifier]);

  const getImageHandlers = useCallback((image, alt) => ({
    [VIEWER_SRC_ATTR]: image,
    [VIEWER_ALT_ATTR]: alt,
    onClick: () => openImage(image, alt),
    onMouseMove: event => updateMagnifier(event, image),
    onMouseEnter: event => showMagnifier(event, image),
    onMouseLeave: hideMagnifier,
  }), [openImage, hideMagnifier, showMagnifier, updateMagnifier]);

  const closeImage = useCallback(() => setCurrentImageIndex(-1), []);

  const onPreviousImage = useCallback(() => {
    setCurrentImageIndex(index => (index > 0 ? index - 1 : index));
  }, []);

  const onNextImage = useCallback(() => {
    setCurrentImageIndex(index => (index >= 0 && index < images.length - 1 ? index + 1 : index));
  }, [images.length]);

  const selectedImage = currentImageIndex >= 0 ? images[currentImageIndex] || null : null;

  return {
    selectedImage,
    magnifier,
    getImageHandlers,
    closeImage,
    allImages: images,
    currentImageIndex,
    onPreviousImage,
    onNextImage,
  };
};
