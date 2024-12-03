import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { SubHeading } from '~/components/subheading';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { ProjectSectionText } from '~/layouts/project';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
const YOUR_EMAIL = 'jules.sy.lee@gmail.com'; // Replace with your email

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const errors = {};
    
    if (!email.value || !EMAIL_PATTERN.test(email.value)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!message.value) {
      errors.message = 'Please enter a message.';
    }

    if (email.value.length > MAX_EMAIL_LENGTH) {
      errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
    }

    if (message.value.length > MAX_MESSAGE_LENGTH) {
      errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
    }

    if (Object.keys(errors).length > 0) {
      // Handle errors here if needed
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent('Portfolio Contact Form');
    const body = encodeURIComponent(`From: ${email.value}\n\n${message.value}`);
    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Section className={styles.contact}>
      <Transition unmount in={true} timeout={1600}>
        {({ status, nodeRef }) => (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              Send me a message
            </Heading>
            <SubHeading
              className={`${styles.title} ${styles.subtitle}`}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              This will open your email client with a pre-filled message.
              If you'd rather send an email directly, you can reach me at{' '}
              <b>{YOUR_EMAIL}</b>
            </SubHeading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Button
              className={styles.button}
              data-status={status}
              style={getDelay(tokens.base.durationM, initDelay)}
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>
      <Transition unmount in={false}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              Message Sent
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              I’ll get back to you within a couple days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
