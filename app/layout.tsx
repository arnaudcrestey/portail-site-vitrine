import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';
import { SiteChrome } from '@/components/site-chrome';

export const metadata: Metadata = {
  metadataBase: new URL('https://arnaudcrestey.com'),
  title: {
    default: 'arnaudcrestey.com — systèmes numériques premium au service de l’humain',
    template: '%s — arnaudcrestey.com',
  },
  description:
    'Arnaud Crestey conçoit des diagnostics interactifs, mini-sites, automatisations et expériences digitales premium pour les particuliers et les professionnels.',
  openGraph: {
    title: 'arnaudcrestey.com',
    description:
      'Un portail premium pour présenter Cabinet Astrae, les solutions de diagnostics et automatisations, et un laboratoire de concepts digitaux.',
    url: 'https://arnaudcrestey.com',
    siteName: 'arnaudcrestey.com',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'arnaudcrestey.com',
    description:
      'Des systèmes digitaux utiles, élégants et crédibles au service de l’humain et de la transformation.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
