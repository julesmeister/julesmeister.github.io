// @ts-check

import answerEditor from '~/assets/sangfroid/answer-editor.png';
import feed from '~/assets/sangfroid/feed.png';
import profile from '~/assets/sangfroid/profile.png';
import progress from '~/assets/sangfroid/progress.png';
import savedQuestions from '~/assets/sangfroid/saved-questions.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const sangfroidProject = {
  title: 'Sangfroid',
  description:
    'An offline-first Android interview-preparation app that turns a candidate’s CV, skills, practice history, and saved revisions into personalized questions, guided answer practice, AI-generated feedback, and measurable progress. A Kotlin and Jetpack Compose client works with a secured Java 21 Spring Boot backend and Qwen to keep AI credentials and evaluation logic outside the mobile application.',
  roles: [
    'Kotlin',
    'Jetpack Compose',
    'Room',
    'Hilt',
    'Java',
    'Spring Boot',
    'AWS',
    'Qwen',
  ],
  backgroundImage: feed,
  backgroundOptions: {
    srcSet: `${feed} 473w`,
    width: 473,
    height: 1024,
    opacity: 0.8,
  },
  theme: {
    primary: '#72EBDD',
    secondary: '#147F75',
  },
  imageViewer: true,
  sections: [
    {
      id: 'practice-loop',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [50, 25, 60],
      imageOptions: {
        width: 473,
        height: 1024,
      },
      imageSizes: '(max-width: 768px) 90vw, 45vw',
      items: [
        {
          id: 'discover-question',
          stepNumber: 1,
          image: feed,
          title: 'Discover a Relevant Question',
          description:
            'The practice feed presents interview questions shaped by category, difficulty, saved skills, CV evidence, and previous performance. Each card explains why the question matters before the candidate begins.',
          alt:
            'Sangfroid practice feed showing a personalized interview question with category, difficulty, and practice controls',
        },
        {
          id: 'build-answer',
          stepNumber: 2,
          image: answerEditor,
          title: 'Build the Answer',
          description:
            'A focused editor supports typed and spoken answers, automatic draft persistence, historical attempts, reusable revisions, and an optional ideal-answer guide that appears as lighter continuation text without replacing the candidate’s own response.',
          alt:
            'Sangfroid answer editor with recording controls, answer input, and ideal-answer guidance',
        },
        {
          id: 'review-feedback',
          stepNumber: 3,
          image: progress,
          title: 'Turn Practice Into Progress',
          description:
            'Submitted attempts become structured evidence. Sangfroid tracks evaluated answers, saved revisions, feedback coverage, recent score movement, question-category performance, and CV-based practice coverage.',
          alt:
            'Sangfroid progress dashboard showing practice statistics, score trends, feedback coverage, and CV insights',
        },
      ],
    },
    {
      id: 'personalized-practice',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6],
      heading: 'A Practice System That Learns From the Candidate',
      description:
        'Sangfroid connects profile evidence, generated questions, repeated attempts, AI evaluation, and saved improvements into one continuous interview-preparation loop.',
      imageOptions: {
        width: 473,
        height: 1024,
      },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        {
          id: 'cv-personalization',
          featureNumber: 4,
          image: profile,
          title: 'CV-Grounded Personalization',
          description:
            'Candidates can import CV evidence and maintain a structured skills profile. Projects, achievements, work highlights, certifications, target roles, and weak-skill signals give question generation concrete material instead of relying on generic interview templates.',
          alt:
            'Sangfroid profile showing interview preferences, saved skills, weak skills, and CV-derived evidence',
        },
        {
          id: 'saved-practice',
          featureNumber: 5,
          image: savedQuestions,
          title: 'A Reusable Practice Library',
          description:
            'Questions can be saved for later and organized without creating a separate practice system. Saved questions continue through the same answer, attempt-history, feedback, revision, and progress workflows as generated questions.',
          alt:
            'Sangfroid saved questions screen with categorized interview questions and practice actions',
        },
        {
          id: 'progress-intelligence',
          featureNumber: 6,
          image: progress,
          title: 'Progress Backed by Practice Evidence',
          description:
            'The progress experience combines attempt volume with evaluation coverage, average scores, recent changes, revision activity, category performance, and CV coverage. The result explains both how much the candidate practiced and where the next session should focus.',
          alt:
            'Sangfroid progress screen displaying practice snapshot, performance trends, and CV-based question insights',
        },
      ],
    },
    {
      id: 'answer-workspace',
      type: 'image-text',
      heading: 'Guidance Without Replacing the Candidate',
      paragraphs: [
        'The answer editor was designed as a workspace rather than a single-use form. Candidates can type, dictate an answer with offline speech recognition, revisit earlier attempts, reuse an answer as a new draft, and move between question and attempt tabs without leaving the practice flow.',
        'An AI-generated ideal answer can be used as a lightweight guide. Remaining suggested words appear inside the editor as subdued continuation text, while the candidate keeps control of the real answer. Refreshing the guide preserves editor focus, keyboard state, and the visible editing position.',
        'Drafts persist automatically, and each submitted answer becomes a separate attempt. This creates a history of practice rather than overwriting the candidate’s earlier work.',
      ],
      imageOffsets: [7, -7],
      imageOptions: {
        width: 473,
        height: 1024,
      },
      imageSizes: '(max-width: 768px) 82vw, 36vw',
      images: [
        {
          src: answerEditor,
          alt:
            'Sangfroid answer editor showing the focused writing and voice-practice workspace',
        },
        {
          src: feed,
          alt:
            'Sangfroid interview-question feed used to enter the guided practice flow',
        },
      ],
    },
    {
      id: 'ai-feedback',
      type: 'text',
      heading: 'Structured AI Feedback Behind a Secured API',
      paragraphs: [
        'Sangfroid sends interview evaluations through a Java 21 Spring Boot backend instead of embedding the Qwen credential in the Android application. The backend builds a constrained evaluation prompt, calls Qwen, parses the returned JSON, validates the response contract, and returns a typed evaluation payload to Android.',
        'Each evaluation can include a concise summary, strengths, missing points, suggestions, an improved outline, an improved answer example, follow-up questions, and rubric scores. Scores use a fixed five-point maximum so results remain comparable across attempts.',
        'The response parser cleans text, limits field lengths, removes duplicate list entries, constrains oversized arrays, validates required minimums, and rejects malformed responses. This adds a deterministic boundary around model output rather than trusting generated JSON directly.',
      ],
    },
    {
      id: 'feedback-experience',
      type: 'text',
      heading: 'A Loading Experience Designed Around Real AI Latency',
      paragraphs: [
        'Fast evaluations transition directly into the full feedback screen. When evaluation lasts longer than three seconds, the loading experience minimizes into a compact status surface near the bottom of the screen instead of occupying the entire interface.',
        'The compact state keeps the submitted question visible, communicates that Qwen is reviewing structure, evidence, and clarity, and tracks elapsed time. As soon as the evaluation arrives, the complete feedback experience expands automatically.',
        'Generated answer revisions can be saved as multiple versions rather than replacing one another. Candidates can inspect older revisions, reuse a selected version as an answer guide, and delete individual versions without removing the original attempt.',
      ],
    },
    {
      id: 'android-architecture',
      type: 'text',
      heading: 'Offline-First Android Architecture',
      paragraphs: [
        'The Android application is built with Kotlin, Jetpack Compose, Material 3, Room, Hilt, coroutines, and StateFlow. UI state is exposed from feature ViewModels while Room-backed repositories preserve questions, attempts, drafts, feedback, profile skills, CV evidence, revisions, saved questions, and progress data.',
        'Local state remains useful even when AI services are unavailable. Candidates can browse questions, edit drafts, review saved content, inspect practice history, and use supported offline speech recognition without requiring a continuous network connection.',
        'Reusable design-system tokens centralize spacing, typography, shapes, colors, alpha values, and screen structure. Feature components consume those tokens so the feed, practice editor, attempt folder, feedback experience, saved library, profile, and progress dashboard feel like one product.',
      ],
    },
    {
      id: 'practice-history',
      type: 'text',
      heading: 'Attempts as a First-Class Product Model',
      paragraphs: [
        'Sangfroid keeps every submitted answer as its own attempt. The practice card behaves like a folder: the question occupies the first tab, while previous attempts appear as ordered tabs with evaluation status, submission time, input method, word count, duration, feedback access, reuse, and deletion controls.',
        'The newest attempt appears first while the earliest attempt remains available at the end of the tab history. Horizontal scrolling, automatic selected-tab positioning, swipe navigation, and connected folder geometry keep larger attempt histories usable on phone-sized screens.',
        'Deleting an attempt removes the associated answer, evaluation, and saved revisions without affecting the current draft or unrelated attempts. Confirmation and error states make destructive actions explicit.',
      ],
    },
    {
      id: 'personalization-pipeline',
      type: 'text',
      heading: 'From CV Evidence to the Next Question',
      paragraphs: [
        'Question generation can use structured CV evidence, manually saved skills, target-role preferences, weak-skill signals, and practice progress. This allows Sangfroid to rotate toward underused evidence and weaker areas rather than repeatedly generating similar generic questions.',
        'CV insights expose how much of the question library came from the candidate’s own evidence, which evidence items have been practiced, how those answers score compared with general questions, and which CV items have not yet produced a question.',
        'Custom questions imported from pasted text enter the same Question, Practice, Feedback, Revision, and Progress architecture. Imported content is not isolated in a parallel workflow, so every question benefits from the same tracking and practice tools.',
      ],
    },
    {
      id: 'engineering',
      type: 'text',
      heading: 'Engineering the Edges of the Experience',
      paragraphs: [
        'The project required handling details that become visible only during sustained use: preserving editor focus while an ideal answer refreshes, maintaining scroll position during asynchronous generation, constraining model-generated arrays, reconnecting the final attempt tab to the folder body, and adapting long-running feedback loading without interrupting the candidate.',
        'Physical Android-device testing shaped networking and interaction decisions. Local backend development used Android Debug Bridge port reversal where appropriate, while cloud deployment moved backend credentials and Qwen access out of the device build.',
        'The result is not a collection of independent screens. Questions, answers, speech input, attempts, evaluations, revisions, CV evidence, saved skills, recommendations, and progress all share one data and interaction model.',
      ],
    },
  ],
};