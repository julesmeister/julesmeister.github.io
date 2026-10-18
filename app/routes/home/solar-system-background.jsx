import { useEffect, useRef } from 'react';
import styles from './solar-system-background.module.css';
import moonImage from '~/assets/moon.svg';

const shockwaveDuration = 3;

const planets = [
  { name: 'Mercury', color: '#a6a6a6', size: 5, orbit: 15, period: 24, angle: 35 },
  { name: 'Venus', color: '#e7cdcd', size: 9, orbit: 24, period: 38, angle: 145 },
  { name: 'Earth', color: '#2f9a99', size: 10, orbit: 34, period: 55, angle: 70 },
  { name: 'Mars', color: '#c1440e', size: 7, orbit: 44, period: 75, angle: 160 },
  { name: 'Jupiter', color: '#e3a55d', size: 22, orbit: 57, period: 115, angle: 25 },
  { name: 'Saturn', color: '#d2b65b', size: 18, orbit: 70, period: 150, angle: 120 },
  { name: 'Uranus', color: '#caebed', size: 13, orbit: 84, period: 190, angle: 55 },
  { name: 'Neptune', color: '#5b9fb5', size: 13, orbit: 98, period: 240, angle: 155 },
];

const aquariusStars = [
  { x: 44, y: 142, radius: 1.5 },
  { x: 94, y: 108, radius: 2 },
  { x: 153, y: 124, radius: 1.6 },
  { x: 203, y: 78, radius: 2.4 },
  { x: 258, y: 101, radius: 1.7 },
  { x: 311, y: 62, radius: 2.6 },
  { x: 369, y: 83, radius: 2 },
  { x: 414, y: 47, radius: 1.7 },
  { x: 216, y: 141, radius: 2.1 },
  { x: 270, y: 170, radius: 1.6 },
  { x: 322, y: 151, radius: 2.2 },
  { x: 183, y: 191, radius: 1.4 },
  { x: 226, y: 218, radius: 1.8 },
];

const backgroundStars = [
  { x: 55, y: 90, radius: 1.2, duration: 4.6, delay: -1.1 },
  { x: 145, y: 230, radius: 1.7, duration: 6.3, delay: -4.2 },
  { x: 238, y: 70, radius: 1, duration: 3.8, delay: -2.7 },
  { x: 330, y: 170, radius: 1.4, duration: 7.1, delay: -5.3 },
  { x: 435, y: 310, radius: 1.8, duration: 5.2, delay: -0.8 },
  { x: 520, y: 90, radius: 1.2, duration: 6.8, delay: -3.6 },
  { x: 625, y: 235, radius: 1.5, duration: 4.2, delay: -1.9 },
  { x: 740, y: 120, radius: 1.9, duration: 7.6, delay: -6.1 },
  { x: 860, y: 275, radius: 1.1, duration: 5.7, delay: -3.1 },
  { x: 960, y: 85, radius: 1.6, duration: 4.9, delay: -2.2 },
  { x: 105, y: 420, radius: 1.5, duration: 6.1, delay: -4.7 },
  { x: 280, y: 500, radius: 1.1, duration: 3.6, delay: -1.4 },
  { x: 390, y: 405, radius: 1.9, duration: 7.4, delay: -5.6 },
  { x: 560, y: 525, radius: 1.3, duration: 4.4, delay: -2.5 },
  { x: 690, y: 390, radius: 1.6, duration: 6.6, delay: -0.6 },
  { x: 825, y: 510, radius: 1.2, duration: 5.4, delay: -3.8 },
  { x: 925, y: 430, radius: 1.8, duration: 7.8, delay: -6.5 },
  { x: 190, y: 340, radius: 1, duration: 4.1, delay: -2.9 },
  { x: 490, y: 185, radius: 1.4, duration: 5.9, delay: -4.4 },
  { x: 780, y: 330, radius: 1, duration: 3.9, delay: -1.7 },
  { x: 35, y: 565, radius: 1.4, duration: 6.9, delay: -5.1 },
  { x: 355, y: 590, radius: 1.7, duration: 4.7, delay: -0.9 },
  { x: 635, y: 585, radius: 1.1, duration: 7.2, delay: -3.3 },
  { x: 985, y: 590, radius: 1.5, duration: 5.1, delay: -6.7 },
];

export function SolarSystemBackground() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let cancelled = false;
    let animation;
    let current = { x: 0, y: 0, rotation: 0 };

    const chooseTarget = () => {
      const background = scene.parentElement;
      const constellation = scene.querySelector('svg[class*="constellation"]');
      const maxTravel = Math.max(
        0,
        background.clientWidth - constellation.getBoundingClientRect().width - background.clientWidth * 0.1
      );
      let edge = Math.random();
      const currentEdge = maxTravel ? -current.x / maxTravel : 0;

      if (Math.abs(edge - currentEdge) < 0.45) {
        edge = currentEdge < 0.5
          ? 0.65 + Math.random() * 0.35
          : Math.random() * 0.35;
      }

      const x = -edge * maxTravel;

      return {
        x,
        y: Math.random() * 24 - 12,
        rotation: maxTravel ? 15 + (x / maxTravel) * 30 : 0,
      };
    };

    const moveToRandomTarget = () => {
      const from = current;
      const target = chooseTarget();
      const duration = Math.max(12000, (Math.abs(target.x - from.x) / 18) * 1000);
      const transform = position =>
        `translate3d(${position.x}px, ${position.y}px, 0) rotate(${position.rotation}deg)`;
      const nextAnimation = scene.animate(
        [{ transform: transform(from) }, { transform: transform(target) }],
        {
          duration,
          easing: 'linear',
          fill: 'forwards',
        }
      );

      animation = nextAnimation;
      nextAnimation.onfinish = () => {
        if (cancelled) return;
        current = target;
        nextAnimation.cancel();
        moveToRandomTarget();
      };
    };

    moveToRandomTarget();
    return () => {
      cancelled = true;
      animation?.cancel();
    };
  }, []);

  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.starScene} ref={sceneRef}>
        <svg className={styles.darkStars} viewBox="0 0 1000 650" preserveAspectRatio="none">
          {backgroundStars.map(star => (
            <circle
              key={`${star.x}-${star.y}`}
              cx={star.x}
              cy={star.y}
              r={star.radius}
              style={{
                '--twinkleDuration': `${star.duration}s`,
                '--twinkleDelay': `${star.delay}s`,
              }}
            />
          ))}
        </svg>
        <svg className={styles.constellation} viewBox="0 0 460 260" fill="none">
          <g className={styles.constellationLines}>
            <path d="M44 142 94 108 153 124 203 78 258 101 311 62 369 83 414 47" />
            <path d="M203 78 216 141 270 170 322 151 369 83" />
            <path d="m216 141-33 50 43 27" />
          </g>
          <g className={styles.constellationStars}>
            {aquariusStars.map(star => (
              <circle key={`${star.x}-${star.y}`} cx={star.x} cy={star.y} r={star.radius} />
            ))}
          </g>
        </svg>
      </div>
      <div className={styles.system} style={{ '--waveDuration': `${shockwaveDuration}s` }}>
        <div className={styles.sun}>
          <img className={styles.moon} src={moonImage} alt="" />
        </div>
        {planets.map(planet => (
          <div
            key={planet.name}
            className={styles.orbit}
            style={{
              '--orbit': `${planet.orbit}%`,
              '--period': `${planet.period}s`,
              '--angle': `${planet.angle}deg`,
              '--planetSize': `${planet.size}px`,
              '--planetColor': planet.color,
              '--waveDelay': `${((planet.orbit / 100 - 0.04) / 0.96 - 0.05) * shockwaveDuration}s`,
            }}
          >
            <div className={styles.planet} data-planet={planet.name} />
          </div>
        ))}
      </div>
      <div className={styles.blur} />
    </div>
  );
}