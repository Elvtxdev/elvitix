'use client';

import Image from 'next/image';
import { Text } from '@/shared/ui/kit/text';
import { ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <div className="container" id="contact">
      <footer className="flex flex-col gap-5 px-[75px] pt-[115px] pb-[53px] max-md:px-4 max-md:pt-[50px] max-md:pb-[25px]">
        <section className="flex flex-col gap-10 border-y border-y-white/[0.08] py-[81px] max-md:gap-5 max-md:py-9 max-md:pb-10">
          <Image src="/logo.svg" alt="logo" width={303} height={80} />
          <section className="flex gap-10 max-md:flex-col max-md:gap-5">
            <ul className="flex flex-col gap-5">
              <KeyValue value="DCL Global LLC" />
              <KeyValue label="Registration No. (UEN):" value="4253 LLC 2025" />
              <KeyValue
                label="Address:"
                value="Euro House, Richmond Hill Road, Kingstown, St. Vincent and the Grenadines"
              />
            </ul>
            <ul className="flex flex-col gap-5">
              <KeyValue
                label="Email:"
                value={
                  <Link href="mailto:info@elvitix.io" className="underline">
                    info@elvitix.io
                  </Link>
                }
              />
              <KeyValue
                label="Phone Number:"
                value={
                  <Link href="tel:+442030024084" className="underline">
                    +442030024084
                  </Link>
                }
              />
            </ul>
          </section>
        </section>
        <div className="pt-[30px] max-md:pt-4">
          <Text size="sm" color="grey">
            © {new Date().getFullYear()} Elvitix |{' '}
            <span className="text-white">
              {t('copyright', { fallback: 'All Rights Reserved' })}
            </span>
          </Text>
        </div>
      </footer>
    </div>
  );
};

const KeyValue = ({ label, value }: { label?: string; value: ReactNode }) => (
  <li className="flex w-full max-w-[600px] flex-col gap-2">
    {label && <Text color="grey">{label}</Text>}
    <Text size="2xl" color="white">
      {value}
    </Text>
  </li>
);
