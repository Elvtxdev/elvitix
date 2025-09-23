'use client';

import Link from 'next/link';
import { Text } from '@/shared/ui/kit/text';

export const ContactCta = ({ label }: { label: string }) => (
  <Link
    href="#contact"
    className="bg-primary hover:bg-primary/80 flex h-[197px] w-[197px] flex-col items-center justify-center rounded-full px-6 text-center transition-all duration-300"
  >
    <Text color="black" size="lg" weight={500} uppercase>
      {label}
    </Text>
  </Link>
);
