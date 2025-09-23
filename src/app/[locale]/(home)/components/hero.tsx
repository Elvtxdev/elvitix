'use client';

import { Header } from '@/shared/ui/components/header';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  return (
    <section className="relative flex flex-col gap-5 overflow-hidden px-[75px] py-10 max-md:px-4 max-md:pb-[55px]">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="absolute top-0 left-0 z-[1] h-full w-full"
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%)',
        }}
      />
      <div className="z-10 container flex flex-col gap-5">
        <Header />
        <section className="z-10 flex justify-between gap-5 pt-[45px] pb-[100px] max-md:flex-col max-md:pt-0 max-md:pb-5">
          <Text size="lg" className="z-10 w-[600px] max-lg:w-full">
            At Elvitix, we specialize in unlocking the real value of data.
            Whether you’re looking to modernize your architecture, reduce
            inefficiencies, or bring AI into the core of your operations, we
            help transform complexity into clarity.
          </Text>
          <Text
            size="2xl"
            color="primary"
            className="z-10 w-[438px] max-lg:w-full"
          >
            We make data work harder and AI work smarter for your business.
          </Text>
        </section>
        <div className="z-10 pb-[167px] max-md:pb-10">
          <Title
            as="h1"
            className="text-[120px] leading-30 tracking-[-5px] max-md:text-[40px] max-md:leading-10 max-md:tracking-[-2px]"
            uppercase
          >
            Engineering Data That Works, AI That Lasts
          </Title>
        </div>
      </div>
    </section>
  );
};
