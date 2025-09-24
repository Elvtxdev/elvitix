'use client';

import { ContactCta } from '@/shared/ui/components/contact-cta';
import { FadeIn } from '@/shared/ui/components/fade-in';
import { FilledText } from '@/shared/ui/components/filled-text';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const achievements = [
  {
    number: 10,
    title: 'Years of Experience',
    text: 'delivering solutions across industries',
  },
  {
    number: 500,
    title: 'Certified Experts',
    text: 'engineers, consultants, and strategists ready to step in',
  },
  {
    number: 1000,
    title: 'Successful Engagements',
    text: 'from rapid pilots to enterprise-scale programs',
  },
];

export const DataSection = () => {
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
      <section className="relative mt-[100px] flex px-[75px] pt-[130px] pb-[80px] max-[1095px]:flex-col max-md:mt-0 max-md:px-4 max-md:py-[60px] max-md:pb-[60px]">
        <div className="w-[300px] shrink-0 max-md:w-full">
          <FadeIn className="sticky top-3 max-[1090px]:relative max-[1090px]:top-0">
            <Text size="base" color="white" uppercase>
              Why Businesses Choose Elvitix
            </Text>
          </FadeIn>
        </div>
        <section className="flex flex-col gap-[85px]">
          <div className="flex flex-col gap-2">
            <Title size="7xl">
              <FilledText
                text="From tangled data to tangible results."
                className="text-[70px] leading-[91px] max-md:text-[30px] max-md:leading-[39px]"
                progress={scrollYProgress}
              />
            </Title>
            <Text size="lg" color="white">
              Most organizations struggle not because they lack data, but
              because their data is unreliable, scattered, or outdated. At
              Elvitix, we fix that. We ensure your data is structured,
              consistent, and actionable so you can focus on growth instead of
              firefighting.
            </Text>
          </div>
          <FadeIn className="flex gap-20 max-md:flex-col">
            <ul className="flex flex-col gap-10">
              {achievements.map(item => (
                <Achievement key={item.title} {...item} />
              ))}
            </ul>
            <span className="h-full w-px bg-[rgba(255,255,255,0.08)] max-md:hidden" />
            <section className="flex flex-col gap-[60px] max-md:items-center max-md:gap-[35px] max-md:text-center">
              <Text size="xl" color="grey">
                We’re not just another consulting company. We’re a specialized
                partner that combines technical precision, business acumen, and
                industry insight to create results that last.
              </Text>
              <ContactCta label="Start a Conversation With Us" />
            </section>
          </FadeIn>
        </section>
      </section>
    </div>
  );
};

const Achievement = ({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) => (
  <li className="flex flex-col items-center gap-2.5 text-center">
    <div className="flex">
      <Text color="white" className="text-[100px] leading-none">
        {number}
      </Text>
      <Text color="white" size="4xl">
        +
      </Text>
    </div>
    <div className="flex flex-col gap-1">
      <Text size="2xl" color="white">
        {title}
      </Text>
      <Text size="base" color="white">
        {text}
      </Text>
    </div>
  </li>
);
