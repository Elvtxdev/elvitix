'use client';

import Link from 'next/link';
import { Text } from '@/shared/ui/kit/text';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

export const ContactCta = ({ label }: { label: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const springX = useSpring(x, { stiffness: 200, damping: 25 });
  const springY = useSpring(y, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    const radius = 30;
    const factor = 0.2;

    let moveX = offsetX * factor;
    let moveY = offsetY * factor;

    const distance = Math.sqrt(moveX ** 2 + moveY ** 2);
    if (distance > radius) {
      const angle = Math.atan2(moveY, moveX);
      moveX = Math.cos(angle) * radius;
      moveY = Math.sin(angle) * radius;
    }

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 }, // start further down
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2 }, // slower fade-in
    },
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInUp}
    >
      <Link
        href="#contact"
        className="bg-primary flex h-[197px] w-[197px] flex-col items-center justify-center rounded-full px-6 text-center transition-shadow duration-300 hover:shadow-lg"
      >
        <Text color="black" size="lg" weight={500} uppercase>
          {label}
        </Text>
      </Link>
    </motion.div>
  );
};
