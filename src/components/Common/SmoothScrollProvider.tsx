'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import smooth scroll components to prevent SSR issues
const SmoothScroll = dynamic(() => import('./SmoothScroll'), {
  ssr: false,
});

const UltraSmoothScroll = dynamic(() => import('./UltraSmoothScroll'), {
  ssr: false,
});

const SmoothScrollProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SmoothScroll />
      <UltraSmoothScroll />
    </>
  );
};

export default SmoothScrollProvider;