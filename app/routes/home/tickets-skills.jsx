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
    if (!canvasRef.current || !containerRef.current) return;

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

      // Initialize animateRef.current if not exists
      if (!animateRef.current) {
        animateRef.current = {
          isHovered: false,
          isAnimating: false
        };
      }

      // Initialize animation states if not exists
      if (!animateRef.current.states) {
        animateRef.current.states = skills.map((_, index) => ({
          currentAngle: (Math.PI / 6) * (index - skills.length / 2),
          currentRadius: 20 * index
        }));
      }

      // Track if animation is complete
      let isAnimationComplete = true;

      // Calculate which ticket should be highlighted based on mouse position
      const containerHeight = canvas.height;
      const sectionHeight = containerHeight / skills.length;
      const activeIndex = mouseY !== null ? Math.floor(mouseY / sectionHeight) : null;
      
      // Update hover state
      const newHoverState = mouseY !== null;
      if (newHoverState !== animateRef.current.isHovered) {
        animateRef.current.isHovered = newHoverState;
        animateRef.current.isAnimating = true;
      }

      // First, draw all non-active tickets from back to front
      [...skills].reverse().forEach((skill, idx) => {
        const index = skills.length - 1 - idx; // Convert back to original index

        const centerX = width / 2;
        const centerY = height / 2;
        
        // Target values for hovered state
        const hoveredAngle = (2 * Math.PI / skills.length) * index;
        const hoveredRadius = 100;
        
        // Default values for non-hovered state
        const defaultAngle = (Math.PI / 6) * (index - skills.length / 2);
        const defaultRadius = 20 * index;

        // Lerp factor - adjust this value to control animation speed
        const lerpFactor = 0.15; // Slowed down a bit for smoother animation
        
        // Get current state
        const state = animateRef.current.states[index];
        
        // Calculate target values based on current hover state
        const targetAngle = animateRef.current.isHovered ? hoveredAngle : defaultAngle;
        const targetRadius = animateRef.current.isHovered ? hoveredRadius : defaultRadius;
        
        // Lerp function
        const lerp = (start, end, t) => start + (end - start) * t;
        
        // Always update positions when animating
        if (animateRef.current.isAnimating) {
          // Update current values
          state.currentAngle = lerp(state.currentAngle, targetAngle, lerpFactor);
          state.currentRadius = lerp(state.currentRadius, targetRadius, lerpFactor);
          
          // Check if this item is still animating
          const isAngleComplete = Math.abs(state.currentAngle - targetAngle) < 0.01;
          const isRadiusComplete = Math.abs(state.currentRadius - targetRadius) < 0.1;
          isAnimationComplete = isAnimationComplete && isAngleComplete && isRadiusComplete;
        }
        
        const x = centerX + Math.cos(state.currentAngle) * state.currentRadius;
        const y = centerY + Math.sin(state.currentAngle) * state.currentRadius;
        
        const baseRotation = state.currentAngle;

        // Calculate fade based on distance from active
        const distanceFromActive = activeIndex !== null ? Math.abs(index - activeIndex) : null;
        const fadeAmount = distanceFromActive !== null ? Math.max(0.3, 1 - distanceFromActive * 0.2) : 1;
        
        context.save();
        context.globalAlpha = fadeAmount;
        drawTicket(x, y, skill, colors[index], baseRotation, 1, index, index);
        context.restore();
      });

      // Stop animation if complete
      if (isAnimationComplete && animateRef.current.isAnimating) {
        animateRef.current.isAnimating = false;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animateRef = animate; // Store the reference

    const handleMouseMove = (event) => {
      if (!animateRef.current?.isAnimating) {  
        const rect = canvas.getBoundingClientRect();
        const relativeY = (event.clientY - rect.top) * (canvas.height / rect.height);
        
        // Calculate the vertical range where tickets are visible
        const ticketSpacing = 40; 
        const totalTicketHeight = ticketSpacing * (skills.length - 1);
        const verticalPadding = 20; 
        
        // Calculate the bounds of the interactive area
        const minY = height / 2 - totalTicketHeight / 2 - verticalPadding;
        const maxY = height / 2 + totalTicketHeight / 2 + verticalPadding;
        
        // Only set mouseY if within the valid range and state would actually change
        if (relativeY >= minY && relativeY <= maxY) {
          // Normalize the position relative to the ticket area
          const normalizedY = (relativeY - minY) / (maxY - minY) * canvas.height;
          
          // Only update if the hover state would change
          if (mouseY === null) {
            setMouseY(normalizedY);
          }
        } else if (mouseY !== null) {
          setMouseY(null);
        }
      }
    };

    const handleMouseLeave = () => {
      if (mouseY !== null) {
        // Force animation state when leaving
        if (animateRef.current) {
          animateRef.current.isHovered = false;
          animateRef.current.isAnimating = true;
        }
        setMouseY(null);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

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
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme, isInitialized, mouseY]);

  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ 
        position: 'absolute',
        width: '50%',
        height: '15%',
        right: 0,
        top: '0px',
        transform: 'translateY(0)',
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
        }}
      />
    </div>
  );
};
