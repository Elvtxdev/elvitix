'use client';

import { FadeIn } from '@/shared/ui/components/fade-in';
import { BankIcon } from '@/shared/ui/icons/bank';
import { ManufactoringIcon } from '@/shared/ui/icons/manufactoring';
import { MedIcon } from '@/shared/ui/icons/med';
import { MediaIcon } from '@/shared/ui/icons/media';
import { RetailIcon } from '@/shared/ui/icons/retail';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { JSX } from 'react';

const items = [
  {
    icon: BankIcon,
    title: 'Finance',
    text: 'Enable real-time risk management, enhance compliance, and accelerate AI innovation across trading, banking, and insurance.',
  },
  {
    icon: MedIcon,
    title: 'Pharmaceuticals',
    text: 'Improve trial efficiency, meet strict regulations, and generate insights that propel breakthroughs.',
  },
  {
    icon: RetailIcon,
    title: 'Retail & Consumer Goods',
    text: 'Personalize customer journeys, reduce churn, optimize supply chains, and forecast demand with accuracy.',
  },
  {
    icon: ManufactoringIcon,
    title: 'Manufacturing',
    text: 'Enhance production visibility, automate maintenance, and drive supply chain resilience.',
  },
  {
    icon: MediaIcon,
    title: 'Media & Entertainment',
    text: 'Deliver targeted content, measure audience engagement, and streamline creative workflows.',
  },
];

export const Industries = () => {
  return (
    <div className="container">
      <section className="flex flex-col gap-20 max-md:gap-10 max-md:pt-10">
        <FadeIn animation="cinematicFadeInDown">
          <Title
            weight={500}
            className="overflow-hidden text-center text-[150px] leading-[149.544px] tracking-[-1.842px] text-[rgba(255,255,255,0.08)] max-md:text-[60px] max-md:leading-[58px]"
            uppercase
          >
            Industries <br /> We Empower
          </Title>
        </FadeIn>
        <FadeIn className="flex gap-2.5 max-md:flex-col max-md:gap-4">
          {items.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </FadeIn>
      </section>
    </div>
  );
};

const Card = ({
  icon: Icon,
  title,
  text,
}: {
  icon: () => JSX.Element;
  title: string;
  text: string;
}) => (
  <article className="flex flex-col gap-8 rounded-[10px] bg-[rgba(28,28,28,0.50)] px-5 py-[30px]">
    <Icon />
    <div className="flex flex-col gap-5">
      <Text size="2xl" color="white">
        {title}
      </Text>
      <Text size="lg" color="grey">
        {text}
      </Text>
    </div>
  </article>
);
