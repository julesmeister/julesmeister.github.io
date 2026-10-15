// @ts-check
import hero from '~/assets/testmanship_web_v2/hero.png';
import featuresTestimonials from '~/assets/testmanship_web_v2/features-testimonials.png';
import teacherDashboard from '~/assets/testmanship_web_v2/teacher-dashboard.png';
import studentDashboard from '~/assets/testmanship_web_v2/student-dashboard.png';
import flashcards from '~/assets/testmanship_web_v2/flashcards.png';
import flashcardPractice from '~/assets/testmanship_web_v2/flashcard-practice.png';
import writingExercises from '~/assets/testmanship_web_v2/writing-exercises.png';
import writingInterface from '~/assets/testmanship_web_v2/writing-interface.png';
import writingFeedback from '~/assets/testmanship_web_v2/writing-feedback.png';
import germanSyllabus from '~/assets/testmanship_web_v2/german-syllabus.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const testmanshipWebV2Project = {
  title: 'Testmanship Web V2',
  description: 'A modern German language learning platform built with Next.js 15, featuring spaced-repetition flashcards across 24 vocabulary categories, comprehensive writing exercises with 165+ prompts, live voice sessions for real-time practice, and a powerful teacher dashboard for monitoring student progress across CEFR levels A1-C2.',
  roles: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
  url: 'https://github.com/julesmeister/testmanship-web-v2',
  linkLabel: 'View on GitHub',
  backgroundImage: hero,
  backgroundOptions: {
    srcSet: `${hero} 1280w, ${hero} 2560w`,
    width: 1280,
    height: 800,
    opacity: 0.8,
  },
  theme: { primary: '#a855f7', secondary: '#7c3aed' },
  imageViewer: true,
  sections: [
    {
      id: 'intro',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [50, 30, 60],
      imageOptions: { width: 600, height: 400 },
      imageSizes: '(max-width: 768px) 90vw, 45vw',
      items: [
        {
          stepNumber: 1,
          image: studentDashboard,
          title: 'Student Dashboard',
          description: 'Track your learning journey with comprehensive statistics including words learned, current streak, writing exercises completed, and CEFR level progression from A1 to C2.',
        },
        {
          stepNumber: 2,
          image: flashcards,
          title: 'Vocabulary Categories',
          description: 'Access 820+ flashcards organized into 24 categories including adjectives, verbs, family, food, and more. Each category supports all CEFR levels with intelligent spaced-repetition algorithms.',
        },
        {
          stepNumber: 3,
          image: flashcardPractice,
          title: 'Interactive Flashcards',
          description: 'Practice German vocabulary with an intuitive flashcard interface. Click to reveal translations, rate your knowledge level, and let the spaced-repetition algorithm optimize your learning schedule.',
        },
      ],
    },
    {
      id: 'features',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6, 0.8],
      heading: 'Advanced Learning Features',
      description: 'Testmanship Web V2 combines modern web technologies with proven language learning methodologies. The platform features spaced-repetition flashcards, comprehensive writing exercises with teacher feedback, live voice sessions for pronunciation practice, and real-time progress tracking across CEFR levels A1-C2.',
      imageOptions: { width: 500, height: 350 },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        { featureNumber: 4, image: writingExercises, title: 'Writing Exercises', description: '165+ comprehensive writing prompts across all CEFR levels. Practice creative writing, translation, email composition, and more with structured exercises ranging from 12-15 minutes each.' },
        { featureNumber: 5, image: writingInterface, title: 'Rich Text Editor', description: 'Write your German translations with a powerful editor featuring hints, reference answers, and helpful tips. Submit completed work for teacher review and track your progress over time.' },
        { featureNumber: 6, image: writingFeedback, title: 'Teacher Feedback System', description: 'Receive detailed feedback on your writing with overall scores (grammar, vocabulary, coherence), strengths, areas for improvement, and teacher comments. Track your progress with assessment history and approval status.' },
        { featureNumber: 7, image: germanSyllabus, title: 'Structured Curriculum', description: 'Follow a comprehensive German language syllabus from A1-Beginner to upper-intermediate levels. Organized grammar topics, vocabulary themes, and communication skills with estimated study times and progress tracking.' },
      ],
    },
    {
      id: 'dashboard',
      type: 'image-text',
      heading: 'Teacher-Student Collaboration',
      paragraphs: [
        'The platform features a comprehensive teacher dashboard for monitoring student progress, managing assignments, and providing personalized feedback. Teachers can track student activity, review writing submissions, create custom assignments, and message students directly.',
        'Built with Firebase for real-time synchronization, the dashboard provides instant insights into student performance metrics, CEFR level distribution, completion rates, and pending reviews. The responsive design ensures seamless access across all devices.',
      ],
      imageOptions: { width: 350, height: 750 },
      imageSizes: '(max-width: 696px) 200px, 343px',
      imageOffsets: [8, -8],
      images: [
        { src: teacherDashboard, alt: 'Testmanship Web V2: Teacher dashboard showing student management, level distribution, and quick actions for analytics, messaging, and assignment creation' },
        { src: featuresTestimonials, alt: 'Testmanship Web V2: Landing page featuring comprehensive flashcards, writing evaluation, student tracking, and teacher dashboard capabilities' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'text',
      heading: 'Modern Tech Stack',
      paragraphs: [
        'Built with Next.js 15 using the App Router for optimal performance and SEO. TypeScript ensures type safety throughout the codebase. Tailwind CSS 4 powers the beautiful, responsive design with smooth animations via Framer Motion. Firebase provides real-time database synchronization and authentication, while Turso adds local-first database capabilities.',
        'The platform leverages TanStack Query for efficient data fetching, TipTap for the rich text editor, and ApexCharts for analytics visualizations. The design system is inspired by modern SaaS templates with vibrant colors and heavily animated interactions throughout the user experience.',
      ],
    },
  ],
};