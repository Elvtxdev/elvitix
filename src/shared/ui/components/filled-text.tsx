'use client';
import { cn } from '@/shared/lib/utils/cn';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { useMemo } from 'react';

export const FilledText = ({
  text,
  progress,
  className,
}: {
  text: string;
  progress: MotionValue<number>;
  className?: string;
}) => {
  const words = useMemo(() => text.split(' '), [text]);

  return (
    <span className={cn('flex flex-wrap gap-x-1', className)}>
      {words.map((word, wi) => {
        const start = wi / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={wi} word={word} range={[start, end]} progress={progress} />
        );
      })}
    </span>
  );
};

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const characters = useMemo(() => word.split(''), [word]);
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="relative">
      {characters.map((character, ci) => {
        const start = range[0] + ci * step;
        const end = range[0] + (ci + 1) * step;
        return (
          <Character
            key={ci}
            character={character}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
      <span>&nbsp;</span>
    </span>
  );
};

const Character = ({
  character,
  range,
  progress,
}: {
  character: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative">
      <span className="absolute opacity-10">{character}</span>
      <motion.span style={{ opacity }}>{character}</motion.span>
    </span>
  );
};
