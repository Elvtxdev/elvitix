'use client';

import Image from 'next/image';

export const Header = () => {
  return (
    <header className="z-20 flex items-center justify-between">
      <Image src="/logo.svg" alt="logo" width={167} height={44} />
    </header>
  );
};
