'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const products = [
  {
    title: 'Grace & Stella Pimple Patches – Best Overall',
    image: '/images/grace-stella-patches.jpg',
    description: `Grace & Stella's hydrocolloid patches combine science-backed results with playful design. Infused with tea tree oil and salicylic acid, they fight blemishes while soothing skin. Clinically tested and dermatologist-approved.`,
    pros: [
      'Infused with tea tree oil and salicylic acid',
      'Fun designs: clouds, hearts, flowers',
      'Clinically proven and derm-tested',
      'Vegan and cruelty-free'
    ],
    cons: [
      'May not suit minimalist preferences',
      'Slightly pricier per patch'
    ],
    asin: 'B0CPJMSNL1',
    tag: 'bestonamz0e-20',
    topPick: true
  },
  {
    title: 'Mighty Patch Original by Hero Cosmetics',
    image: '/images/mighty-patch.jpg',
    description: `Mighty Patch is a trusted hydrocolloid sticker that works overnight to shrink whiteheads. Great for sensitive skin and dermatologically tested.`,
    pros: [
      '#1 selling acne patch on Amazon',
      'Absorbs gunk in 6 hours',
      'Works while you sleep',
      'Safe for sensitive skin'
    ],
    cons: [
      'Best for whiteheads only',
      'Peel may tug on dry skin'
    ],
    asin: 'B07B9J2K6N',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'COSRX Acne Pimple Master Patch',
    image: '/images/cosrx-patches.jpg',
    description: `K-beauty favorite with hypoallergenic A.D.F. hydrocolloid. Supports healing while preventing bacteria exposure. Trusted for years globally.`,
    pros: [
      'Gentle and effective healing',
      'Simple, minimal ingredients',
      'Korean cult favorite'
    ],
    cons: [
      'Less invisible under makeup',
      'Not ideal for deep cystic acne'
    ],
    asin: 'B014SAB948',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'Rael Beauty Miracle Patch',
    image: '/images/rael-patches.jpg',
    description: `Rael’s patches are ultra-thin, matte, and blend well under makeup. Hypoallergenic, non-drying, and vegan—ideal for day or night use.`,
    pros: [
      'Thin, seamless application',
      'Great adhesion overnight',
      'Hypoallergenic and vegan'
    ],
    cons: [
      'May roll off oily skin',
      'Takes longer to work for some'
    ],
    asin: 'B07G1VKCND',
    tag: 'bestonamz0e-20'
  }
];

export default function BestPimplePatches() {
  const [amazonDomain, setAmazonDomain] = useState('amazon.com');

  useEffect(() => {
    const region = navigator.language.includes('en-CA') ? 'ca' : 'com';
    setAmazonDomain(`amazon.${region}`);
  }, []);

  return (
    <>
      <Head>
        <title>Best Pimple Patches on Amazon (2025)</title>
        <meta name="description" content="Compare the best hydrocolloid pimple patches on Amazon in 2025 – featuring Grace & Stella, Mighty Patch, COSRX and Rael. Clear skin, fast." />
      </Head>

      <main className="bg-white text-gray-900 font-sans">
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center border-b px-4 py-3 md:px-12 bg-gray-100 shadow-sm">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img src="/images/logo.jpg" alt="BestOnAmz Logo" className="w-16 h-16 rounded-full cursor-pointer" />
            </Link>
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer">BestOnAmz</h1>
            </Link>
          </div>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/best-pimple-patches">Pimple Patches</Link>
            <Link href="/best-mushroom-coffees">Mushroom Coffee</Link>
          </nav>
          <input type="search" placeholder="Search..." className="border text-sm px-2 py-1 rounded" />
        </header>

        {/* Main Section */}
        <section className="px-4 md:px-12 py-10 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Top Hydrocolloid Pimple Patches (2025)</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Want to shrink zits fast and stop picking? We reviewed Amazon’s most trusted acne patches for performance, safety, and value.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p, idx) => (
              <div key={idx} className="p-6 bg-white border shadow rounded-lg">
                {p.topPick && (
                  <div className="bg-yellow-300 text-black text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                    Top Pick
                  </div>
                )}
                <img src={p.image} alt={p.title} className="rounded w-full h-64 object-contain mb-4" />
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{p.description}</p>
                <div className="mb-3">
                  <strong className="text-green-700 block">Pros:</strong>
                  <ul className="list-disc list-inside text-sm text-green-800">
                    {p.pros.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div className="mb-4">
                  <strong className="text-red-700 block">Cons:</strong>
                  <ul className="list-disc list-inside text-sm text-red-800">
                    {p.cons.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <a
                  href={`https://${amazonDomain}/dp/${p.asin}/ref=nosim?tag=${p.tag}`}
                  className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
                  target="_blank" rel="nofollow sponsored"
                >
                  Check Price on {amazonDomain}
                </a>
              </div>
            ))}
          </div>
        </section>

        <footer className="bg-gray-100 border-t mt-10 py-8 text-center text-sm text-gray-600">
          <div className="mb-2">© {new Date().getFullYear()} BestOnAmz.com – All rights reserved.</div>
          <div>As an Amazon Associate, we earn from qualifying purchases.</div>
        </footer>
      </main>
    </>
  );
}
