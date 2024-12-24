import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
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

export const TicketsSkills = props => {
  const { theme } = useTheme();
  const canvasRef = useRef();
  const containerRef = useRef();
  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef();
  const spreadProgress = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const { width, height } = canvas;

    const drawTicket = (x, y, text, color, rotation, scale, index) => {
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
      const ticketNumber = (index + 1).toString().padStart(3, '0'); // Generate ticket number
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

    const containerStyle = {
      position: 'absolute',
      width: '50%',
      height: '15%',
      right: 0,
      top: '0px', // Set desired initial position
      zIndex: 1,
    };

    // Apply the style to the container
    containerRef.current.style.cssText = `position: ${containerStyle.position}; width: ${containerStyle.width}; height: ${containerStyle.height}; right: ${containerStyle.right}; top: ${containerStyle.top}; z-index: ${containerStyle.zIndex};`;

    const animate = () => {
      context.clearRect(0, 0, width, height);

      // Update spread progress with smooth transition
      const targetProgress = isHovering ? 1 : 0;
      spreadProgress.current += (targetProgress - spreadProgress.current) * 0.1;

      // Draw tickets in a scattered pile or circle based on hover state
      skills.forEach((skill, index) => {
        const centerX = width / 2;
        const centerY = height / 2;
        
        // Calculate angles for both states
        const defaultAngle = (Math.PI / 6) * (index - skills.length / 2);
        const fullCircleAngle = (2 * Math.PI * index) / skills.length - Math.PI / 2;

        // Interpolate between the two angles based on spread progress
        const currentAngle = defaultAngle * (1 - spreadProgress.current) + 
                           fullCircleAngle * spreadProgress.current;

        // Adjust radius based on spread progress
        const defaultRadius = 20 * index;
        const spreadRadius = Math.min(width, height) * 0.25; // Consistent radius when spread
        const currentRadius = defaultRadius * (1 - spreadProgress.current) + 
                            spreadRadius * spreadProgress.current;

        const x = centerX + Math.cos(currentAngle) * currentRadius;
        const y = centerY + Math.sin(currentAngle) * currentRadius;

        // Rotate tickets to face outward when spread
        const defaultRotation = defaultAngle * 0.5;
        const spreadRotation = currentAngle + Math.PI / 2;
        const currentRotation = defaultRotation * (1 - spreadProgress.current) + 
                              spreadRotation * spreadProgress.current;

        // Scale up slightly when spread
        const scale = 1 + (spreadProgress.current * 0.2);

        drawTicket(x, y, skill, colors[index], currentRotation, scale);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = (event.clientX - rect.left) * (canvas.width / rect.width);
      const mouseY = (event.clientY - rect.top) * (canvas.height / rect.height);
      
      // Check if mouse is in the general ticket area
      const centerX = width / 2;
      const centerY = height / 2;
      const dx = mouseX - centerX;
      const dy = mouseY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Adjust this radius based on your layout
      const interactionRadius = Math.min(width, height) * 0.3;
      setIsHovering(distance < interactionRadius);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', () => setIsHovering(false));
    
    const resizeCanvas = () => {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.scale(devicePixelRatio, devicePixelRatio);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', () => setIsHovering(false));
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [theme, isHovering]);

  return (
    <Transition in timeout={3000} nodeRef={canvasRef}>
      {({ visible, nodeRef }) => (
        <div
          className={styles.container}
          ref={containerRef}
        >
          <canvas
            aria-hidden
            className={styles.canvas}
            data-visible={visible}
            ref={nodeRef}
            {...props}
          />
        </div>
      )}
    </Transition>
  );
};
