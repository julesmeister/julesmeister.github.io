// Blueprint Flutter assets
import blueprintFlutterScreenShot from '~/assets/blueprintjs_flutter/home-desktop.png';
import blueprintFlutterScreenShotCards from '~/assets/blueprintjs_flutter/cards.png';

// Orbit and Chill assets
import orbitAndChillScreenShot from '~/assets/orbitandchill/photo_1_2025-08-18_18-13-46.jpg';
import orbitAndChillScreenShot2 from '~/assets/orbitandchill/photo_3_2025-08-18_18-13-46.jpg';

// Orbit and Chill Mobile assets
import orbitAndChillMobileScreenShot from '~/assets/orbitandchill_mobile/natal-chart.jpg';
import orbitAndChillMobileScreenShot2 from '~/assets/orbitandchill_mobile/synastry-compatibility.jpg';

// Sweldo assets
import sweldoNextron from '~/assets/sweldo-nextron.png';
import sweldoScreenShot from '~/assets/Sweldo-Home-Cut.png';

// DeutschCraft assets
import deutschcraftDashboard from '~/assets/deutschcraft/dashboard.png';
import deutschcraftFlashcards from '~/assets/deutschcraft/flashcard-categories.png';

// Lotel React Native assets
import lotelReactNativeSalesDashboard from '~/assets/lotel_react_native/sales-dashboard.jpg';
import lotelReactNativeRoomBooking from '~/assets/lotel_react_native/room-booking.jpg';

// Lotel Kotlin assets
import lotelKotlinHomeDashboard from '~/assets/lotel_kotlin/home-dashboard.jpg';
import lotelKotlinMetrics from '~/assets/lotel_kotlin/metrics-dashboard.jpg';

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
    id: 'deutschcraft',
    title: 'DeutschCraft',
    description:
      'Comprehensive German language learning platform with spaced-repetition flashcards across 25+ categories, writing exercises with CEFR-leveled prompts, grammar drills, Answer Hub for Schritte textbook exercises, live voice classrooms, social feed with peer corrections, and gamified Der Die Das practice.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: deutschcraftDashboard,
    link: '/projects/deutschcraft',
    featured: true,
    scrollView: {
      modelType: 'laptop',
      alt: 'DeutschCraft German Learning Platform',
      textures: [
        {
          srcSet: `${deutschcraftDashboard} 1280w, ${deutschcraftDashboard} 2560w`,
          placeholder: deutschcraftDashboard,
        },
        {
          srcSet: `${deutschcraftFlashcards} 1280w, ${deutschcraftFlashcards} 2560w`,
          placeholder: deutschcraftFlashcards,
        },
      ],
    },
  },
  {
    id: 'orbitandchillmobile',
    title: 'Orbit and Chill Mobile',
    description:
      'Professional-grade Android astrology app built with Jetpack Compose and Kotlin. Features natal charts with transit navigation, synastry compatibility, Matrix of Destiny, Human Design bodygraph, annual profections, planetary hours, electional astrology, and moon phase tracking.',
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
    featured: false,
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
    id: 'lotelkotlin',
    title: 'Lotel Kotlin',
    description:
      'Native Android rebuild of the Lotel hotel management system using Kotlin and Jetpack Compose. Eliminates JavaScript bridge overhead for instant startup, smooth animations, and efficient memory management. Features financial metrics, room booking, transaction tracking, remittance management, and payroll with Material Design 3.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android'],
    image: lotelKotlinHomeDashboard,
    link: '/projects/lotelkotlin',
    featured: true,
    scrollView: {
      modelType: 'phone',
      alt: 'Lotel Kotlin native Android hotel management system',
      textures: [
        {
          srcSet: `${lotelKotlinHomeDashboard} 375w, ${lotelKotlinHomeDashboard} 750w`,
          placeholder: lotelKotlinHomeDashboard,
        },
        {
          srcSet: `${lotelKotlinMetrics} 375w, ${lotelKotlinMetrics} 750w`,
          placeholder: lotelKotlinMetrics,
        },
      ],
    },
  },
  {
    id: 'lotelreactnative',
    title: 'Lotel React Native',
    description:
      'Hotel management system built with React Native and Expo. Featured sales dashboard with occupancy metrics, handymen payment tracking, grocery profitability analytics, remittance management, beddings inventory, maintenance issue tracking, and room booking management. Now superseded by the native Kotlin version for better performance.',
    technologies: ['React Native', 'Expo', 'Firebase'],
    image: lotelReactNativeSalesDashboard,
    link: '/projects/lotelreactnative',
    featured: false,
    scrollView: {
      modelType: 'phone',
      alt: 'Lotel React Native hotel management system',
      textures: [
        {
          srcSet: `${lotelReactNativeSalesDashboard} 375w, ${lotelReactNativeSalesDashboard} 750w`,
          placeholder: lotelReactNativeSalesDashboard,
        },
        {
          srcSet: `${lotelReactNativeRoomBooking} 375w, ${lotelReactNativeRoomBooking} 750w`,
          placeholder: lotelReactNativeRoomBooking,
        },
      ],
    },
  },
  {
    id: 'lotel',
    title: 'Lotel (Flutterflow Version)',
    description:
      'Original hotel management system built with Flutterflow and Firebase. This version has been successfully running in production for over a year. Now superseded by the React Native version with enhanced features and modern UI.',
    technologies: ['Flutterflow', 'Firebase'],
    image: lotelScreenShot,
    link: '/projects/lotel',
    scrollView: {
      modelType: 'phone',
      alt: 'Lotel Flutterflow version',
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
