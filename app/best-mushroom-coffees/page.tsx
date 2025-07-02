'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar'; // Import Navbar component
import Link from 'next/link';

const products = [
  {
    title: 'Four Sigmatic Original Mushroom Coffee',  // Updated title
    subtitle: 'Best Overall Mushroom Coffee',  // Updated subtitle
    image: '/images/foursigmatic-original.jpg',
    description: `Four Sigmatic’s Original Mushroom Coffee is a potent, mushroom-forward blend that supports energy, focus, immunity, and digestion with 1500mg of functional mushrooms. While it contains a small amount of instant coffee to balance flavor, the real magic is in its high dose of Lion’s Mane, Chaga, Turkey Tail, and Reishi — plus prebiotics and probiotics.`,
    pros: [
      'Highest mushroom dose per serving',
      'Includes coconut creamer and pre/probiotics',
      'Balanced sweetness with zero crash',
      'Clinically-backed and highly rated'
    ],
    cons: [
      'Instant only (not brewed)',
      'Less coffee flavor for purists'
    ],
    asin: 'B0CGG395RP',
    tag: 'bestonamz0e-20',
    topPick: true
  },
  {
    title: 'Four Sigmatic Focus Ground Coffee',  // Updated title
    subtitle: 'Best Mushroom Coffee for Taste',  // Updated subtitle
    image: '/images/foursigmatic-focus.jpg',
    description: `This organic ground coffee is for those who love the real coffee brewing experience but want added nootropic benefits. It’s made from single-origin, fair-trade Honduran beans and enhanced with 250mg of Lion’s Mane and wild-harvested Chaga. Smooth, full-bodied, and brewed like traditional coffee.`,
    pros: [
      'Brews like normal coffee (drip, French press, pour-over)',
      'High-quality beans + light mushroom dose',
      'Low acid and great flavor for daily drinking'
    ],
    cons: [
      'Requires a coffee maker',
      'Lower mushroom content vs. Original'
    ],
    asin: 'B0756D1D39',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'RYZE Mushroom Coffee',  // Updated title
    subtitle: 'Most Popular Mushroom Coffee',  // Updated subtitle
    image: '/images/ryze.jpg',
    description: `RYZE is a full-spectrum instant mushroom coffee with 2000mg of functional fungi: Cordyceps, Lion’s Mane, Turkey Tail, Shiitake, King Trumpet, and Reishi. It’s strong on earthy flavor and includes MCT oil for brain fuel. USDA Organic and grown in California.`,
    pros: [
      '6 types of mushrooms + MCT oil',
      'USDA Organic, USA-grown',
      'High beta-glucan content'
    ],
    cons: [
      'Earthy flavor may be intense for some',
      'Less smooth than Four Sigmatic blends'
    ],
    asin: 'B09Q38X21H',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'Everyday Dose',  // Updated title
    subtitle: 'Best for Mushroom Lovers',  // Updated subtitle
    image: '/images/everydaydose.jpg',
    description: `Everyday Dose combines low-caffeine coffee extract with collagen, L-Theanine, Chaga, and Lion’s Mane. Designed for mushroom lovers who want to enjoy a healthy, functional coffee alternative, it’s especially popular for gut, skin, and brain support.`,
    pros: [
      'Includes collagen for skin and joints',
      'Very low caffeine (80% less)',
      'Balanced focus and calm from L-Theanine'
    ],
    cons: [
      'Light coffee flavor',
      'Best used with two scoops for full benefit'
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
        <meta name="description" content="Compare the best mushroom coffee blends on Amazon. Discover adaptogenic brews from Four Sigmatic, RYZE, and more to boost focus and immunity without the crash." />
      </Head>

      <main className="bg-white text-gray-900 font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Main Section */}
        <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
          {/* Hidden SEO Title and Description */}
          <div className="sr-only">
            <h2 className="text-3xl font-bold mb-4 text-center">Top Mushroom Coffee Brands (Updated 2025)</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-center">
              Looking to boost mental clarity, immune health, and creativity? We reviewed the top mushroom coffee brands on Amazon to help you find the best-tasting and most effective blends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.asin} className={`p-6 bg-white border shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 ${p.topPick ? 'border-4 border-yellow-500' : ''} ${p.bestValue ? 'border-4 border-green-500' : ''}`}>
                {p.topPick && (
                  <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                    Top Pick
                  </div>
                )}
                {p.bestValue && (
                  <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                    Best Value
                  </div>
                )}
                <div className="flex justify-center mb-4">
                  <img src={p.image} alt={p.title} className="rounded h-64 w-auto object-contain" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">{p.title}</h3>
                <h4 className="text-lg font-medium mb-4 text-center text-gray-600">{p.subtitle}</h4>

                {/* Button moved up */}
                <div className="flex justify-center mb-4">
                  <a
                    href={`https://${amazonDomain}/dp/${p.asin}/ref=nosim?tag=${p.tag}`}
                    className="inline-block bg-gray-800 text-white px-6 py-3 text-sm rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                    target="_blank" rel="nofollow sponsored"
                  >
                    Check Price on Amazon
                  </a>
                </div>

                <hr className="mb-4 border-gray-300" />
                <p className="text-md text-gray-700 mb-4">{p.description}</p>

                {/* Pros and Cons in rows with borders */}
                <div className="grid grid-cols-1 gap-4 mb-4 border-t pt-4">
                  <div>
                    <strong className="text-green-700 block">Pros:</strong>
                    <ul className="list-disc list-inside text-sm text-green-800">
                      {p.pros.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-red-700 block">Cons:</strong>
                    <ul className="list-disc list-inside text-sm text-red-800">
                      {p.cons.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 border-t mt-10 py-8 text-center text-sm text-gray-600">
          <div className="mb-2">© {new Date().getFullYear()} BestOnAmz.com – All rights reserved.</div>
          <div>As an Amazon Associate, we earn from qualifying purchases.</div>
        </footer>
      </main>
    </>
  );
}
