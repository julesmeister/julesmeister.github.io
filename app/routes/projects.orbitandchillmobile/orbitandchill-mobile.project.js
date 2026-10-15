// @ts-check
import natalChart from '~/assets/orbitandchill_mobile/natal-chart.jpg';
import aspects from '~/assets/orbitandchill_mobile/aspects.jpg';
import qualities from '~/assets/orbitandchill_mobile/qualities.jpg';
import synastryChart from '~/assets/orbitandchill_mobile/synastry-chart.jpg';
import synastryCompatibility from '~/assets/orbitandchill_mobile/synastry-compatibility.jpg';
import matrix from '~/assets/orbitandchill_mobile/matrix.jpg';
import humanDesign from '~/assets/orbitandchill_mobile/human-design.jpg';
import lifeStory from '~/assets/orbitandchill_mobile/life-story.jpg';
import profections from '~/assets/orbitandchill_mobile/profections.jpg';
import moonMagic from '~/assets/orbitandchill_mobile/moon-magic.jpg';
import moonTransits from '~/assets/orbitandchill_mobile/moon-transits.jpg';
import electional from '~/assets/orbitandchill_mobile/electional.jpg';
import planetaryHours from '~/assets/orbitandchill_mobile/planetary-hours.jpg';
import persons from '~/assets/orbitandchill_mobile/persons.jpg';
import timeTab from '~/assets/orbitandchill_mobile/time-tab.jpg';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const orbitAndChillMobileProject = {
  title: 'Orbit and Chill Mobile',
  description: 'A professional-grade Android astrology app built with Jetpack Compose and Kotlin. Features accurate natal charts with 15 celestial bodies, synastry compatibility analysis, Matrix of Destiny divination, Human Design bodygraph, annual profections, planetary hours, electional astrology, and real-time moon phase tracking.',
  roles: ['Jetpack Compose', 'Kotlin', 'Android', 'Astrology'],
  url: 'https://orbitandchill.com',
  linkLabel: 'Visit website',
  secondaryUrl: 'https://github.com/julesmeister/Orbit-and-Chill-Mobile',
  secondaryLinkLabel: 'View on Github',
  backgroundImage: natalChart,
  backgroundOptions: {
    srcSet: `${natalChart} 800w, ${natalChart} 1600w`,
    width: 800,
    height: 1600,
    opacity: 0.8,
  },
  theme: { primary: '#8b5cf6', secondary: '#7c3aed' },
  imageViewer: true,
  sections: [
    {
      id: 'intro',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [55, 25, 45],
      imageOptions: { width: 400, height: 800 },
      imageSizes: '(max-width: 768px) 90vw, 45vw',
      items: [
        {
          stepNumber: 1,
          image: natalChart,
          title: 'Natal Chart & Transits',
          description: 'Full birth chart with inner ring (natal positions) and outer ring (current transits). Transit Navigator lets you scrub through time — 24 hours to 20 years — to see how planets move. Solar Return jumps to your birthday chart instantly.',
        },
        {
          stepNumber: 2,
          image: qualities,
          title: 'Planet Placements',
          description: 'Every planet listed with zodiac sign, exact degree, house position, and dignity status (Exalted, Domicile, Detriment, Fall). Color-coded rows make it easy to spot strengths and challenges at a glance.',
        },
        {
          stepNumber: 3,
          image: aspects,
          title: 'Aspects & Filters',
          description: 'Interactive aspect chart showing Conjunctions, Oppositions, Trines, Squares, and Sextiles with counts. Filter by any planet to isolate its connections. Toggle between Celestial and Matrix aspect views.',
        },
      ],
    },
    {
      id: 'features',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2],
      heading: 'Complete Astrology Toolkit',
      description: 'Beyond natal charts, Orbit and Chill Mobile offers a comprehensive suite of astrological tools. From relationship compatibility and life path readings to timing tools and mystical systems like Matrix of Destiny and Human Design — everything loads instantly with beautiful visualizations optimized for Android phones.',
      imageOptions: { width: 400, height: 800 },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        { featureNumber: 4, image: synastryCompatibility, title: 'Synastry Compatibility', description: 'Compare two birth charts with an overall compatibility percentage. Add meeting info for electional insights. Toggle between Compatibility overview and detailed Aspects analysis to understand relationship dynamics.' },
        { featureNumber: 5, image: synastryChart, title: 'Synastry Aspects', description: 'Dual-ring synastry chart overlaying two natal charts. Filter aspects by planet (Sun through Pluto) and aspect type. See exactly how your planets interact with another person\'s chart for deep relationship insights.' },
        { featureNumber: 6, image: matrix, title: 'Matrix of Destiny', description: 'Mystical divination system using 22 tarot arcana mapped to your birth date. Tap any of the 33 numbered circles to reveal life path meanings — talents, challenges, karma, and spiritual purpose arranged in an intricate geometric pattern.' },
        { featureNumber: 7, image: humanDesign, title: 'Human Design', description: 'Complete bodygraph showing defined and undefined centers, gates, and channels. Design (unconscious) and Personality (conscious) columns display planetary positions with line numbers. Visual body silhouette maps energy flow.' },
        { featureNumber: 8, image: lifeStory, title: 'Life Story', description: 'Deep interpretations of your chart ruler and key placements. "Your Life Direction" reveals how Mercury in House 6 as Chart Ruler (Gemini Rising) shapes your path toward service, health, and daily routines. Written in plain English, not jargon.' },
        { featureNumber: 9, image: profections, title: 'Annual Profections', description: 'Track your current profection year showing profected sign, house, and rising sign. Year Progress bar shows where you are in the cycle. Time Lord reveals which planet rules your year. Full 12-year profection cycle at a glance.' },
        { featureNumber: 10, image: moonMagic, title: 'Moon Phase Magic', description: 'Current moon phase with illumination percentage and zodiac sign. Correspondences tab reveals magical associations for each phase — from New Moon (setting intentions) through Full Moon (manifestation) and beyond.' },
        { featureNumber: 11, image: moonTransits, title: 'Moon Sign Transits', description: 'Upcoming moon sign changes with exact dates and times. Track when the Moon moves through Aquarius, Pisces, Aries, and beyond. Calendar view for planning activities aligned with lunar energy.' },
        { featureNumber: 12, image: electional, title: 'Electional Astrology', description: 'Find the perfect timing for important life events. Choose your goal — Launch Something, Career Move, Romance, Sign Contract, Real Estate, Medical, Travel, Creative Work, Social Event — and get optimal timing based on planetary transits.' },
        { featureNumber: 13, image: planetaryHours, title: 'Planetary Hours', description: 'Traditional Chaldean planetary hour calculator showing current ruling planet with countdown timer. Sunrise/sunset times, day ruler, and complete hour-by-hour schedule with planet meanings for timing decisions.' },
        { featureNumber: 14, image: persons, title: 'Persons Management', description: 'Save multiple birth profiles with names, dates, and exact birth times. Alphabetically organized with quick-add button. Switch between saved persons to instantly view any chart, compare synastry, or check compatibility.' },
      ],
    },
    {
      id: 'advanced',
      type: 'image-text',
      heading: 'Built Native for Android',
      paragraphs: [
        'The app is built with Jetpack Compose, delivering that smooth, modern Android feel. Charts render instantly using a custom engine rebuilt from scratch — 90% faster than the previous version. All astronomical calculations match professional software accuracy with 15 celestial bodies tracked.',
        'Over 700 interpretations written in plain English cover natal placements, aspects, life story narratives, and Matrix of Destiny meanings. Human Design bodygraph calculations include gates, channels, and defined/undefined centers. Planetary hours follow the traditional Chaldean order with real-time countdown timers.',
      ],
      imageOptions: { width: 350, height: 750 },
      imageSizes: '(max-width: 696px) 200px, 343px',
      images: [
        { src: timeTab, alt: 'Orbit and Chill Mobile: Time tab showing planetary hours overview with current Mercury hour, electional astrology access, and 13 saved persons' },
        { src: profections, alt: 'Orbit and Chill Mobile: Annual profections showing Age 0 in 1st profection year with Capricorn rising, Saturn as Time Lord, and 12-year cycle overview' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'text',
      heading: 'Native Android Stack',
      paragraphs: [
        'Built with Kotlin and Jetpack Compose for a fully native Android experience. The custom chart rendering engine uses Canvas APIs for pixel-perfect astrological wheels with smooth pinch-to-zoom and rotation. Kotlin coroutines handle complex astronomical calculations off the main thread for a consistently smooth 60fps UI.',
        'The app supports offline usage with pre-computed ephemeris data for accurate planetary positions. Material Design 3 theming provides a cohesive purple-accented look across all screens. Navigation between the five main tabs — Chart, Persons, Moon, Synastry, and Time — uses Compose Navigation with fluid shared element transitions.',
      ],
    },
  ],
};