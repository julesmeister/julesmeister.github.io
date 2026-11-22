// @ts-check

import answerEditor from '~/assets/sangfroid/answer-editor.png';
import feed from '~/assets/sangfroid/feed.png';
import profile from '~/assets/sangfroid/profile.png';
import progress from '~/assets/sangfroid/progress.png';
import savedQuestions from '~/assets/sangfroid/saved-questions.png';

import architecture from '~/assets/sangfroid/sangfroid-architecture.png';
import techStack from '~/assets/sangfroid/sangfroid-tech-stack.png';
import aiFeedbackPipeline from '~/assets/sangfroid/sangfroid-ai-feedback-pipeline.png';
import awsDeployment from '~/assets/sangfroid/sangfroid-aws-deployment.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const sangfroidProject = {
  title: 'Sangfroid',

  description:
    'An offline-first Android interview preparation app that turns CV evidence, skills, practice history, and previous answers into personalized questions, guided practice, structured AI feedback, saved revisions, and measurable progress.',

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

  url: 'https://github.com/julesmeister/sangfroid',
  linkLabel: 'View on GitHub',

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
    /*
     * =========================================================
     * PRODUCT LOOP
     * =========================================================
     */

    {
      id: 'practice-loop',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [50, 25, 60],

      imageOptions: {
        width: 473,
        height: 1024,
      },

      imageSizes:
        '(max-width: 768px) 90vw, 45vw',

      items: [
        {
          id: 'personalize',
          stepNumber: 1,
          image: profile,
          title: 'Personalize',
          description:
            'Import CV evidence and build an interview profile from skills, projects, experience, target roles, and areas that need more practice.',
          alt:
            'Sangfroid interview profile showing CV analysis, extracted skills, projects, and professional context',
        },

        {
          id: 'practice',
          stepNumber: 2,
          image: answerEditor,
          title: 'Practice',
          description:
            'Answer recommended or saved interview questions using text or voice. Drafts persist locally and each submitted answer becomes a separate attempt.',
          alt:
            'Sangfroid voice interview practice screen with recording controls and an active interview question',
        },

        {
          id: 'improve',
          stepNumber: 3,
          image: progress,
          title: 'Improve',
          description:
            'Use structured feedback, saved revisions, previous attempts, score trends, feedback coverage, and CV insights to decide what to practise next.',
          alt:
            'Sangfroid progress dashboard showing interview readiness, attempts, revisions, evaluation coverage, and CV insights',
        },
      ],
    },

    /*
     * =========================================================
     * PERSONALIZED EXPERIENCE
     * =========================================================
     */

    {
      id: 'personalized-practice',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6],

      heading:
        'Practice Built Around the Candidate',

      description:
        'Instead of treating interview preparation as a static question bank, Sangfroid connects professional evidence, question recommendations, repeated attempts, feedback, and progress into one practice system.',

      imageOptions: {
        width: 473,
        height: 1024,
      },

      imageSizes:
        '(max-width: 768px) 85vw, 40vw',

      items: [
        {
          id: 'question-feed',
          featureNumber: 4,
          image: feed,
          title:
            'Questions With a Reason',

          description:
            'The feed recommends questions using category, difficulty, CV evidence, saved skills, target-role context, and previous practice. Each question also explains why an interviewer may ask it.',

          alt:
            'Sangfroid personalized interview question feed showing a recommended technical question and practice controls',
        },

        {
          id: 'saved-practice',
          featureNumber: 5,
          image: savedQuestions,
          title:
            'A Reusable Practice Library',

          description:
            'Saved questions preserve category, previous attempts, latest scores, revisions, history, and why the question matters. Saved and generated questions use the same practice workflow.',

          alt:
            'Sangfroid saved questions screen showing interview categories, scores, attempts, revisions, practice actions, and question explanations',
        },

        {
          id: 'progress-intelligence',
          featureNumber: 6,
          image: progress,
          title:
            'Progress Backed by Evidence',

          description:
            'Progress combines attempts, completed evaluations, saved revisions, feedback coverage, score movement, question performance, and CV-based practice instead of reducing progress to a simple streak.',

          alt:
            'Sangfroid progress screen showing interview readiness, practice statistics, evaluation coverage, and CV-based questions',
        },
      ],
    },

    /*
     * =========================================================
     * ANSWER WORKSPACE
     * =========================================================
     */

    {
      id: 'answer-workspace',
      type: 'image-text',

      heading:
        'Guidance Without Replacing the Candidate',

      paragraphs: [
        'The answer editor works as a persistent practice workspace. Candidates can type, answer by voice, revisit previous attempts, and reuse earlier answers without leaving the question.',

        'An optional Qwen-generated ideal answer appears as lightweight continuation guidance rather than replacing the candidate’s response. The editor remains usable while new guidance is generated.',

        'Drafts persist automatically and every submission becomes its own attempt, preserving practice history instead of overwriting previous work.',
      ],

      imageOffsets: [7, -7],

      imageOptions: {
        width: 473,
        height: 1024,
      },

      imageSizes:
        '(max-width: 768px) 82vw, 36vw',

      images: [
        {
          src: answerEditor,
          alt:
            'Sangfroid answer workspace showing voice recording controls and active interview practice',
        },

        {
          src: feed,
          alt:
            'Sangfroid question feed used to enter the personalized interview practice workflow',
        },
      ],
    },

    /*
     * =========================================================
     * ARCHITECTURE
     * =========================================================
     */

    {
      id: 'android-architecture',
      type: 'image-text',

      heading:
        'Offline-First Android Architecture',

      paragraphs: [
        'The Android client uses Kotlin and Jetpack Compose with an MVVM-style layered architecture. ViewModels expose UI state through StateFlow, use cases contain focused application operations, and repositories separate the domain layer from persistence and networking.',

        'Room provides local persistence for questions, drafts, attempts, evaluations, revisions, profile data, CV evidence, saved questions, and progress. Retrofit handles remote operations through the Spring Boot API, while Hilt provides dependencies across the Android layers.',
      ],

      imageOffsets: [0],

      imageSizes:
        '(max-width: 768px) 94vw, 52vw',

      images: [
        {
          src: architecture,
          alt:
            'Sangfroid architecture showing Jetpack Compose, ViewModel and StateFlow, use cases, repositories, Room, Retrofit, Spring Boot, and Qwen',
        },
      ],
    },

    /*
     * =========================================================
     * TECHNOLOGY STACK
     * =========================================================
     */

    {
      id: 'technology-stack',
      type: 'image-text',

      heading:
        'Built End to End',

      paragraphs: [
        'Sangfroid spans the native Android experience, local persistence, REST networking, backend development, generative AI integration, containerization, and AWS deployment.',

        'The client uses Kotlin, Jetpack Compose, Room, Hilt, StateFlow, coroutines, and Retrofit. The backend uses Java 21, Spring Boot, Spring Security, Jackson, and Qwen, with AWS providing the production runtime and operational infrastructure.',
      ],

      imageOffsets: [0],

      imageSizes:
        '(max-width: 768px) 94vw, 52vw',

      images: [
        {
          src: techStack,
          alt:
            'Sangfroid technology stack covering Android, application architecture, local data, Spring Boot, Qwen, and AWS',
        },
      ],
    },

    /*
     * =========================================================
     * AI PIPELINE
     * =========================================================
     */

    {
      id: 'ai-feedback',
      type: 'image-text',

      heading:
        'AI Behind a Controlled Backend Boundary',

      paragraphs: [
        'The Android application never talks directly to Qwen. Retrofit sends the interview context to a Java 21 Spring Boot API, which builds the prompt, calls Qwen, and controls the response before sending typed data back to Android.',

        'Generated output is parsed, cleaned, normalized, and validated rather than trusted directly. The parser handles malformed JSON, blank or duplicate values, unexpected list sizes, and rubric scores outside the application contract.',

        'Valid evaluations can contain a summary, strengths, missing points, suggestions, an improved outline, an improved answer example, follow-up questions, and rubric scores.',
      ],

      imageOffsets: [0],

      imageSizes:
        '(max-width: 768px) 94vw, 52vw',

      images: [
        {
          src: aiFeedbackPipeline,
          alt:
            'Sangfroid AI feedback pipeline from Android and Retrofit through Spring Boot, Qwen, validation, and structured feedback',
        },
      ],
    },

    /*
     * =========================================================
     * AWS
     * =========================================================
     */

    {
      id: 'aws-deployment',
      type: 'image-text',

      heading:
        'Containerized and Deployed on AWS',

      paragraphs: [
        'The Spring Boot backend is containerized so deployment remains separate from the Android application. Amazon ECR stores the container image and ECS Fargate runs it without requiring a manually managed server instance.',

        'AWS Secrets Manager provides sensitive backend configuration such as the Qwen API credential, keeping secrets outside the Android application and container source. CloudWatch provides runtime logs for application behavior and troubleshooting.',
      ],

      imageOffsets: [0],

      imageSizes:
        '(max-width: 768px) 94vw, 52vw',

      images: [
        {
          src: awsDeployment,
          alt:
            'Sangfroid AWS deployment showing the Android client, Spring Boot on ECS Fargate, ECR, Secrets Manager, CloudWatch, and Qwen',
        },
      ],
    },

    /*
     * =========================================================
     * ATTEMPTS AND REVISIONS
     * =========================================================
     */

    {
      id: 'practice-history',
      type: 'text',

      heading:
        'Practice History, Not Disposable Answers',

      paragraphs: [
        'Every submitted answer is stored as its own attempt. Candidates can move between the question and previous attempts, inspect evaluation status, reopen feedback, reuse an earlier answer as a new draft, or delete an individual attempt.',

        'Improved answers are versioned separately from attempts. Multiple AI-assisted revisions can therefore be saved for the same response without replacing earlier versions, making improvement visible over time.',
      ],
    },

    /*
     * =========================================================
     * CV PERSONALIZATION
     * =========================================================
     */

    {
      id: 'personalization-pipeline',
      type: 'image-text',

      heading:
        'From CV Evidence to the Next Question',

      paragraphs: [
        'CV import uses semantic extraction rather than a hardcoded list of technical skills. This allows Sangfroid to identify useful professional evidence across technical and non-technical backgrounds.',

        'Structured CV evidence, profile skills, target-role preferences, weaker practice areas, and previous progress can influence future questions. CV insights also show which evidence has already shaped practice and what has not yet been explored.',
      ],

      imageOffsets: [0],

      imageOptions: {
        width: 473,
        height: 1024,
      },

      imageSizes:
        '(max-width: 768px) 82vw, 36vw',

      images: [
        {
          src: profile,
          alt:
            'Sangfroid interview profile showing CV-derived role information, extracted skills, and project evidence',
        },
      ],
    },

    /*
     * =========================================================
     * ENGINEERING
     * =========================================================
     */

    {
      id: 'engineering',
      type: 'text',

      heading:
        'Engineering Beyond the Happy Path',

      paragraphs: [
        'Building Sangfroid meant solving interaction and reliability problems that appear during real use: keeping editor focus while an ideal answer generates, preserving the visible editing position during asynchronous updates, handling non-deterministic Qwen output, and keeping long attempt histories usable on a phone.',

        'The interface also evolved around those edge cases. Attempt tabs scroll and reposition automatically, the trailing folder tab connects cleanly with the practice card, long-running feedback reduces to a compact loading state, and completed AI results expand back into the full feedback experience.',

        'The result is one connected product model: CV evidence informs questions, questions create attempts, attempts create feedback and revisions, and those outcomes feed progress and future practice.',
      ],
    },

    /*
     * =========================================================
     * SOURCE
     * =========================================================
     */

    {
      id: 'source',
      type: 'text',

      heading:
        'Explore the Source',

      blocks: [
        {
          type: 'paragraph',
          content: [
            'The Android source code, project history, and implementation details are available on ',
            {
              text: 'GitHub',
              href: 'https://github.com/julesmeister/sangfroid',
            },
            '.',
          ],
        },
      ],
    },
  ],
};