import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Сергей Хорьков — продукт, платформы, трансформация, операции',
  description: 'Кросс-функциональный лидер с опытом в продуктовом управлении, платформенном развитии, цифровой трансформации, операциях и финансовом управлении.',
  openGraph: {
    title: 'Сергей Хорьков | Продукт · Платформы · Трансформация',
    description: 'Практический опыт на стыке продукта, технологий, операций и финансов.',
    type: 'website',
    url: 'https://khorkovsergey.com',
    locale: 'ru_RU',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
