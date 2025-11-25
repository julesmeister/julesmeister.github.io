// Blueprint Flutter assets
import blueprintFlutterScreenShot from '~/assets/blueprintjs_flutter/home-desktop.png';
import blueprintFlutterScreenShotCards from '~/assets/blueprintjs_flutter/cards.png';

// Orbit and Chill assets
import orbitAndChillScreenShot from '~/assets/orbitandchill/photo_1_2025-08-18_18-13-46.jpg';
import orbitAndChillScreenShot2 from '~/assets/orbitandchill/photo_3_2025-08-18_18-13-46.jpg';

// Orbit and Chill Mobile assets
import orbitAndChillMobileScreenShot from '~/assets/orbitandchill_mobile/natal-chart.jpg';
import orbitAndChillMobileScreenShot2 from '~/assets/orbitandchill_mobile/synastry.jpg';

// Sweldo assets
import sweldoNextron from '~/assets/sweldo-nextron.png';
import sweldoScreenShot from '~/assets/Sweldo-Home-Cut.png';

// Testmanship Web V2 assets
import testmanshipWebV2Hero from '~/assets/testmanship_web_v2/hero.png';
import testmanshipWebV2Dashboard from '~/assets/testmanship_web_v2/student-dashboard.png';

// Other project assets
import airlineCrewSchedulingScreenShot from '~/assets/Airline-Crew-Scheduling.png';
import testmanshipScreenShot from '~/assets/Testmanship-Light.jpg';
import testmanshipScreenShotLarge from '~/assets/Testmanship-Dark.jpg';
import testmanshipScreenShotPlaceholder from '~/assets/Testmanship-Dark.jpg';
import lotelScreenShot from '~/assets/Lotel-Remittance.jpg';
import lotelScreenShot2 from '~/assets/Lotel-Home.jpg';
import lotelScreenShotLarge from '~/assets/Lotel-Remittance.jpg';
import lotelScreenShot2Large from '~/assets/Lotel-Home.jpg';
import lotelScreenShotPlaceholder from '~/assets/Lotel-Remittance.jpg';
import lotelScreenShot2Placeholder from '~/assets/Lotel-Home.jpg';
import cTraderScreenShot from '~/assets/cTrader.png';
import cTraderScreenShotLarge from '~/assets/cTrader.png';
import cTraderScreenShotPlaceholder from '~/assets/cTrader.png';

export const projectsData = [
  {
    id: 'testmanshipwebv2',
    title: 'Testmanship Web V2',
    description:
      'Modern German language learning platform featuring spaced-repetition flashcards, comprehensive writing exercises with 165+ prompts, live voice sessions, and a teacher dashboard for managing students. Built with Next.js 15, TypeScript, and Tailwind CSS 4.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: testmanshipWebV2Hero,
    link: '/projects/testmanshipwebv2',
    featured: true,
    scrollView: {
      modelType: 'laptop',
      alt: 'Testmanship Web V2 German Learning Platform',
      textures: [
        {
          srcSet: `${testmanshipWebV2Hero} 1280w, ${testmanshipWebV2Hero} 2560w`,
          placeholder: testmanshipWebV2Hero,
        },
        {
          srcSet: `${testmanshipWebV2Dashboard} 1280w, ${testmanshipWebV2Dashboard} 2560w`,
          placeholder: testmanshipWebV2Dashboard,
        },
      ],
    },
  },
  {
    id: 'orbitandchillmobile',
    title: 'Orbit and Chill Mobile',
    description:
      'Professional-grade Android astrology app built with Jetpack Compose and Kotlin. Features accurate natal charts with 15 celestial bodies, synastry compatibility analysis, and Matrix of Destiny divination.',
    technologies: ['Jetpack Compose', 'Kotlin', 'Android'],
    image: orbitAndChillMobileScreenShot,
    link: '/projects/orbitandchillmobile',
    featured: true,
    scrollView: {
      modelType: 'phone',
      alt: 'Orbit and Chill Mobile astrology app',
      textures: [
        {
          srcSet: `${orbitAndChillMobileScreenShot} 375w, ${orbitAndChillMobileScreenShot} 750w`,
          placeholder: orbitAndChillMobileScreenShot,
        },
        {
          srcSet: `${orbitAndChillMobileScreenShot2} 375w, ${orbitAndChillMobileScreenShot2} 750w`,
          placeholder: orbitAndChillMobileScreenShot2,
        },
      ],
    },
  },
  {
    id: 'blueprintjs-flutter',
    title: 'Blueprint Flutter Components',
    description:
      'A comprehensive Flutter implementation of the Blueprint.js design system with 26+ components. Features pixel-perfect design fidelity, complete color palette, and faithful Blueprint.js interactions.',
    technologies: ['Flutter', 'Dart', 'Custom Components'],
    image: blueprintFlutterScreenShot,
    link: '/projects/blueprintjs_flutter',
    featured: false,
    // Scroll view specific properties
    scrollView: {
      modelType: 'laptop',
      alt: 'Blueprint Flutter Components library',
      textures: [
        {
          srcSet: `${blueprintFlutterScreenShot} 1280w, ${blueprintFlutterScreenShot} 2560w`,
          placeholder: blueprintFlutterScreenShot,
          sizes: '(max-width: 768px) 80vw, 50vw',
        },
        {
          srcSet: `${blueprintFlutterScreenShotCards} 1280w, ${blueprintFlutterScreenShotCards} 2560w`,
          placeholder: blueprintFlutterScreenShotCards,
          sizes: '(max-width: 768px) 80vw, 50vw',
        },
      ],
    },
  },
  {
    id: 'orbitandchill',
    title: 'Orbit and Chill',
    description:
      'A modern astrology platform combining precise natal chart generation with community engagement. Built with Next.js 15, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'TurboDB'],
    image: orbitAndChillScreenShot,
    link: '/projects/orbitandchill',
    featured: true,
    scrollView: {
      modelType: 'laptop',
      alt: 'Orbit and Chill astrology platform',
      textures: [
        {
          srcSet: `${orbitAndChillScreenShot} 1280w, ${orbitAndChillScreenShot} 2560w`,
          placeholder: orbitAndChillScreenShot,
        },
        {
          srcSet: `${orbitAndChillScreenShot2} 1280w, ${orbitAndChillScreenShot2} 2560w`,
          placeholder: orbitAndChillScreenShot2,
        },
      ],
    },
  },
  {
    id: 'sweldo',
    title: 'Sweldo (Nextron Version)',
    description:
      'The latest version of Sweldo built using Nextron, offering enhanced features and performance.',
    technologies: ['Nextron', 'Electron', 'React'],
    image: sweldoNextron,
    link: '/projects/sweldo',
    scrollView: {
      modelType: 'laptop',
      alt: 'Nextron Sweldo salary system',
      textures: [
        {
          srcSet: `${sweldoNextron} 1280w, ${sweldoNextron} 2560w`,
          placeholder: sweldoNextron,
        },
      ],
    },
  },
  {
    id: 'sweldo-old',
    title: 'Sweldo (Old Version)',
    description:
      "Sweldo stands for Salary in Filipino. It's a web system that allows an excel upload of employees' attendance data to be processed and then displayed in a user-friendly format. The app was built using Flutterflow and Firebase and Supabase.",
    technologies: ['Flutterflow', 'Firebase', 'Supabase'],
    image: sweldoScreenShot,
    link: '/projects/sweldo-old',
    scrollView: {
      modelType: 'laptop',
      alt: 'Old Sweldo salary system',
      textures: [
        {
          srcSet: `${sweldoScreenShot} 1280w, ${sweldoScreenShot} 2560w`,
          placeholder: sweldoScreenShot,
        },
      ],
    },
  },
  {
    id: 'airline',
    title: 'Airline Crew Scheduling',
    description:
      'Airline Crew Scheduling is a Salesforce LWC component designed to help airline companies manage their crew scheduling processes. It allows users to create and manage flight schedules, assign crew members to flights.',
    technologies: ['Salesforce', 'LWC', 'JavaScript'],
    image: airlineCrewSchedulingScreenShot,
    link: '/projects/airlineCrewScheduling',
    scrollView: {
      modelType: 'laptop',
      alt: 'Airline Crew Scheduling',
      textures: [
        {
          srcSet: `${airlineCrewSchedulingScreenShot} 1280w, ${airlineCrewSchedulingScreenShot} 2560w`,
          placeholder: airlineCrewSchedulingScreenShot,
        },
      ],
    },
  },
  {
    id: 'testmanship',
    title: 'Testmanship',
    description:
      'Testmanship is a sophisticated web application designed to help language learners track their writing progress and assess their preparedness across different CEFR (Common European Framework of Reference for Languages) levels.',
    technologies: ['Next.js', 'AI', 'Supabase'],
    image: testmanshipScreenShot,
    link: '/projects/testmanship',
    scrollView: {
      modelType: 'laptop',
      alt: 'Testmanship Language Learning Hub',
      textures: [
        {
          srcSet: `${testmanshipScreenShot} 1280w, ${testmanshipScreenShotLarge} 2560w`,
          placeholder: testmanshipScreenShotPlaceholder,
        },
      ],
    },
  },
  {
    id: 'lotel',
    title: 'Lotel',
    description:
      'Comprehensive hospitality management system for encoding and monitoring various aspects of hotel operations, including sales, billing, payroll, and key performance metrics',
    technologies: ['Flutterflow', 'Firebase'],
    image: lotelScreenShot,
    link: '/projects/lotel',
    scrollView: {
      modelType: 'phone',
      alt: 'Lotel hospitality management system',
      textures: [
        {
          srcSet: `${lotelScreenShot} 375w, ${lotelScreenShotLarge} 750w`,
          placeholder: lotelScreenShotPlaceholder,
        },
        {
          srcSet: `${lotelScreenShot2} 375w, ${lotelScreenShot2Large} 750w`,
          placeholder: lotelScreenShot2Placeholder,
        },
      ],
    },
  },
  {
    id: 'ctrader',
    title: 'Enhanced Equity Stop with Cooldown for cTrader',
    description:
      "A sophisticated modification of Acronew's Equity Stop with advanced features and improved UI.",
    technologies: ['C#', 'cTrader', 'Trading'],
    image: cTraderScreenShot,
    link: '/projects/cTrader',
    scrollView: {
      modelType: 'laptop',
      alt: "A sophisticated modification of Acronew's Equity Stop with advanced features and improved UI.",
      textures: [
        {
          srcSet: `${cTraderScreenShot} 800w, ${cTraderScreenShotLarge} 1920w`,
          placeholder: cTraderScreenShotPlaceholder,
        },
      ],
    },
  },
];
