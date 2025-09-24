'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { fadeInUp, cinematicFadeInDown } from '@/shared/lib/utils/animations';

export const FadeIn = ({
  children,
  className,
  animation = 'fadeInUp',
}: {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'cinematicFadeInDown';
}) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={animation === 'fadeInUp' ? fadeInUp : cinematicFadeInDown}
    className={className}
  >
    {children}
  </motion.section>
);
