import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Что на меня повлияло — Сергей Хорьков',
  description: 'Книги, люди и события, которые формировали мышление, подход к управлению и развитие профессиональной философии.',
};

export default function InfluencesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
