import { NextSeo } from 'next-seo';
import SEO from './seo-config';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextSeo {...SEO} />
        {children}
      </body>
    </html>
  );
}