import { useCallback, useState } from 'react';
import { useMagnifier } from '~/hooks/use-magnifier';

export const useProjectImageViewer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { magnifier, showMagnifier, hideMagnifier, updateMagnifier } = useMagnifier();

  const getImageHandlers = useCallback((image, alt) => ({
    onClick: () => setSelectedImage({ src: image, alt }),
    onMouseMove: event => updateMagnifier(event, image),
    onMouseEnter: event => showMagnifier(event, image),
    onMouseLeave: hideMagnifier,
  }), [hideMagnifier, showMagnifier, updateMagnifier]);

  const closeImage = useCallback(() => setSelectedImage(null), []);

  return { selectedImage, magnifier, getImageHandlers, closeImage };
};
