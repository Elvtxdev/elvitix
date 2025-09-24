'use client';

import { ContactCta } from '@/shared/ui/components/contact-cta';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { FilledText } from '@/shared/ui/components/filled-text';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { useScroll } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

const list = [
  <>
    Build <span className="font-bold">data foundations you can trust</span> for
    every decision.
  </>,
  <>
    Access <span className="font-bold">real-time insights</span> that accelerate
    response and innovation.
  </>,
  <>
    Redesign your architecture for{' '}
    <span className="font-bold">flexibility, performance, and growth</span>.
  </>,
  <>
    Strengthen <span className="font-bold">data governance</span> for compliance
    and long-term stability.
  </>,
  <>
    Optimize workloads and pipelines to{' '}
    <span className="font-bold">maximize efficiency</span>.
  </>,
  <>
    Launch <span className="font-bold">data products that drive ROI</span> and
    new revenue streams.
  </>,
  <>
    Shorten time-to-value with{' '}
    <span className="font-bold">faster deployments and integrations</span>.
  </>,
  <>
    Prepare your organization for{' '}
    <span className="font-bold">seamless AI adoption</span>.
  </>,
];

export const WhatWeHelp = () => {
  const element = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: isMobile
      ? ['start 0.9', 'start 0.5']
      : ['start 0.7', 'start start'],
  });

  return (
    <div className="container" ref={element}>
      <section className="relative mt-[100px] flex px-[75px] pt-[130px] pb-[80px] max-[1095px]:flex-col max-md:mt-0 max-md:px-4 max-md:pt-0 max-md:pb-[60px]">
        <div className="w-[300px] shrink-0 max-md:w-full">
          <FadeIn className="sticky top-3 max-[1090px]:relative max-[1090px]:top-0">
            <Text size="base" color="white" uppercase>
              What We Help You Achieve
            </Text>
          </FadeIn>
        </div>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <Title size="7xl">
              <FilledText
                text="Turning complexity into efficiency."
                className="text-[70px] leading-[91px] max-md:text-[30px] max-md:leading-[39px]"
                progress={scrollYProgress}
              />
              <FilledText
                text="Turning data into results."
                className="text-[70px] leading-[91px] max-md:text-[30px] max-md:leading-[39px]"
                progress={scrollYProgress}
              />
            </Title>
            <Text size="lg" color="white">
              With Elvitix, you gain more than solutions — you gain outcomes
              that consistently scale with your ambitions:
            </Text>
          </div>
          <FadeIn className="flex gap-20 max-md:flex-col max-md:gap-0">
            <ul className="flex flex-col">
              {list.slice(0, 4).map((item, i) => (
                <ListItem key={i} value={item} />
              ))}
            </ul>
            <ul className="flex flex-col">
              {list.slice(4).map((item, i) => (
                <ListItem key={i} value={item} />
              ))}
            </ul>
          </FadeIn>
          <div className="max-md:mx-auto">
            <ContactCta label="Schedule Your Expert Consultation" />
          </div>
        </section>
      </section>
    </div>
  );
};

const ListItem = ({ value }: { value: ReactNode }) => (
  <li className="border-t border-white py-4 last:border-b">
    <Text size="2xl" color="white">
      {value}
    </Text>
  </li>
);
