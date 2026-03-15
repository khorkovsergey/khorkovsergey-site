'use client';

import { I18nProvider } from '../lib/i18n';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Career } from '../components/Career';
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
      <Header />
      <main>
        <Hero />
        <Career />
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

