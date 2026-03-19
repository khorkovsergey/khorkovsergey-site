import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'Сергей Хорьков — продукты, проекты, операции',
  description: 'Продуктовый лидер с опытом в проектном управлении, цифровой трансформации, операциях и финансах.',
  openGraph: {
    title: 'Сергей Хорьков — продукты, проекты, операции',
    description: 'Продуктовый лидер с опытом в проектном управлении, цифровой трансформации, операциях и финансах.',
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
      <body className="antialiased">{children}<Analytics /></body>
    </html>
  );
}
