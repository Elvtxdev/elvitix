import { Metadata } from 'next';
import {
  ClientImpact,
  DataSection,
  Hero,
  Industries,
  WhatWeHelp,
} from './components';

export const metadata: Metadata = {
  title: 'Elvitix | Data Engineering & AI Solutions for Modern Enterprises',
  description:
    'Elvitix helps businesses transform complex data into clarity and measurable outcomes. We deliver modern data architectures, real-time insights, AI readiness, and governance solutions that drive sustainable growth.',
  openGraph: {
    title: 'Elvitix | Data Engineering & AI Solutions for Modern Enterprises',
    description:
      'Elvitix helps businesses transform complex data into clarity and measurable outcomes. We deliver modern data architectures, real-time insights, AI readiness, and governance solutions that drive sustainable growth.',
  },
  twitter: {
    title: 'Elvitix | Data Engineering & AI Solutions for Modern Enterprises',
    description:
      'Elvitix helps businesses transform complex data into clarity and measurable outcomes. We deliver modern data architectures, real-time insights, AI readiness, and governance solutions that drive sustainable growth.',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <DataSection />
      <WhatWeHelp />
      <ClientImpact />
      <Industries />
    </main>
  );
}
