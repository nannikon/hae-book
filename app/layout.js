import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  metadataBase: new URL('https://hae-book.vercel.app'),

  title: 'HÆ?! — Norwegian for Real Life',
  description: 'The Norwegian Survival Guide Nobody Gave You.',

  openGraph: {
    title: 'HÆ?! — Norwegian for Real Life',
    description: 'The Norwegian Survival Guide Nobody Gave You.',
    url: 'https://hae-book.vercel.app',
    siteName: 'HÆ?! — Norwegian for Real Life',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HÆ?! — Norwegian for Real Life by Nanny Thorvaldsen',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'HÆ?! — Norwegian for Real Life',
    description: 'The Norwegian Survival Guide Nobody Gave You.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
