'use client';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const UltraSmoothScroll = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Wait for DOM to be ready
    const initializeEnhancements = () => {
      // Enhanced smooth scrolling with momentum
      let isScrolling = false;
      let scrollTimeout: NodeJS.Timeout;

      const handleScroll = () => {
        if (!isScrolling) {
          // Add smooth momentum effect
          if (document.body) {
            document.body.style.transform = 'translateZ(0)';
            document.body.style.willChange = 'transform';
          }
          isScrolling = true;
        }

        // Clear timeout and set new one
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (document.body) {
            document.body.style.willChange = 'auto';
          }
          isScrolling = false;
        }, 150);
      };

      // Smooth resize handling
      const handleResize = () => {
        if (document.body) {
          gsap.set('body', { clearProps: 'all' });
        }
      };

      // Add event listeners
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        clearTimeout(scrollTimeout);
      };
    };

    // Initialize after DOM is ready
    const timeoutId = setTimeout(initializeEnhancements, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isClient]);

  return null;
};

export default UltraSmoothScroll;