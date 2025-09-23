'use client';

import { ContactCta } from '@/shared/ui/components/contact-cta';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { ReactNode } from 'react';

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
  return (
    <div className="container">
      <section className="relative mt-[100px] flex px-[75px] pt-[130px] pb-[80px] max-[1095px]:flex-col max-md:mt-0 max-md:px-4 max-md:pt-0 max-md:pb-[60px]">
        <div className="w-[300px] shrink-0 max-md:w-full">
          <Text size="base" color="white" uppercase>
            What We Help You Achieve
          </Text>
        </div>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <Title
              size="7xl"
              className="bg-[linear-gradient(90deg,#FFF_50%,rgba(255,255,255,0.3)_50%)] bg-clip-text leading-[91px] text-transparent max-md:text-[30px] max-md:leading-[39px]"
            >
              Turning complexity into efficiency. <br />
              Turning data into results.
            </Title>
            <Text size="lg" color="white">
              With Elvitix, you gain more than solutions — you gain outcomes
              that consistently scale with your ambitions:
            </Text>
          </div>
          <div className="flex gap-20 max-md:flex-col max-md:gap-0">
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
          </div>
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
