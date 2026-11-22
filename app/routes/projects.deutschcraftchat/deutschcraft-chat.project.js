// @ts-check
import missionDrawer from '~/assets/deutschcraft_chat/1793691868577.png';
import settings from '~/assets/deutschcraft_chat/1793691874009.png';
import progress from '~/assets/deutschcraft_chat/1793691878242.png';
import learningGuidance from '~/assets/deutschcraft_chat/1793691881246.png';
import conversation from '~/assets/deutschcraft_chat/1793691884369.png';
import threads from '~/assets/deutschcraft_chat/1793691888004.png';

import systemArchitecture from '~/assets/deutschcraft_chat/system-architecture.png';
import offlineFirstSync from '~/assets/deutschcraft_chat/offline-first-sync.png';
import missionSystem from '~/assets/deutschcraft_chat/mission-system.png';
import projectStructure from '~/assets/deutschcraft_chat/project-structure.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const deutschCraftChatProject = {
  title: 'DeutschCraft',
  description:
    'An offline-first native Android application for learning German through natural AI conversation. DeutschCraft combines contextual corrections, CEFR assessment, adaptive learning, conversation-driven missions, and persistent learner progress, with Room as the operational source of truth and authenticated AWS synchronization for cross-device continuity.',

  roles: [
    'Kotlin',
    'Jetpack Compose',
    'Room',
    'WorkManager',
    'Hilt',
    'AWS',
    'Qwen',
  ],

  url: 'https://github.com/julesmeister/deutshcraft-chat',
  linkLabel: 'View Source on GitHub',

  backgroundImage: threads,

  backgroundOptions: {
    srcSet: `${threads} 473w`,
    width: 473,
    height: 1024,
    opacity: 0.8,
  },

  theme: {
    primary: '#7fc84a',
    secondary: '#5e9139',
  },

  imageViewer: true,

  sections: [
    {
      id: 'conversation',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [50, 30, 60],

      imageOptions: {
        width: 473,
        height: 1024,
      },

      imageSizes: '(max-width: 768px) 90vw, 45vw',

      items: [
        {
          stepNumber: 1,
          image: threads,
          title: 'A Conversation-First Home',
          description:
            'Multiple persistent threads, archived chats, and adaptive mission suggestions make DeutschCraft feel like a familiar messenger. Learners begin with what they want to communicate rather than working through a fixed lesson queue.',
          alt:
            'DeutschCraft conversation list with persistent threads and a suggested German mission',
        },
        {
          stepNumber: 2,
          image: conversation,
          title: 'Learning Inside the Conversation',
          description:
            'Natural German conversation stays at the center of the experience. Besser corrections, contextual actions, reply suggestions, and adaptive support help learners improve without replacing communication with isolated exercises.',
          alt:
            'German conversation in DeutschCraft with contextual correction and learning controls',
        },
        {
          stepNumber: 3,
          image: missionDrawer,
          title: 'Conversation-Driven Missions',
          description:
            'Realistic scenarios turn natural conversation into purposeful practice. The mission interface keeps objectives, CEFR level, progress, hints, vocabulary, grammar support, and example phrases available without pushing the conversation aside.',
          alt:
            'DeutschCraft mission interface displaying objectives, progress, CEFR information, and contextual learning support',
        },
      ],
    },

    {
      id: 'learning-support',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6],

      heading: 'Support Without Interrupting',

      description:
        'DeutschCraft builds learning support around communication. Progress, contextual guidance, and learner preferences remain visible while conversation stays at the center of the experience.',

      imageOptions: {
        width: 473,
        height: 1024,
      },

      imageSizes: '(max-width: 768px) 85vw, 40vw',

      items: [
        {
          featureNumber: 4,
          image: progress,
          title: 'Evidence-Based CEFR Progress',
          description:
            'Progress estimates grow from observed conversations, corrections, missions, and accumulated learning evidence. Learners can see their current CEFR level, readiness for progression, and the skills shaping that assessment.',
          alt:
            'DeutschCraft progress dashboard showing CEFR level, readiness, learning focus, and evidence',
        },
        {
          featureNumber: 5,
          image: learningGuidance,
          title: 'Personalized Guidance',
          description:
            'Adaptive guidance identifies useful next steps and can surface phrases, vocabulary, examples, and mission support while preserving the surrounding conversation context.',
          alt:
            'DeutschCraft conversation displaying contextual and adaptive learning guidance',
        },
        {
          featureNumber: 6,
          image: settings,
          title: 'Learner-Controlled Support',
          description:
            'Persistent settings cover appearance, text size, reduced motion, mission hints, example phrases, target vocabulary, and progress language, giving learners control over how much support appears around the conversation.',
          alt:
            'DeutschCraft settings for appearance, accessibility, and learning-support preferences',
        },
      ],
    },

    {
      id: 'system-architecture',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6],

      heading: 'Engineered Beyond the Chat Interface',

      description:
        'DeutschCraft combines reactive Android architecture, local-first persistence, asynchronous synchronization, authenticated AWS infrastructure, and protected AI access. The diagrams below show how those responsibilities fit together.',

      items: [
        {
          featureNumber: 7,
          image: systemArchitecture,
          title: 'End-to-End System Architecture',
          description:
            'Jetpack Compose observes reactive application state through ViewModels, StateFlow, repositories, and Room. Background synchronization follows a separate WorkManager path through Retrofit and authenticated AWS services, while Qwen remains isolated behind the backend boundary.',
          alt:
            'DeutschCraft system architecture showing Jetpack Compose, ViewModels, StateFlow, repositories, Room, WorkManager, API Gateway, Lambda, DynamoDB, Cognito, and Qwen',
        },
        {
          featureNumber: 8,
          image: offlineFirstSync,
          title: 'Local Commit First, Cloud Sync Second',
          description:
            'User changes are committed to Room before synchronization is requested. The interface can react immediately to local data while WorkManager handles immediate and periodic synchronization, batched uploads, incremental downloads, retries, dirty states, and deletion tombstones.',
          alt:
            'DeutschCraft offline-first synchronization architecture showing local Room commits, reactive UI updates, WorkManager, incremental synchronization, batching, retries, and tombstones',
        },
        {
          featureNumber: 9,
          image: missionSystem,
          title: 'Stateful Mission Continuity',
          description:
            'Conversation missions combine a mission instance, generated template, objectives, and objective progress. Self-contained mission snapshots preserve enough state to reconstruct generated or branched missions on another authenticated device.',
          alt:
            'DeutschCraft mission architecture showing conversation-driven objectives, mission domain state, snapshots, and cross-device restoration',
        },
      ],
    },

    {
      id: 'offline-first',
      type: 'text',
      heading: 'Offline First by Design',

      paragraphs: [
        'Room is the operational source of truth. Conversations, messages, corrections, assessments, missions, objective progress, vocabulary, and other learner state are persisted locally before cloud synchronization is attempted. Normal local application behavior therefore does not depend on continuous backend availability.',

        'Synchronization acts as continuity infrastructure rather than the primary application data path. WorkManager coordinates immediate and periodic background synchronization, while incremental cursors avoid repeatedly downloading unchanged history and bounded upload batches keep larger synchronization workloads manageable.',

        'Deletion is also treated as synchronizable state. Tombstones allow another device to learn that data was intentionally removed instead of accidentally restoring an older copy.',
      ],
    },

    {
      id: 'mission-architecture',
      type: 'text',
      heading: 'More Than Message Backup',

      paragraphs: [
        'Mission synchronization illustrates why DeutschCraft requires more than simple chat backup. A generated mission can contain a scenario, learner and assistant roles, CEFR difficulty, ordered objectives, completion evidence, confidence values, and progress that did not previously exist on another installation.',

        'DeutschCraft therefore packages generated mission state into self-contained snapshots. A receiving device can reconstruct the same mission definition and completed objectives rather than assuming the generated template already exists locally.',

        'This provides the foundation for continuing partially completed learning experiences across authenticated devices while preserving Room as each device’s local working source of truth.',
      ],
    },

    {
      id: 'project-structure',
      type: 'features',
      layout: 'alternating',
      delays: [0.2],

      heading: 'Feature-Oriented Android Codebase',

      description:
        'The Android source is organized around product domains while shared infrastructure stays centralized. This keeps conversation, learning, authentication, and synchronization responsibilities easier to navigate as the application grows.',

      items: [
        {
          featureNumber: 10,
          image: projectStructure,
          title: 'Organized Around Product Responsibilities',
          description:
            'Application-level navigation lives under app, shared database, networking, DataStore, dependency injection, and CEFR foundations live under core, while product behavior is grouped into feature packages such as chat, mission, assessment, Besser, adaptive learning, progress, authentication, and synchronization.',
          alt:
            'DeutschCraft Android project structure showing application, core infrastructure, conversation features, learning features, and platform services',
        },
      ],
    },

    {
      id: 'engineering-decisions',
      type: 'text',
      heading: 'Designed for Failure, Not Just the Happy Path',

      paragraphs: [
        'A temporary backend failure should delay synchronization, not destroy an interaction. Local writes are committed first, the Compose interface observes persisted state reactively, and background work can retry when connectivity becomes available.',

        'Cloud identity comes from the authenticated Cognito session rather than an arbitrary user identifier supplied by Android. AI provider credentials also remain outside the APK, with protected requests passing through API Gateway and Lambda before reaching Qwen.',

        'These boundaries are deliberate: Room owns the local experience, WorkManager owns deferred synchronization, Cognito owns authenticated identity, AWS provides continuity, and the AI provider remains behind the backend boundary.',
      ],
    },

    {
      id: 'current-focus',
      type: 'text',
      heading: 'Current Engineering Focus',

      paragraphs: [
        'The current synchronization milestone is complete cross-device mission continuity: start or branch a mission on one device, complete part of its objectives, synchronize the resulting state, restore that same generated mission on another authenticated device, continue it there, and converge the resulting progress back to the original device.',

        'The broader direction is to extend the same continuity model beyond conversations and missions into CEFR progress, assessment evidence, activity and streak data, adaptive-learning state, Besser mastery, marked phrases, and appropriate learner settings.',
      ],
    },
  ],
};