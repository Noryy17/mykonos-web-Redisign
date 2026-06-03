'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

interface TextRotateProps {
  texts: string[];
  mainClassName?: string;
  splitLevelClassName?: string;
  staggerFrom?: 'first' | 'last' | 'center' | 'random' | number;
  staggerDuration?: number;
  rotationInterval?: number;
  initial?: MotionProps['initial'];
  animate?: MotionProps['animate'];
  exit?: MotionProps['exit'];
  transition?: MotionProps['transition'];
  animatePresenceMode?: 'wait' | 'popLayout' | 'sync';
  animatePresenceInitial?: boolean;
  onNext?: (index: number) => void;
}

export function TextRotate({
  texts,
  mainClassName = '',
  splitLevelClassName = '',
  staggerFrom = 'first',
  staggerDuration = 0.04,
  rotationInterval = 2500,
  initial = { y: '100%', opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: '-100%', opacity: 0 },
  transition,
  animatePresenceMode = 'wait',
  animatePresenceInitial = false,
  onNext,
}: TextRotateProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % texts.length;
      onNext?.(nextIndex);
      return nextIndex;
    });
  }, [texts.length, onNext]);

  useEffect(() => {
    intervalRef.current = setInterval(next, rotationInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, rotationInterval]);

  const currentText = texts[currentIndex];
  const characters = currentText.split('');

  const getStaggerDelay = (index: number, total: number) => {
    if (typeof staggerFrom === 'number') {
      return Math.abs(index - staggerFrom) * staggerDuration;
    }
    switch (staggerFrom) {
      case 'first':
        return index * staggerDuration;
      case 'last':
        return (total - 1 - index) * staggerDuration;
      case 'center': {
        const center = Math.floor(total / 2);
        return Math.abs(index - center) * staggerDuration;
      }
      case 'random':
        return Math.random() * total * staggerDuration;
      default:
        return index * staggerDuration;
    }
  };

  return (
    <div className={`overflow-hidden ${mainClassName}`}>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.div
          key={currentIndex}
          className={`flex ${splitLevelClassName}`}
          style={{ display: 'inline-flex' }}
        >
          {characters.map((char, i) => (
            <motion.span
              key={`${currentIndex}-${i}`}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                duration: 0.4,
                ease: [0.215, 0.61, 0.355, 1],
                delay: getStaggerDelay(i, characters.length),
                ...transition,
              }}
              style={{ display: 'inline-block', whiteSpace: 'pre' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
