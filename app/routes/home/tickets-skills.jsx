import React, { useRef, useEffect } from 'react';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport, useWindowSize } from '~/hooks';
import { throttle } from '~/utils/throttle';
import { media } from '~/utils/style';
import styles from './tickets-skills.module.css';

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
};

const PARTICLE_COUNT = 150; // Significantly increased particle count
const PARTICLE_SPEED = 0.2; // Slowed down for smoother movement
const CONNECTION_DISTANCE = 200; // Increased connection distance
const TICKET_CONNECTION_DISTANCE = 250; // Increased ticket connection distance

class Particle {
  constructor(x, y, radius, color, isTicketParticle = false) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.baseX = x;
    this.baseY = y;
    this.density = (Math.random() * 30) + 1;
    this.angle = Math.random() * 360;
    this.speed = PARTICLE_SPEED;
    this.isTicketParticle = isTicketParticle;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
  }

  update(time, rotationX = 0, rotationY = 0) {
    this.angle += this.speed;
    const radian = (this.angle * Math.PI) / 180;
    
    // Base orbital movement
    const orbitX = Math.cos(radian + time) * 30;
    const orbitY = Math.sin(radian + time) * 30;
    
    // Add rotation influence
    const rotationInfluenceX = rotationY * 50; // Using rotationY for X movement
    const rotationInfluenceY = rotationX * 50; // Using rotationX for Y movement
    
    // Combine movements
    this.x = this.baseX + orbitX + rotationInfluenceX;
    this.y = this.baseY + orbitY + rotationInfluenceY;
  }
}

const skills = [
  'React',
  'LWC',
  'Supabase',
  'Salesforce',
  'Next.js',
  'Flutterflow',
];

const colors = [
  '#dc143c', // Crimson
  '#4169e1', // Royal Blue
  '#32cd32', // Lime Green
  '#ffa500', // Orange
  '#9370db', // Medium Purple
  '#20b2aa', // Light Sea Green
];

export const TicketsSkills = () => {
  const { theme } = useTheme();
  const start = useRef(Date.now());
  const canvasRef = useRef();
  const containerRef = useRef();
  const particlesRef = useRef([]);
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(containerRef);
  const windowSize = useWindowSize();
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);

  useEffect(() => {
    const { width, height } = windowSize;
    const centerX = width * 0.7;
    const centerY = height * 0.3;
    const particles = [];

    // Create more background particles
    for (let i = 0; i < PARTICLE_COUNT * 0.7; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 1.5 + 0.5; // Smaller particles
      const color = theme === 'light' ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)';
      particles.push(new Particle(x, y, radius, color, false));
    }

    // Create more particles concentrated around the center
    for (let i = 0; i < PARTICLE_COUNT * 0.3; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 300 + 50; // Wider spread
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      const radius = Math.random() * 1.5 + 1;
      const color = theme === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)';
      particles.push(new Particle(x, y, radius, color, true));
    }

    particlesRef.current = particles;
  }, [windowSize, theme]);

  const drawParticles = (context, time, ticketPositions) => {
    const particles = particlesRef.current;

    // Update and draw particles with rotation values
    particles.forEach(particle => {
      particle.update(time, rotationX.get(), rotationY.get());
      particle.draw(context);
    });

    // Create a gradient for connections
    const createGradient = (x1, y1, x2, y2, opacity) => {
      const gradient = context.createLinearGradient(x1, y1, x2, y2);
      const color = theme === 'light' ? '0,0,0' : '255,255,255';
      gradient.addColorStop(0, `rgba(${color},${opacity})`);
      gradient.addColorStop(1, `rgba(${color},${opacity * 0.5})`);
      return gradient;
    };

    // Draw connections between particles with gradient
    particles.forEach((particle1, i) => {
      particles.slice(i + 1).forEach(particle2 => {
        const dx = particle1.x - particle2.x;
        const dy = particle1.y - particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECTION_DISTANCE) {
          const opacity = particle1.isTicketParticle || particle2.isTicketParticle
            ? 0.2 * (1 - distance/CONNECTION_DISTANCE)
            : 0.08 * (1 - distance/CONNECTION_DISTANCE);

          context.beginPath();
          context.strokeStyle = createGradient(
            particle1.x, particle1.y,
            particle2.x, particle2.y,
            opacity
          );
          context.lineWidth = particle1.isTicketParticle || particle2.isTicketParticle ? 1.2 : 0.8;
          context.moveTo(particle1.x, particle1.y);
          context.lineTo(particle2.x, particle2.y);
          context.stroke();
        }
      });

      // Connect particles to ticket positions with stronger connections
      ticketPositions.forEach(ticketPos => {
        const dx = particle1.x - ticketPos.x;
        const dy = particle1.y - ticketPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < TICKET_CONNECTION_DISTANCE) {
          const opacity = 0.25 * (1 - distance/TICKET_CONNECTION_DISTANCE);
          
          context.beginPath();
          context.strokeStyle = createGradient(
            particle1.x, particle1.y,
            ticketPos.x, ticketPos.y,
            opacity
          );
          context.lineWidth = 1;
          context.moveTo(particle1.x, particle1.y);
          context.lineTo(ticketPos.x, ticketPos.y);
          context.stroke();
        }
      });
    });
  };

  const drawTicket = (x, y, text, color, rotation, scale = 1, zIndex = 0, ticketIndex) => {
    const context = canvasRef.current.getContext('2d');
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(scale, scale);

    const ticketWidth = 200;
    const ticketHeight = 80;
    const stubWidth = 40;
    const cornerRadius = 10;
    const perforationOffset = 5;

    context.beginPath();
    context.moveTo(cornerRadius, 0);
    context.lineTo(ticketWidth - stubWidth - cornerRadius, 0);
    context.quadraticCurveTo(ticketWidth - stubWidth, 0, ticketWidth - stubWidth, cornerRadius);
    context.lineTo(ticketWidth - stubWidth, ticketHeight - cornerRadius);
    context.quadraticCurveTo(ticketWidth - stubWidth, ticketHeight, ticketWidth - stubWidth - cornerRadius, ticketHeight);
    context.lineTo(cornerRadius, ticketHeight);
    context.quadraticCurveTo(0, ticketHeight, 0, ticketHeight - cornerRadius);
    context.lineTo(0, cornerRadius);
    context.quadraticCurveTo(0, 0, cornerRadius, 0);
    context.fillStyle = color;
    context.globalAlpha = theme === 'light' ? 0.9 : 0.7;
    context.fill();

    context.setLineDash([5, 5]);
    context.beginPath();
    context.moveTo(cornerRadius + perforationOffset, perforationOffset);
    context.lineTo(ticketWidth - stubWidth - cornerRadius - perforationOffset, perforationOffset);
    context.quadraticCurveTo(ticketWidth - stubWidth - perforationOffset, perforationOffset, ticketWidth - stubWidth - perforationOffset, cornerRadius + perforationOffset);
    context.lineTo(ticketWidth - stubWidth - perforationOffset, ticketHeight - cornerRadius - perforationOffset);
    context.quadraticCurveTo(ticketWidth - stubWidth - perforationOffset, ticketHeight - perforationOffset, ticketWidth - stubWidth - cornerRadius - perforationOffset, ticketHeight - perforationOffset);
    context.lineTo(cornerRadius + perforationOffset, ticketHeight - perforationOffset);
    context.quadraticCurveTo(perforationOffset, ticketHeight - perforationOffset, perforationOffset, ticketHeight - cornerRadius - perforationOffset);
    context.lineTo(perforationOffset, cornerRadius + perforationOffset);
    context.quadraticCurveTo(perforationOffset, perforationOffset, cornerRadius + perforationOffset, perforationOffset);
    context.strokeStyle = theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)';
    context.lineWidth = 2;
    context.stroke();
    context.setLineDash([]);

    context.beginPath();
    context.setLineDash([4, 4]);
    context.moveTo(ticketWidth - stubWidth, 0);
    context.lineTo(ticketWidth - stubWidth, ticketHeight);
    context.strokeStyle = theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)';
    context.stroke();
    context.setLineDash([]);

    context.beginPath();
    context.moveTo(ticketWidth - stubWidth, 0);
    context.lineTo(ticketWidth - cornerRadius, 0);
    context.quadraticCurveTo(ticketWidth, 0, ticketWidth, cornerRadius);
    context.lineTo(ticketWidth, ticketHeight - cornerRadius);
    context.quadraticCurveTo(ticketWidth, ticketHeight, ticketWidth - cornerRadius, ticketHeight);
    context.lineTo(ticketWidth - stubWidth, ticketHeight);
    context.fillStyle = color;
    context.globalAlpha = theme === 'light' ? 0.9 : 0.7;
    context.fill();

    context.globalAlpha = 0.3;
    context.fillStyle = theme === 'light' ? '#000' : '#fff';
    context.font = 'bold 16px "SF Pro Display", system-ui';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.save();
    context.translate(ticketWidth - stubWidth / 2, ticketHeight / 2);
    context.rotate(-Math.PI / 2);
    context.fillText((ticketIndex + 1).toString().padStart(3, '0'), 0, 0);
    context.restore();

    context.setLineDash([5, 5]);
    context.beginPath();
    context.moveTo(ticketWidth - stubWidth + perforationOffset, perforationOffset);
    context.lineTo(ticketWidth - cornerRadius - perforationOffset, perforationOffset);
    context.quadraticCurveTo(ticketWidth - perforationOffset, perforationOffset, ticketWidth - perforationOffset, cornerRadius + perforationOffset);
    context.lineTo(ticketWidth - perforationOffset, ticketHeight - cornerRadius - perforationOffset);
    context.quadraticCurveTo(ticketWidth - perforationOffset, ticketHeight - perforationOffset, ticketWidth - cornerRadius - perforationOffset, ticketHeight - perforationOffset);
    context.lineTo(ticketWidth - stubWidth + perforationOffset, ticketHeight - perforationOffset);
    context.strokeStyle = theme === 'light' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)';
    context.lineWidth = 2;
    context.stroke();
    context.setLineDash([]);

    context.globalAlpha = 1;
    const maxWidth = ticketWidth - stubWidth - 20;
    let fontSize = 24;
    context.font = `bold ${fontSize}px "SF Pro Display", system-ui`;
    let textWidth = context.measureText(text).width;

    while (textWidth > maxWidth && fontSize > 10) {
      fontSize -= 1;
      context.font = `bold ${fontSize}px "SF Pro Display", system-ui`;
      textWidth = context.measureText(text).width;
    }

    const darkerColor = color.replace(/^#/, '');
    const r = parseInt(darkerColor.substr(0, 2), 16);
    const g = parseInt(darkerColor.substr(2, 2), 16);
    const b = parseInt(darkerColor.substr(4, 2), 16);
    const darkenFactor = 0.4;
    const darkR = Math.floor(r * darkenFactor);
    const darkG = Math.floor(g * darkenFactor);
    const darkB = Math.floor(b * darkenFactor);
    context.fillStyle = `rgb(${darkR}, ${darkG}, ${darkB})`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, (ticketWidth - stubWidth) / 2, ticketHeight / 2);

    context.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const { width, height } = windowSize;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(dpr, dpr);

    return () => {
      context.clearRect(0, 0, width, height);
    };
  }, [windowSize]);

  useEffect(() => {
    const onMouseMove = throttle(event => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    }, 100);

    if (!reduceMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  let animation;

  const animate = () => {
    animation = requestAnimationFrame(animate);
    const context = canvasRef.current.getContext('2d');
    const { width, height } = canvasRef.current;

    context.clearRect(0, 0, width, height);

    const time = 0.00005 * (Date.now() - start.current);
    const ticketWidth = 200;
    const radius = (ticketWidth * skills.length) / (2 * Math.PI);
    const centerOffsetX = width * 0.7;
    const centerOffsetY = height * 0.3;

    const ticketPositions = [];

    // skills.forEach((skill, index) => {
    //   const baseAngle = (index / skills.length) * Math.PI * 2 + time;
    //   const x = centerOffsetX + Math.cos(baseAngle) * radius;
    //   const y = centerOffsetY + Math.sin(baseAngle) * radius;
      
    //   ticketPositions.push({ x, y });

    //   const tangentRotation = baseAngle + Math.PI / 2;
    //   const wobble = Math.sin(time * 2 + index * 0.5) * 0.1;
    //   const mouseRotation = Math.atan2(
    //     rotationY.get() * Math.PI,
    //     rotationX.get() * Math.PI
    //   ) * 0.1;
      
    //   const finalRotation = tangentRotation + wobble + mouseRotation;
    //   const scale = 0.8;

    //   drawTicket(
    //     x,
    //     y,
    //     skill,
    //     colors[index],
    //     finalRotation,
    //     scale,
    //     index,
    //     index
    //   );
    // });

    drawParticles(context, time, ticketPositions);
  };

  useEffect(() => {
    if (!reduceMotion && isInViewport) {
      animate();
    } else {
      const context = canvasRef.current.getContext('2d');
      const { width, height } = canvasRef.current;
      const baseX = width / 2;
      const baseY = height / 2;
      const clusterRadius = 100;

      skills.forEach((skill, index) => {
        const randomAngle = Math.random() * Math.PI * 2;
        const randomDistance = Math.random() * (clusterRadius - 20) + 20;
        const randomRotation = (Math.random() - 0.5) * Math.PI;
        
        const x = baseX + Math.cos(randomAngle) * randomDistance;
        const y = baseY + Math.sin(randomAngle) * randomDistance;
        
        const randomScale = 0.6 + Math.random() * 0.4;
        
        drawTicket(x, y, skill, colors[index], randomRotation, randomScale, index, index);
      });
    }

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY, theme]);

  return (
    <Transition in timeout={3000} nodeRef={containerRef}>
      {({ visible, nodeRef }) => (
        <div ref={nodeRef} className={styles.container}>
          <canvas
            ref={canvasRef}
            className={styles.canvas}
            data-visible={visible}
            aria-hidden
          />
        </div>
      )}
    </Transition>
  );
};
