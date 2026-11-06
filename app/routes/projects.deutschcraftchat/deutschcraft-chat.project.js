// @ts-check
import missionDrawer from '~/assets/deutschcraft_chat/1793691868577.png';
import settings from '~/assets/deutschcraft_chat/1793691874009.png';
import progress from '~/assets/deutschcraft_chat/1793691878242.png';
import learningGuidance from '~/assets/deutschcraft_chat/1793691881246.png';
import conversation from '~/assets/deutschcraft_chat/1793691884369.png';
import threads from '~/assets/deutschcraft_chat/1793691888004.png';
import dynamoDbSync from '~/assets/deutschcraft_chat/dynamo.png';
import lambdaSync from '~/assets/deutschcraft_chat/lambda.png';
import authentication from '~/assets/deutschcraft_chat/auth.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const deutschCraftChatProject = {
  title: 'DeutschCraft Chat',
  description:
    'An offline-first Android language-learning app built around natural German conversation with Emil, a persistent AI companion. Room remains the local source of truth while authenticated AWS synchronization provides cloud backup and cross-device continuity for conversations, messages, and mission progress.',
  roles: [
    'Kotlin',
    'Jetpack Compose',
    'Room',
    'WorkManager',
    'Hilt',
    'AWS',
    'Qwen',
  ],
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
            'Multiple persistent threads, archived chats, and adaptive mission suggestions make DeutschCraft feel like a familiar messenger. Learners start with what they want to say, not a lesson queue.',
          alt:
            'DeutschCraft thread list with persistent conversations and a suggested German mission',
        },
        {
          stepNumber: 2,
          image: conversation,
          title: 'Learn in the Conversation',
          description:
            'Natural German conversation stays at the center. Besser corrections, contextual actions, reply suggestions, and adaptive support help learners improve without replacing conversation with exercises.',
          alt:
            'German conversation in DeutschCraft with contextual correction and learning controls',
        },
        {
          stepNumber: 3,
          image: missionDrawer,
          title: 'Missions That Fit the Moment',
          description:
            'Realistic scenarios turn conversation into purposeful practice. A pull-down mission drawer keeps objectives, CEFR level, progress, hints, vocabulary, grammar support, and examples close without pushing the conversation away.',
          alt:
            'DeutschCraft mission drawer displaying objectives, progress, CEFR information, and learning support',
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
        'Learning systems work quietly around real communication, adapting support to the learner while keeping progress and control visible.',
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
            'Progress estimates grow from analyzed conversations, corrections, missions, and learning evidence. Learners can see their current CEFR level, readiness for the next level, and the skills shaping that assessment.',
        },
        {
          featureNumber: 5,
          image: learningGuidance,
          title: 'Personalized Guidance',
          description:
            'Contextual guidance provides a next step, useful phrases, vocabulary, examples, and mission support while the conversation remains visible underneath.',
        },
        {
          featureNumber: 6,
          image: settings,
          title: 'Learner-Controlled Support',
          description:
            'Persistent settings cover appearance, text size, reduced motion, mission hints, example phrases, target vocabulary, and progress language so learners control how much assistance they see.',
        },
      ],
    },
    {
      id: 'cloud-architecture',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6],
      heading: 'Offline First, Cloud Connected',
      description:
        'DeutschCraft keeps local Room data authoritative while layering authenticated AWS synchronization on top for backup, restoration, and cross-device continuity.',
      items: [
        {
          featureNumber: 7,
          image: authentication,
          title: 'Authenticated Cloud Access',
          description:
            'Account-backed access supports Google sign-in and protected cloud services. Authentication enables synchronized learning history without making cloud connectivity a requirement for normal local use.',
          alt:
            'DeutschCraft authentication screen with email and password fields and Google sign-in',
        },
        {
          featureNumber: 8,
          image: lambdaSync,
          title: 'A Purpose-Built Sync Backend',
          description:
            'A dedicated AWS Lambda synchronization service coordinates DynamoDB persistence, validates supported entity types, limits uploads to 100 changes per request, and supports incremental cloud downloads.',
          alt:
            'AWS Lambda editor showing the deployed DeutschCraft synchronization service',
        },
        {
          featureNumber: 9,
          image: dynamoDbSync,
          title: 'Persistent Cross-Device State',
          description:
            'DynamoDB stores authenticated cloud state for conversations, messages, and conversation missions. Mission snapshots preserve generated templates, objectives, and completion progress instead of reducing synchronization to simple chat backup.',
          alt:
            'AWS DynamoDB deutschcraft-sync table containing synchronized DeutschCraft records and payload data',
        },
      ],
    },
    {
      id: 'offline-first',
      type: 'text',
      heading: 'Local-First Android Architecture',
      paragraphs: [
        'Built with Kotlin, Jetpack Compose, Material 3, Room, DataStore, Hilt, coroutines, StateFlow, and WorkManager. Room remains the source of truth, so conversations, messages, corrections, assessments, missions, objective progress, vocabulary, and learning state are committed locally before network synchronization is attempted.',
        'Cloud synchronization is layered on top of local persistence rather than replacing it. Immediate and periodic WorkManager jobs upload pending changes in batches of up to 100, acknowledge successful batches independently, and use incremental cursors so unchanged cloud history is not repeatedly downloaded.',
        'Deletion uses synchronized tombstones so stale devices cannot accidentally resurrect removed conversations. Archive and restore state, message changes, and mission lifecycle updates also trigger background synchronization after their Room transactions commit.',
      ],
    },
    {
      id: 'mission-sync',
      type: 'text',
      heading: 'Synchronizing More Than Chat Messages',
      paragraphs: [
        'Conversation missions are synchronized as self-contained snapshots rather than simple foreign-key references. Each cloud mission can carry its generated mission template, objectives, objective completion state, timestamps, completion evidence, and confidence values.',
        'This matters for dynamic mission branching. A generated scenario may only exist on the device that created it, so the synchronization model preserves enough relational state for another installation to reconstruct the mission instead of assuming the template already exists locally.',
        'Mission progress is normalized against a canonical conversation-mission ID during upload and download. This keeps generated branches, completed objectives, and restored objective progress attached to the correct mission across devices.',
      ],
    },
    {
      id: 'engineering',
      type: 'text',
      heading: 'Designed for Failure, Not Just the Happy Path',
      paragraphs: [
        'Network availability never determines whether a learner can save local work. Messages and learning state are written to Room first, while WorkManager retries synchronization when connectivity becomes available.',
        'Large first-time synchronization jobs are split into bounded batches, each successful batch is committed independently, and cursor-based downloads request only newer server state. This keeps synchronization practical as conversation history grows.',
        'The AI provider credential is kept outside the Android application. Protected requests pass through authenticated AWS infrastructure, while cloud ownership is derived from the authenticated account instead of trusting an arbitrary user identifier supplied by the client.',
      ],
    },
  ],
};