'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

const reviews = [
  {
    text: 'Elvitix helped us streamline complex workflows, boosting performance and improving data quality across the board.',
    name: 'Mariana Duarte',
    position: 'Senior Data Engineer, Solaris Group',
  },
  {
    text: 'We were drowning in disconnected systems and unreliable reporting. Elvitix restructured our data architecture, and now we operate with complete visibility and faster decision-making.',
    name: 'Laura Sánchez',
    position: 'Head of Digital Transformation, Natura',
  },
  {
    text: "Partnering with Elvitix allowed us to scale our credit engine faster than we imagined. They didn't just solve technical issues — they brought new strategic perspectives to the table.",
    name: 'Michael Braun',
    position: 'Data Platform Director, Copa Energia',
  },
  {
    text: 'Our compliance challenges in pharma were slowing down trials. Elvitix introduced AI-driven governance models that helped us maintain accuracy and compliance while cutting down review cycles.',
    name: 'Dr. Anika Weber',
    position: 'Clinical Data Lead, Bayer Pharmaceuticals',
  },
  {
    text: "With Elvitix's support, we reduced our customer churn by 15% in just six months. Their personalized approach to retail analytics gave us sharper forecasting and deeper engagement insights.",
    name: 'Kenji Matsuda',
    position: 'VP of Customer Experience, Nespresso',
  },
];

export const ClientImpact = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  return (
    <section className="my-[100px] bg-[#1B1B1B] max-md:my-0">
      <div className="container">
        <section className="flex flex-col gap-[60px] px-[6vw] pt-[100px] pb-[80px] max-md:gap-[30px] max-md:px-4 max-md:py-[50px]">
          <div className="flex flex-col text-center">
            <Text size="base" color="white" uppercase>
              Client Impact
            </Text>
            <Title
              size="7xl"
              className="bg-[linear-gradient(90deg,#FFF_50%,rgba(255,255,255,0.3)_50%)] bg-clip-text leading-[91px] text-transparent max-md:text-[30px] max-md:leading-[39px]"
            >
              Real stories. Real results.
            </Title>
          </div>
          <div className="relative flex flex-col items-center gap-[45px] max-md:gap-8">
            <QuoteIcon />
            <div className="embla w-full overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex w-full gap-6">
                {reviews.map((review, index) => (
                  <div
                    className="embla__slide flex w-full flex-shrink-0 cursor-grabbing flex-col items-center text-center select-none max-md:px-4"
                    key={index}
                  >
                    <Text
                      size="xl"
                      color="grey"
                      className="mb-4 max-md:text-base"
                    >
                      {review.text}
                    </Text>
                    <div className="flex flex-col text-center">
                      <Text size="xl" color="white" className="max-md:text-lg">
                        {review.name}
                      </Text>
                      <Text
                        size="base"
                        color="white"
                        className="max-md:text-sm"
                      >
                        {review.position}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="76"
    height="76"
    viewBox="0 0 76 76"
    fill="none"
  >
    <path
      d="M40.73 62.25V37.6875L55.355 14.25H68.105L56.855 36.1875H68.105V62.25H40.73ZM7.54248 62.25V37.6875L21.98 14.25H34.9175L23.48 36.1875H34.9175V62.25H7.54248Z"
      fill="#FCC80D"
    />
  </svg>
);
