import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '~/components/theme-provider';
import styles from './tickets-skills.module.css';

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
  const canvasRef = useRef();
  const containerRef = useRef();
  const animationFrameRef = useRef();
  const [mouseY, setMouseY] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) {
      console.error('Canvas or container ref is not defined:', {
        canvas: canvasRef.current,
        container: containerRef.current,
      });
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const { width, height } = canvas;

    const drawTicket = (x, y, text, color, rotation, scale = 1, zIndex = 0, ticketIndex) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.scale(scale, scale);

      // Ticket dimensions
      const ticketWidth = 200;
      const ticketHeight = 80;
      const stubWidth = 40;
      const cornerRadius = 10;
      const perforationOffset = 5; // Distance from the edge

      // Draw main ticket body
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

      // Draw perforations inside the main ticket body
      context.setLineDash([5, 5]); // Dashed line pattern
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
      context.setLineDash([]); // Reset dash pattern

      // Draw perforation
      context.beginPath();
      context.setLineDash([4, 4]);
      context.moveTo(ticketWidth - stubWidth, 0);
      context.lineTo(ticketWidth - stubWidth, ticketHeight);
      context.strokeStyle = theme === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)';
      context.stroke();
      context.setLineDash([]);

      // Draw stub
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

      // Draw faint numbers on the stub
      const ticketNumber = (ticketIndex + 1).toString().padStart(3, '0'); // Generate ticket number
      context.globalAlpha = 0.3; // Faint color
      context.fillStyle = theme === 'light' ? '#000' : '#fff';
      context.font = 'bold 16px "SF Pro Display", system-ui';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.save();
      context.translate(ticketWidth - stubWidth / 2, ticketHeight / 2); // Centering in the stub
      context.rotate(-Math.PI / 2); // Rotate 90 degrees counter-clockwise
      context.fillText(ticketNumber, 0, 0); // Positioning the number at the new origin
      context.restore();

      // Draw perforations inside the ticket
      context.setLineDash([5, 5]); // Dashed line pattern
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
      context.setLineDash([]); // Reset dash pattern

      // Draw text
      context.globalAlpha = 1;
      const maxWidth = ticketWidth - stubWidth - 20; // Account for padding
      let fontSize = 24;
      context.font = `bold ${fontSize}px "SF Pro Display", system-ui`;
      let textWidth = context.measureText(text).width;

      // Adjust font size if text exceeds ticket width
      while (textWidth > maxWidth && fontSize > 10) {
        fontSize -= 1;
        context.font = `bold ${fontSize}px "SF Pro Display", system-ui`;
        textWidth = context.measureText(text).width;
      }

      // Create a darker version of the ticket color
      const darkerColor = color.replace(/^#/, '');
      const r = parseInt(darkerColor.substr(0, 2), 16);
      const g = parseInt(darkerColor.substr(2, 2), 16);
      const b = parseInt(darkerColor.substr(4, 2), 16);
      const darkenFactor = 0.4; // Lower number = darker color
      const darkR = Math.floor(r * darkenFactor);
      const darkG = Math.floor(g * darkenFactor);
      const darkB = Math.floor(b * darkenFactor);
      context.fillStyle = `rgb(${darkR}, ${darkG}, ${darkB})`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, (ticketWidth - stubWidth) / 2, ticketHeight / 2);

      context.restore();
    };

    let animateRef; // Reference to store the animate function

    const animate = () => {
      if (!canvas || !context) return;
      
      context.clearRect(0, 0, width, height);

      // Initialize animation states if not exists
      if (!animateRef.current?.states) {
        // Calculate initial path points
        const numPoints = 100; // Number of points in the path
        const points = [];
        for (let i = 0; i < numPoints; i++) {
          points.push({
            x: Math.random() * width,
            y: Math.random() * height,
          });
        }

        animateRef.current = {
          states: skills.map((_, index) => ({
            pathPosition: index * ((width < 768 ? 20 : 30) / skills.length), // Reduce spacing between tickets
            speed: 1, // Base speed for the train
          })),
          pathPoints: points,
          pathProgress: 0
        };
      }

      const states = animateRef.current.states;
      const points = animateRef.current.pathPoints;

      // Update path progress
      animateRef.current.pathProgress += 0.05; // Controls train speed
      if (animateRef.current.pathProgress >= 100) {
        animateRef.current.pathProgress = 0;
      }

      // Function to get position along the curved path
      const getPositionAlongPath = (progress) => {
        progress = progress % 100;
        const centerY = height / 2;
        const amplitude = height / (width < 768 ? 4 : 6); // Adjust amplitude based on screen width
        const frequency = 2 * Math.PI / width; // How many waves across the screen

        const x = (progress / 100) * width * 2 - width; // Move from left to right
        const y = centerY + Math.sin(x * frequency) * amplitude;

        return { x: (x + width * 2) % width, y };
      };

      // Draw tickets along the path
      states.forEach((state, index) => {
        const position = (animateRef.current.pathProgress + state.pathPosition) % 100;
        const { x, y } = getPositionAlongPath(position);

        // Calculate rotation based on the path direction
        const nextPos = getPositionAlongPath(position + 1);
        const angle = Math.atan2(nextPos.y - y, nextPos.x - x);

        // Draw ticket
        context.save();
        context.globalAlpha = 1;
        drawTicket(x, y, skills[index], colors[index], angle, 0.8, index, index);
        context.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animateRef = animate; // Store the reference

    const resizeCanvas = () => {
      if (!containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.scale(devicePixelRatio, devicePixelRatio);
      
      // Force a redraw after resize using the stored reference
      if (isInitialized && animateRef) {
        animateRef();
      }
    };

    // Initialize canvas size immediately
    resizeCanvas();
    setIsInitialized(true);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme, isInitialized]);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
        willChange: 'transform',
      }}
    >
      <canvas
        aria-hidden
        className={styles.canvas}
        ref={canvasRef}
        style={{ 
          opacity: isInitialized ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
