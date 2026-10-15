// @ts-check
import dashboard from '~/assets/deutschcraft/dashboard.png';
import flashcardCategories from '~/assets/deutschcraft/flashcard-categories.png';
import flashcardPractice from '~/assets/deutschcraft/flashcard-practice.png';
import writingExercises from '~/assets/deutschcraft/writing-exercises.png';
import writingInterface from '~/assets/deutschcraft/writing-interface.png';
import grammarPractice from '~/assets/deutschcraft/grammar-practice.png';
import answerHub from '~/assets/deutschcraft/answer-hub.png';
import exerciseDetail from '~/assets/deutschcraft/exercise-detail.png';
import socialFeed from '~/assets/deutschcraft/social-feed.png';
import liveClassroom from '~/assets/deutschcraft/live-classroom.png';
import pacmanGame from '~/assets/deutschcraft/pacman-game.png';
import achievements from '~/assets/deutschcraft/achievements.png';
import dictionary from '~/assets/deutschcraft/dictionary.png';
import syllabus from '~/assets/deutschcraft/syllabus.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const deutschCraftProject = {
  title: 'DeutschCraft',
  description: 'A comprehensive German language learning platform featuring spaced-repetition flashcards across 25+ vocabulary categories, writing exercises with CEFR-leveled prompts, grammar practice with translation drills, an Answer Hub for Schritte textbook exercises, live voice classrooms, social feed with peer corrections, and gamified Der Die Das practice with a Pacman-style game.',
  roles: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
  url: 'https://github.com/julesmeister/deutschcraft',
  linkLabel: 'View on GitHub',
  backgroundImage: dashboard,
  backgroundOptions: {
    srcSet: `${dashboard} 1280w, ${dashboard} 2560w`,
    width: 1280,
    height: 800,
    opacity: 0.8,
  },
  theme: { primary: '#e6a817', secondary: '#d4940f' },
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
          image: dashboard,
          title: 'Student Dashboard',
          description: 'Central hub showing 3,375+ words learned, mastery stats, weekly progress charts, daily goals, and quick access to Practice, Write, Review, and Social sections. Quick Practice with fill-in-the-blank exercises keeps vocabulary sharp.',
        },
        {
          stepNumber: 2,
          image: flashcardCategories,
          title: 'Vocabulary Categories',
          description: 'B1-level vocabulary organized into 25+ categories including Abstract Concepts, Adjectives, Adverbs, General Verbs, Separable Verbs, and more. Each card shows due count, total cards, and completion status with color-coded progress bars.',
        },
        {
          stepNumber: 3,
          image: flashcardPractice,
          title: 'Flashcard Practice',
          description: 'Interactive spaced-repetition flashcards with English-to-German translation. Rate knowledge as Forgotten, Hard, Good, Easy, or Expert. Bookmark words, track mastery percentage, and navigate with keyboard shortcuts.',
        },
      ],
    },
    {
      id: 'features',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8],
      heading: 'Comprehensive Learning Suite',
      description: 'DeutschCraft combines proven language learning methodologies with modern web technologies. From spaced-repetition flashcards and grammar drills to live voice classrooms and gamified article practice, every feature is designed to accelerate German fluency across all CEFR levels from A1 to C2.',
      imageOptions: { width: 500, height: 350 },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        { featureNumber: 4, image: writingExercises, title: 'Writing Exercises', description: '282 completed exercises across CEFR levels A1-C2 with 92% average score. Choose from Creative Writing, Translation, Email Writing, Letter Writing, and Freestyle. Track recent submissions with review status and word counts.' },
        { featureNumber: 5, image: writingInterface, title: 'Writing Interface', description: 'Rich writing editor with task instructions, grammar focus tags (Perfect tense, Time expressions), vocabulary suggestions, and writing tips. Draft or submit directly with word count tracking and Redemittel reference panel.' },
        { featureNumber: 6, image: grammarPractice, title: 'Grammar Practice', description: 'Interactive grammar drills like "Negation with kein" — translate English sentences to German with instant correctness feedback. Rate difficulty with spaced-repetition controls and progress through 10-question sessions.' },
        { featureNumber: 7, image: answerHub, title: 'Answer Hub', description: 'Practice Schritte International Neu textbook exercises organized by Lektion (1-14) with completion tracking. View exercise counts, progress percentages, and practice all exercises or individual lessons across CEFR levels.' },
        { featureNumber: 8, image: exerciseDetail, title: 'Exercise Detail', description: 'Individual exercise view with audio attachments for listening practice, multiple answer items, "Copy for AI" functionality, discussion threads with batch-mates, and built-in dictionary lookup. Supports audio playback for pronunciation.' },
        { featureNumber: 9, image: socialFeed, title: 'Social Feed', description: 'Community practice space where students post in German and receive peer corrections. Teacher dashboard shows teaching impact stats, common mistake patterns (article usage, verb conjugation, word order), and suggested topics.' },
        { featureNumber: 10, image: liveClassroom, title: 'Live Classroom', description: 'Real-time voice and video sessions with teacher controls (Mute, Cam, Stop), layout options (Teacher, Gallery, Left, Right), shared writing board, classroom tools (Dice, Groups, Picker, Timer, Score), and exercise/material sharing.' },
        { featureNumber: 11, image: pacmanGame, title: 'Der Die Das Pacman', description: 'Gamified German noun gender learning — control Pacman to eat the correct article (der/die/das) for word endings like -ig, -er, -um. Tracks score, correct/wrong answers, streak, and endings learned with lives system.' },
        { featureNumber: 12, image: achievements, title: 'Learning Progress', description: 'Detailed progress tracking with 3,531 total cards, 2,432 mastered, 81% accuracy. Category breakdown shows completion per topic (Separable Verbs 92%, Adjectives 95%, Technology 100%). Session history with accuracy and duration.' },
      ],
    },
    {
      id: 'dashboard',
      type: 'image-text',
      heading: 'Built for Language Learners',
      paragraphs: [
        'DeutschCraft evolved from Testmanship Web V2 into a full-featured German learning platform. The dictionary provides instant access to 5,862+ German-English translations with bidirectional search. The structured syllabus maps grammar topics, vocabulary themes, and communication skills to the Schritte International Neu textbook series with weekly study schedules.',
        'The platform supports both self-study and teacher-led learning. Teachers can create live voice rooms with shared writing boards, classroom tools, and exercise materials. The social feed enables peer corrections with teaching impact tracking. Firebase powers real-time synchronization across all features with robust offline support.',
      ],
      imageOptions: { width: 350, height: 750 },
      imageSizes: '(max-width: 696px) 200px, 343px',
      imageOffsets: [6, -6],
      images: [
        { src: dictionary, alt: 'DeutschCraft: German-English dictionary with 5,862+ entries, bidirectional search, and detailed translations including conjugations and usage context' },
        { src: syllabus, alt: 'DeutschCraft: Comprehensive German language syllabus from A1 to C2 with grammar topics, vocabulary themes, communication skills, and weekly study schedule mapped to Schritte textbook' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'text',
      heading: 'Modern Tech Stack',
      paragraphs: [
        'Built with Next.js 15 using the App Router for optimal performance and SEO. TypeScript ensures type safety throughout the codebase. Tailwind CSS 4 powers the responsive design with smooth animations via Framer Motion. Firebase provides real-time database synchronization and authentication, while Turso adds local-first database capabilities for the dictionary.',
        'The platform leverages TanStack Query for efficient data fetching, TipTap for the rich text editor, and ApexCharts for analytics visualizations. Live voice sessions use WebRTC for low-latency audio/video. The gamified Der Die Das modes combine Canvas animations with spaced-repetition algorithms for an engaging learning experience.',
      ],
    },
  ],
};