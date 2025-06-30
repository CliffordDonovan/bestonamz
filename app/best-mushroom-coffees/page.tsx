'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const products = [
  {
    title: 'Four Sigmatic Original – Best Overall',
    image: '/images/foursigmatic-original.jpg',
    description: `Enjoy crash-free mental focus and smooth energy with Four Sigmatic’s Focus Organic Mushroom Coffee. Each serving includes 1,500mg of functional mushrooms—Lion's Mane, Chaga, Turkey Tail, and Reishi—combined with prebiotics and probiotics. Enhanced with coconut creamer and natural sweetness for digestive and cognitive support.`,
    pros: [
      'Includes coconut creamer for smoother taste',
      'Full-spectrum mushrooms + probiotics',
      'Zero crash or jitters',
      '94% of buyers say it works'
    ],
    cons: [
      'Instant only – not suitable for traditional brew',
      'Pricier than standard coffee'
    ],
    asin: 'B0CGG395RP',
    tag: 'bestonamz0e-20',
    topPick: true
  },
  {
    title: 'Four Sigmatic Ground Focus – Best for Brew Lovers',
    image: '/images/foursigmatic-focus.jpg',
    description: `Premium organic fair-trade ground coffee from Honduras with 250mg Lion’s Mane and wild-harvested Chaga. Full-bodied, low-acid brew that supports immunity and clarity with no crash or mycelium fillers.`,
    pros: [
      'Full-bodied ground coffee experience',
      'Antioxidant-rich Chaga + Lion’s Mane',
      'Single-origin beans from Marcala'
    ],
    cons: [
      'Needs brewing gear (pour-over, drip)',
      'Stronger mushroom taste for some'
    ],
    asin: 'B0756D1D39',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'RYZE Mushroom Coffee',
    image: '/images/ryze.jpg',
    description: `RYZE blends 6 mushrooms (Cordyceps, Reishi, Lion’s Mane, Turkey Tail, Shiitake, King Trumpet) with Arabica coffee and MCT oil. USDA Organic and grown in California with 25%+ beta-glucans. Pure and powerful, but earthy taste isn’t for everyone.`,
    pros: [
      '6 mushrooms + MCT oil for clarity',
      'USDA Organic + California grown',
      '25%+ beta-glucans for immune support'
    ],
    cons: [
      'Strong earthy flavor',
      'Less smooth than Four Sigmatic'
    ],
    asin: 'B09Q38X21H',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'Everyday Dose',
    image: '/images/everydaydose.jpg',
    description: `Low-caffeine blend with collagen, L-Theanine, and fruiting-body Chaga and Lion’s Mane. Great for skin and gut health. Smooth and light flavor. 80% less caffeine than coffee, but still energizing.`,
    pros: [
      'Great for skin, joints, and digestion',
      'Low acidity and caffeine',
      'Double-extracted mushrooms'
    ],
    cons: [
      'Lighter coffee flavor',
      'Some may need two scoops'
    ],
    asin: 'B0F1DRXXKR',
    tag: 'bestonamz0e-20'
  }
];

export default function BestMushroomCoffees() {
  const [amazonDomain, setAmazonDomain] = useState('amazon.com');

  useEffect(() => {
    const region = navigator.language.includes('en-CA') ? 'ca' : 'com';
    setAmazonDomain(`amazon.${region}`);
  }, []);

  return (
    <>
      <Head>
        <title>Best Mushroom Coffees on Amazon (2025)</title>
        <meta name="description" content="Compare the best mushroom coffees on Amazon. Four Sigmatic, RYZE, Everyday Dose and more reviewed for energy, clarity and gut health." />
      </Head>

      <main className="bg-white text-gray-900 px-4 md:px-12 py-10 max-w-7xl mx-auto font-sans">
        <header className="flex flex-wrap justify-between items-center mb-10 border-b pb-4 bg-gray-100 px-4 py-3 rounded">
          <div className="flex items-center space-x-3">
            <img src="/images/logo.jpg" alt="Logo" className="w-16 h-16 rounded-full" />
            <h1 className="text-2xl font-bold">BestOnAmz</h1>
          </div>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <input type="search" placeholder="Search..." className="border text-sm px-2 py-1 rounded" />
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Top Mushroom Coffee Brands (Updated June 2025)</h2>
          <p className="text-gray-700 max-w-2xl">
            Looking for the best mushroom coffee on Amazon? We reviewed top brands to help you focus better, boost immunity, and reduce coffee crashes.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
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
                href={`https://${amazonDomain}/dp/${p.asin}?tag=${p.tag}`}
                className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
                target="_blank" rel="nofollow sponsored"
              >
                Check Price on {amazonDomain}
              </a>
            </div>
          ))}
        </section>

        <footer className="text-center text-xs text-gray-500 mt-10 pt-10 border-t">
          As an Amazon Associate, we earn from qualifying purchases.
        </footer>
      </main>
    </>
  );
}