import styles from './solar-system-background.module.css';

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

export function SolarSystemBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.system} style={{ '--waveDuration': `${shockwaveDuration}s` }}>
        <div className={styles.sun} />
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