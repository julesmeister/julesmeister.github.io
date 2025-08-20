// Utility to create image import variants automatically
export const createImageImports = (basePath, imageNames) => {
  const images = {};
  
  imageNames.forEach(name => {
    const imagePath = `${basePath}/${name}.png`;
    images[name] = {
      src: imagePath,
      large: imagePath,
      placeholder: imagePath
    };
  });
  
  return images;
};

// Blueprint Flutter specific images
export const blueprintFlutterImages = createImageImports('~/assets/blueprintjs_flutter', [
  'home-desktop',
  'cards', 
  'colors',
  'dialog',
  'form1',
  'form2', 
  'popovers',
  'progress-bars',
  'table',
  'tags',
  'tree',
  'navbar'
]);

// Orbit and Chill specific images  
export const orbitAndChillImages = {
  photo1: '~/assets/orbitandchill/photo_1_2025-08-18_18-13-46.jpg',
  photo3: '~/assets/orbitandchill/photo_3_2025-08-18_18-13-46.jpg',
  photo4: '~/assets/orbitandchill/photo_4_2025-08-18_18-13-46.jpg', 
  photo5: '~/assets/orbitandchill/photo_5_2025-08-18_18-13-46.jpg',
  photo6: '~/assets/orbitandchill/photo_6_2025-08-18_18-13-46.jpg',
  photo7: '~/assets/orbitandchill/photo_7_2025-08-18_18-13-46.jpg',
  electional: '~/assets/orbitandchill/electional.png',
  natalChart: '~/assets/orbitandchill/Screenshot 2025-08-18 195310.png'
};