import { useEffect, useRef, useState } from 'react';
import front from '~/assets/me-front-facing.jpg';
import left from '~/assets/me-left-facing.png';
import right from '~/assets/me-right-facing.jpg';
import up from '~/assets/me-up-facing.jpg';
import down from '~/assets/me-down-facing.jpg';
import upRight from '~/assets/me-up-right-facing.jpg';
import downRight from '~/assets/me-down-right-facing.jpg';
import styles from './profile.module.css';

const portraits = { front, left, right, up, down, upRight, downRight };

export const ProfilePortrait = () => {
  const container = useRef(null);
  const loaded = useRef(new Set());
  const [direction, setDirection] = useState('front');
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      container.current.style.setProperty('--portrait-side', `${Math.max(width, height)}px`);
    });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPreload(true);
        observer.disconnect();
      }
    }, { rootMargin: '300px' });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    container.current.querySelectorAll('img').forEach(image => {
      image.decode().then(() => {
        if (!cancelled) loaded.current.add(image.dataset.pose);
      }).catch(() => {});
    });
    return () => {
      cancelled = true;
    };
  }, [preload]);

  useEffect(() => {
    const tracking = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;

    const reset = () => {
      cancelAnimationFrame(frame);
      setDirection('front');
    };
    const followPointer = event => {
      if (!tracking.matches || event.pointerType === 'touch') return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = container.current.getBoundingClientRect();
        if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
        const horizontal = (event.clientX - bounds.left - bounds.width * 0.45) / bounds.width;
        const vertical = (event.clientY - bounds.top - bounds.height * 0.25) / bounds.height;
        let pose = 'front';

        if (horizontal < -0.2) {
          pose = 'left';
        } else if (horizontal > 0.2) {
          pose = vertical < -0.18 ? 'upRight' : vertical > 0.18 ? 'downRight' : 'right';
        } else if (vertical < -0.18) {
          pose = 'up';
        } else if (vertical > 0.18) {
          pose = 'down';
        }

        if (loaded.current.size === Object.keys(portraits).length) {
          setDirection(pose);
        }
      });
    };
    window.addEventListener('pointermove', followPointer, { passive: true });
    window.addEventListener('blur', reset);
    document.documentElement.addEventListener('pointerleave', reset);
    tracking.addEventListener('change', reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', followPointer);
      window.removeEventListener('blur', reset);
      document.documentElement.removeEventListener('pointerleave', reset);
      tracking.removeEventListener('change', reset);
    };
  }, []);

  return (
    <div className={styles.image} ref={container} data-portrait-direction={direction}>
      <div className={styles.portraitCanvas}>
      {Object.entries(portraits).map(([pose, source]) => (
        (pose === 'front' || preload) && (
          <img
            className={styles.portraitPose}
            key={pose}
            src={source}
            alt={pose === 'front' ? 'Jules Lee at the Galilean Sea' : ''}
            aria-hidden={pose !== 'front' || undefined}
            data-pose={pose}
            data-base={pose === 'front'}
            data-active={direction === pose}
            width={1024}
            height={1024}
            loading={pose === 'front' ? 'lazy' : 'eager'}
            decoding="async"
          />
        )
      ))}
      </div>
    </div>
  );
};