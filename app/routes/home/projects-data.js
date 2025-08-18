import orbitAndChillScreenShot from '~/assets/orbitandchill/photo_1_2025-08-18_18-13-46.jpg';
import orbitAndChillScreenShot2 from '~/assets/orbitandchill/photo_3_2025-08-18_18-13-46.jpg';
import sweldoNextron from '~/assets/sweldo-nextron.png';
import sweldoScreenShot from '~/assets/Sweldo-Home-Cut.png';
import airlineCrewSchedulingScreenShot from '~/assets/Airline-Crew-Scheduling.png';
import testmanshipScreenShot from '~/assets/Testmanship-Light.jpg';
import lotelScreenShot from '~/assets/Lotel-Remittance.jpg';
import cTraderScreenShot from '~/assets/cTrader.png';

export const projectsData = [
  {
    id: 'orbitandchill',
    title: 'Orbit and Chill',
    description: 'A modern astrology platform combining precise natal chart generation with community engagement.',
    technologies: ['Next.js', 'TypeScript', 'TurboDB'],
    image: orbitAndChillScreenShot,
    link: '/projects/orbitandchill',
    featured: true
  },
  {
    id: 'sweldo',
    title: 'Sweldo (Nextron)',
    description: 'The latest version of Sweldo built using Nextron, offering enhanced features and performance.',
    technologies: ['Nextron', 'Electron', 'React'],
    image: sweldoNextron,
    link: '/projects/sweldo'
  },
  {
    id: 'sweldo-old',
    title: 'Sweldo (Old Version)',
    description: 'A web system for processing employee attendance data with user-friendly display.',
    technologies: ['Flutterflow', 'Firebase', 'Supabase'],
    image: sweldoScreenShot,
    link: '/projects/sweldo-old'
  },
  {
    id: 'airline',
    title: 'Airline Crew Scheduling',
    description: 'Salesforce LWC component for managing airline crew scheduling processes.',
    technologies: ['Salesforce', 'LWC', 'JavaScript'],
    image: airlineCrewSchedulingScreenShot,
    link: '/projects/airlineCrewScheduling'
  },
  {
    id: 'testmanship',
    title: 'Testmanship',
    description: 'Language learning app for tracking writing progress and CEFR level assessment.',
    technologies: ['Next.js', 'AI', 'Supabase'],
    image: testmanshipScreenShot,
    link: '/projects/testmanship'
  },
  {
    id: 'lotel',
    title: 'Lotel',
    description: 'Comprehensive hospitality management system for hotel operations and analytics.',
    technologies: ['Flutterflow', 'Firebase'],
    image: lotelScreenShot,
    link: '/projects/lotel'
  },
  {
    id: 'ctrader',
    title: 'Enhanced Equity Stop',
    description: 'Advanced trading tool with sophisticated features and improved UI.',
    technologies: ['C#', 'cTrader', 'Trading'],
    image: cTraderScreenShot,
    link: '/projects/cTrader'
  }
];