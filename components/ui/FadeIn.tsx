'use client';

import { useFadeIn } from '@/lib/useFadeIn';
import { ReactNode, CSSProperties } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeIn({ children, delay, threshold = 0.15, className = '', style = {} }: FadeInProps) {
  const ref = useFadeIn(threshold);
  return (
    <div
      ref={ref}
      className={`fade-in ${className}`}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}
    >
      {children}
    </div>
  );
}
