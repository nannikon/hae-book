import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
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

  <Script id="meta-pixel" strategy="afterInteractive">
    {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1114579474558989');
      fbq('track', 'PageView');
    `}
  </Script>

  <noscript>
    <img
      height="1"
      width="1"
      style={{ display: 'none' }}
      src="https://www.facebook.com/tr?id=1114579474558989&ev=PageView&noscript=1"
      alt=""
    />
  </noscript>
</body>
</html>
);
}
