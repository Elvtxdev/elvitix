import {
  ClientImpact,
  DataSection,
  Hero,
  Industries,
  WhatWeHelp,
} from './components';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <DataSection />
      <WhatWeHelp />
      <ClientImpact />
      <Industries />
    </main>
  );
}
