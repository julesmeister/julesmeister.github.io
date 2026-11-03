// @ts-check
import missionDrawer from '~/assets/deutschcraft_chat/1793691868577.png';
import settings from '~/assets/deutschcraft_chat/1793691874009.png';
import progress from '~/assets/deutschcraft_chat/1793691878242.png';
import learningGuidance from '~/assets/deutschcraft_chat/1793691881246.png';
import conversation from '~/assets/deutschcraft_chat/1793691884369.png';
import threads from '~/assets/deutschcraft_chat/1793691888004.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const deutschCraftChatProject = {
  title: 'DeutschCraft Chat',
  description: 'An offline-first Android app for learning German through natural conversations with Emil, a persistent AI companion. Corrections, CEFR assessment, realistic missions, and personalized guidance support the conversation without turning it into a lesson.',
  roles: ['Kotlin', 'Jetpack Compose', 'Room', 'DataStore', 'Hilt', 'Qwen'],
  backgroundImage: threads,
  backgroundOptions: {
    srcSet: `${threads} 473w`,
    width: 473,
    height: 1024,
    opacity: 0.8,
  },
  theme: { primary: '#7fc84a', secondary: '#5e9139' },
  imageViewer: true,
  sections: [
    {
      id: 'conversation',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [50, 30, 60],
      imageOptions: { width: 473, height: 1024 },
      imageSizes: '(max-width: 768px) 90vw, 45vw',
      items: [
        {
          stepNumber: 1,
          image: threads,
          title: 'A Conversation-First Home',
          description: 'Multiple persistent threads, archived chats, and mission suggestions make DeutschCraft feel like a familiar messenger. Learners start with what they want to say, not a lesson queue.',
          alt: 'DeutschCraft Chat thread list with archived conversations and a suggested restaurant mission',
        },
        {
          stepNumber: 2,
          image: conversation,
          title: 'Learn in the Conversation',
          description: 'A natural German exchange stays at the center. Besser corrections preserve the original message and offer a chance to improve it, while reply suggestions keep the conversation moving.',
          alt: 'German chat with an inline correction and actions to improve, get a tip, or skip',
        },
        {
          stepNumber: 3,
          image: missionDrawer,
          title: 'Missions That Fit the Moment',
          description: 'Realistic scenarios guide learners through distinct communication goals. A pull-down mission drawer keeps objectives, CEFR level, progress, and useful vocabulary close without moving the chat.',
          alt: 'Restaurant mission drawer showing ten objectives, current progress, and useful vocabulary',
        },
      ],
    },
    {
      id: 'learning-support',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6],
      heading: 'Support Without Interrupting',
      description: 'Learning systems work quietly around real communication, adapting support to the learner and keeping progress visible over time.',
      imageOptions: { width: 473, height: 1024 },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        {
          featureNumber: 4,
          image: progress,
          title: 'Evidence-Based CEFR Progress',
          description: 'Progress estimates grow from analyzed messages, corrections, and missions. Learners can see their current level, readiness for the next level, and the skills shaping that assessment.',
        },
        {
          featureNumber: 5,
          image: learningGuidance,
          title: 'Personalized Guidance',
          description: 'Contextual guidance offers a next step, useful phrases, vocabulary, and a German example while the conversation remains visible underneath.',
        },
        {
          featureNumber: 6,
          image: settings,
          title: 'Learner-Controlled Support',
          description: 'Persistent settings cover appearance, text size, reduced motion, mission hints, example phrases, and target vocabulary so learners can shape how much assistance they see.',
        },
      ],
    },
    {
      id: 'offline-first',
      type: 'text',
      heading: 'Local-First Android Architecture',
      paragraphs: [
        'Built with Kotlin, Jetpack Compose, Material 3, Room, DataStore, Hilt, coroutines, and StateFlow. Room is the source of truth for conversations, messages, corrections, assessments, missions, vocabulary, and progress, so saved learning history remains available offline.',
        'Qwen provides conversational AI through an AI gateway; credentials are kept out of the Android app. The design keeps cloud services optional for normal app functionality and gives learners control of their locally stored data.',
      ],
    },
  ],
};