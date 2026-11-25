import { Link } from '@remix-run/react';
import { baseMeta } from '~/utils/meta';

export const meta = () =>
  baseMeta({
    title: 'Sangfroid Privacy Policy',
    description:
      'Privacy Policy for Sangfroid, the Android interview preparation application.',
  });

export default function SangfroidPrivacyPolicy() {
  return (
    <main
      style={{
        width: 'min(760px, calc(100% - 40px))',
        margin: '0 auto',
        padding: '120px 0 96px',
        lineHeight: 1.7,
      }}
    >
      <Link
        to="/projects/sangfroid"
        style={{
          display: 'inline-block',
          marginBottom: 40,
        }}
      >
        ← Sangfroid
      </Link>

      <header
        style={{
          marginBottom: 56,
        }}
      >
        <p
          style={{
            marginBottom: 12,
            opacity: 0.65,
          }}
        >
          SANGFROID / LEGAL
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 0.95,
          }}
        >
          Privacy Policy
        </h1>

        <p
          style={{
            marginTop: 24,
            opacity: 0.7,
          }}
        >
          Last updated: November 25, 2026
        </p>
      </header>

      <PolicySection title="Overview">
        <p>
          Sangfroid is an Android interview-preparation application
          that provides personalized interview questions, answer
          practice, CV-assisted personalization, and AI-generated
          feedback.
        </p>

        <p>
          This Privacy Policy explains how information is processed
          when Sangfroid is used.
        </p>
      </PolicySection>

      <PolicySection title="Information You Provide">
        <p>
          Depending on the features you choose to use, Sangfroid may
          process information that you provide, including:
        </p>

        <ul>
          <li>Interview answers and practice responses.</li>
          <li>Questions that you create, import, or save.</li>
          <li>
            CV or résumé content selected for interview
            personalization.
          </li>
          <li>
            Professional information derived from that content,
            such as skills, projects, achievements, experience,
            and target-role context.
          </li>
          <li>
            Saved answer revisions and other interview-practice
            information.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Voice Practice">
        <p>
          Sangfroid may request microphone access when you choose to
          practise an answer using voice input.
        </p>

        <p>
          Speech recognition is designed to operate on the device.
          Microphone access is used for the voice-practice feature
          and is not required for typed interview practice.
        </p>
      </PolicySection>

      <PolicySection title="AI Features">
        <p>
          Some Sangfroid features require remote AI processing,
          including CV analysis, personalized question generation,
          ideal-answer guidance, and interview-answer evaluation.
        </p>

        <p>
          Information necessary to perform those features may be
          transmitted to Sangfroid's backend and processed by the
          configured AI provider. This may include interview
          questions, answer text, relevant CV-derived professional
          context, skills, and other information necessary to
          generate the requested result.
        </p>

        <p>
          Sangfroid does not place the AI provider credential inside
          the Android application. AI requests are processed through
          the Sangfroid backend.
        </p>
      </PolicySection>

      <PolicySection title="Local Storage">
        <p>
          Sangfroid stores application information locally on your
          device so that practice history and supported functionality
          remain available between sessions.
        </p>

        <p>Locally stored data may include:</p>

        <ul>
          <li>Questions and saved questions.</li>
          <li>Draft answers.</li>
          <li>Submitted interview attempts.</li>
          <li>AI-generated feedback.</li>
          <li>Saved answer revisions.</li>
          <li>Profile and skill information.</li>
          <li>CV-derived professional evidence.</li>
          <li>Practice and progress information.</li>
        </ul>
      </PolicySection>

      <PolicySection title="Backend and Network Security">
        <p>
          Sangfroid communicates with its production backend using
          HTTPS. The backend is hosted using Amazon Web Services
          infrastructure.
        </p>

        <p>
          Sensitive backend credentials, including credentials used
          for AI integrations, are kept outside the distributed
          Android application.
        </p>
      </PolicySection>

      <PolicySection title="Third-Party Services">
        <p>
          Sangfroid relies on third-party infrastructure and AI
          services to provide some functionality.
        </p>

        <p>These may include:</p>

        <ul>
          <li>
            Amazon Web Services for backend infrastructure,
            networking, operational logging, and protected
            configuration.
          </li>

          <li>
            Qwen-powered services for supported AI features such as
            question generation, CV analysis, answer guidance, and
            interview feedback.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="How Information Is Used">
        <p>
          Information processed by Sangfroid is used to provide and
          improve the functionality requested by the user, including:
        </p>

        <ul>
          <li>Providing interview-practice functionality.</li>
          <li>Personalizing interview questions.</li>
          <li>Generating requested AI feedback and guidance.</li>
          <li>Maintaining practice history and saved revisions.</li>
          <li>Calculating progress and practice insights.</li>
          <li>Maintaining the reliability and security of the service.</li>
        </ul>
      </PolicySection>

      <PolicySection title="Data Control">
        <p>
          Sangfroid provides controls for managing practice content,
          including individual attempts, saved questions, and saved
          answer revisions.
        </p>

        <p>
          Removing locally stored application data or uninstalling
          Sangfroid removes data stored within the application's local
          storage on that device, subject to Android platform backup
          behavior.
        </p>
      </PolicySection>

      <PolicySection title="Children">
        <p>
          Sangfroid is intended for interview preparation and is not
          designed specifically for children.
        </p>
      </PolicySection>

      <PolicySection title="Changes to This Policy">
        <p>
          This Privacy Policy may be updated as Sangfroid evolves.
          Material changes to data handling practices will be
          reflected on this page.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          For questions about this Privacy Policy or Sangfroid's data
          practices, contact the developer through the contact
          information provided on the portfolio website.
        </p>

        <p>
          <Link to="/contact">
            Contact
          </Link>
        </p>
      </PolicySection>
    </main>
  );
}

function PolicySection({
  title,
  children,
}) {
  return (
    <section
      style={{
        marginTop: 48,
      }}
    >
      <h2
        style={{
          marginBottom: 16,
        }}
      >
        {title}
      </h2>

      {children}
    </section>
  );
}