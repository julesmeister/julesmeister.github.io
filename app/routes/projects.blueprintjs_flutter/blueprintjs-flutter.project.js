// @ts-check
import homeDesktop from '~/assets/blueprintjs_flutter/home-desktop.png';
import home from '~/assets/blueprintjs_flutter/home.png';
import cards from '~/assets/blueprintjs_flutter/cards.png';
import colors from '~/assets/blueprintjs_flutter/colors.png';
import dialog from '~/assets/blueprintjs_flutter/dialog.png';
import form1 from '~/assets/blueprintjs_flutter/form1.png';
import table from '~/assets/blueprintjs_flutter/table.png';
import navbar from '~/assets/blueprintjs_flutter/navbar.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const blueprintFlutterProject = {
  title: 'Blueprint Flutter Components',
  description: 'A comprehensive Flutter implementation of the Blueprint.js design system. This open-source library recreates Blueprint\'s core components and design language for Flutter applications, featuring 26+ components with pixel-perfect design fidelity and faithful Blueprint.js interactions.',
  roles: ['Flutter', 'Dart', 'Custom Components', 'Open Source'],
  url: 'https://github.com/julesmeister/blueprintjs_flutter',
  linkLabel: 'View on GitHub',
  backgroundImage: homeDesktop,
  backgroundOptions: {
    srcSet: `${homeDesktop} 1280w, ${homeDesktop} 2560w`,
    width: 1280,
    height: 800,
    opacity: 0.8,
  },
  theme: { primary: '#137cbd', secondary: '#0e5a8a' },
  imageViewer: true,
  sections: [
    {
      id: 'intro',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [60, 20, 40],
      imageOptions: { width: 600, height: 400 },
      imageSizes: '(max-width: 768px) 90vw, 45vw',
      items: [
        {
          stepNumber: 1,
          image: home,
          title: 'Explore Components',
          description: 'Start with our comprehensive library of 26+ Flutter components that faithfully recreate the Blueprint.js design system. Each component maintains pixel-perfect styling and interactions.',
        },
        {
          stepNumber: 2,
          image: cards,
          title: 'Interactive Elements',
          description: 'Build engaging interfaces with interactive cards, buttons, and navigation components. All components support intent-based theming and Flutter best practices.',
        },
        {
          stepNumber: 3,
          image: form1,
          title: 'Form Controls',
          description: 'Create powerful forms with Blueprint\'s signature input fields, checkboxes, radio buttons, and select dropdowns, all with consistent styling and validation states.',
        },
      ],
    },
    {
      id: 'components',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6],
      heading: 'Advanced Components',
      description: 'Blueprint Flutter Components combines faithful design reproduction with Flutter\'s powerful widget system. Each component maintains Blueprint\'s visual identity while following Flutter best practices for state management, animations, and accessibility.',
      imageOptions: { width: 500, height: 350 },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        {
          id: 'dialogs',
          featureNumber: 4,
          image: dialog,
          title: 'Modal Dialogs',
          alt: 'Modal dialogs with perfect header alignment and Blueprint styling',
          description: 'Professional modal dialogs with perfect header alignment, customizable actions, and intent-based styling.',
        },
        {
          id: 'data',
          featureNumber: 5,
          image: table,
          title: 'Data Display',
          alt: 'Data tables with sorting, selection, and perfect alignment',
          description: 'Complex data tables with sorting, selection, tree views, and perfectly aligned headers and cells.',
        },
        {
          id: 'navigation',
          featureNumber: 6,
          image: navbar,
          title: 'Navigation',
          alt: 'Navigation bars with groups, alignments, and Blueprint styling',
          description: 'Professional navigation bars, breadcrumbs, and tabs with groups, alignments, and responsive behavior.',
        },
      ],
    },
    {
      id: 'features',
      type: 'image-text',
      heading: 'Design System Fidelity',
      paragraphs: [
        'This Flutter implementation recreates 26+ Blueprint.js components with faithful design reproduction and proper Flutter architecture. Each component maintains Blueprint\'s visual identity while following Flutter best practices for state management, animations, and widget composition.',
        'Key features include complete Blueprint color palette implementation, intent-based theming (Primary, Success, Warning, Danger), responsive layouts with the 10px grid system, factory methods for convenient component creation, and comprehensive examples with documentation for each component.',
      ],
      imageOptions: { width: 350, height: 750 },
      imageSizes: '(max-width: 768px) 200px, 343px',
      images: [
        { src: colors, alt: 'Blueprint Flutter: Complete color palette and theme system with Blueprint.js fidelity.' },
        { src: table, alt: 'Blueprint Flutter: Data tables with sorting, selection, and perfect alignment.' },
      ],
    },
  ],
};