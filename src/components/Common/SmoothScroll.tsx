'use client';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';

const SmoothScroll = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Wait for DOM to be fully loaded
    const initializeSmoothing = () => {
      // Initialize GSAP for ultra-smooth animations
      gsap.config({
        force3D: true,
        nullTargetWarn: false,
      });

      const lenis = new Lenis({
        duration: 0.4,
        easing: (t) => {
          // Minimal smooth easing - almost native
          return t;
        },
        wheelMultiplier: 1.5,
        touchMultiplier: 2.0,
      });

      // Sync Lenis with GSAP ticker for maximum smoothness
      const ticker = (time: number) => {
        lenis.raf(time * 1000);
      };
      
      gsap.ticker.add(ticker);

      // Enhanced smooth scrolling for anchor links
      const handleAnchorClick = (e: Event) => {
        const target = e.target as HTMLAnchorElement;
        if (target?.hash) {
          e.preventDefault();
          const element = document.querySelector(target.hash) as HTMLElement;
          if (element) {
            lenis.scrollTo(element, {
              duration: 0.6,
              easing: (t: number) => t,
            });
          }
        }
      };

      // Add smooth anchor scrolling
      document.addEventListener('click', handleAnchorClick);

      // Clean up function
      return () => {
        gsap.ticker.remove(ticker);
        document.removeEventListener('click', handleAnchorClick);
        lenis.destroy();
      };
    };

    // Initialize after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeSmoothing, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isClient]);

  return null;
};

export default SmoothScroll;