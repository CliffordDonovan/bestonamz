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
export const metadata = {
  title: 'BestOnAmz – Honest Amazon Product Reviews',
  description: 'Explore the best Amazon products with expert-reviewed, SEO-rich affiliate content. Updated for 2025.',
};

}