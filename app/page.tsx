'use client';

import { AmbientBackground } from '../components/AmbientBackground';
import { ClickFX } from '../components/ClickFX';
import { I18nProvider } from '../lib/i18n';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CareerJourney } from '../components/CareerJourney';
import { Roles } from '../components/Roles';
import { Expertise } from '../components/Expertise';
import { Results } from '../components/Results';
import { Approach } from '../components/Approach';
import { Interests } from '../components/Interests';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { useScrollReveal } from '../lib/useScrollReveal';

export default function Home() {
  return (
    <I18nProvider>
      <PageContent />
    </I18nProvider>
  );
}

function PageContent() {
  useScrollReveal();

  return (
    <>
      <AmbientBackground />
      <ClickFX />
      <Header />
      <main>
        <Hero />
        <CareerJourney />
        <Roles />
        <Expertise />
        <Results />
        <Approach />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}