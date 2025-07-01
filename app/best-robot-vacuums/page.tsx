'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const products = [
  {
    title: 'Ecovacs Deebot X9 Pro Omni',
    subtitle: 'Best Robot Vacuum for Full Automation',
    image: '/images/Deebot-X9.jpg',
    altText: 'Ecovacs Deebot X9 Pro Omni Robot Vacuum with Self-Washing Mop and Advanced AI Navigation',
    description: `The Ecovacs Deebot X9 Pro Omni is the ultimate robot vacuum and mop combo that offers full automation with its self-washing mop, automatic dustbin emptying, and intelligent navigation. With a powerful 16,600Pa suction and advanced AI-driven obstacle avoidance, it ensures your home is spotlessly clean, even in the toughest corners. The OMNI Station allows for hassle-free maintenance with features like auto refilling, hot washing, and drying the mop for up to 150 days of hands-free cleaning.`,
    pros: [
      '16,600Pa BLAST airflow suction for exceptional carpet cleaning',
      'Self-washing mop with OMNI Station',
      'AI-driven 3D navigation for precise obstacle avoidance',
      'Hands-free maintenance for up to 150 days'
    ],
    cons: [
      'Expensive compared to other models',
      'Large size might not fit in all spaces'
    ],
    asin: 'B0DZXFNVQ2',
    tag: 'bestonamz0e-20',
    price: 999.99,
    reviewRating: 4.8,
    reviewCount: 5000,
    topPick: true
  },
  {
    title: 'Mova P10 Pro Ultra',
    subtitle: 'Best Value Robot Vacuum for Powerful Suction',
    image: '/images/Mova-P10.jpg',
    altText: 'Mova P10 Pro Ultra Robot Vacuum with 13,000Pa Suction and Self-Cleaning Mop',
    description: `The Mova P10 Pro Ultra is an exceptional robot vacuum that offers unbeatable value with 13,000Pa suction power and advanced features like auto mop self-cleaning, smart dirt detection, and an all-in-one docking station. The powerful suction and intelligent mopping system make it a top choice for homes with pets and heavy traffic. With its powerful performance and affordable price, the Mova P10 Pro Ultra is the best value option in the market.`,
    pros: [
      '13,000Pa suction power for deep cleaning',
      'Auto mop self-cleaning with hot water',
      'Smart dirt detection to tackle tough messes',
      'Large dust and water tank for extended cleaning'
    ],
    cons: [
      'Less effective for deep carpet cleaning',
      'Not as quiet as premium models'
    ],
    asin: 'B0DGR1VDTB',
    tag: 'bestonamz0e-20',
    price: 599.99,
    reviewRating: 4.7,
    reviewCount: 3000,
    bestValue: true
  },
  {
    title: 'Narwal Freo X Ultra',
    subtitle: 'Best Robot Mop for Hard Floors',
    image: '/images/Narwal-Freo-X.jpg',
    altText: 'Narwal Freo X Ultra Robot Vacuum and Mop Combo with Tri-Laser Obstacle Avoidance and Self-Cleaning Mop',
    description: `The Narwal Freo X Ultra is a powerful robot vacuum and mop combo, ideal for homes with hard floors. It features patented Rouleaux mop heads that apply 12 Newtons of pressure, ensuring deep cleaning and superior mopping performance. With its AI DirtSense technology, it detects dirt levels and keeps scrubbing until floors are spotless. The self-cleaning mop system and Tri-Laser obstacle avoidance provide an advanced, hands-free cleaning experience for maximum convenience.`,
    pros: [
      'Excellent mopping with 12N pressure and self-cleaning mop',
      'Tri-Laser obstacle avoidance for precise navigation',
      'AI DirtSense for targeted cleaning',
      'No need for manual maintenance thanks to the docking station'
    ],
    cons: [
      'Limited carpet cleaning performance',
      'Higher price point for its class'
    ],
    asin: 'B0CPLP422K',
    tag: 'bestonamz0e-20',
    price: 899.99,
    reviewRating: 4.5,
    reviewCount: 2000
  },
  {
    title: 'Dreame X50 Ultra',
    subtitle: 'Best Robot Vacuum for Quiet Operation',
    image: '/images/Dreame-X50.jpg',
    altText: 'Dreame X50 Ultra Robot Vacuum with Powerful Suction and Retractable Legs for Threshold Crossing',
    description: `The Dreame X50 Ultra is built for those who want powerful suction without the noise. Featuring 20,000Pa suction and a unique retractable leg system, it can cross thresholds up to 2.36 inches, making it ideal for homes with varying floor types. Its DuoBrush system is designed to eliminate tangles, and its quiet operation ensures you can clean without disruption. This model combines high performance with innovative features, making it a great option for efficient, quiet cleaning.`,
    pros: [
      '20,000Pa suction for deep cleaning',
      'Retractable legs for crossing thresholds',
      'Quiet operation with low noise levels',
      'DuoBrush system prevents hair tangles'
    ],
    cons: [
      'Not the best for mopping',
      'Larger size may struggle with narrow spaces'
    ],
    asin: 'B0DM5J52GC',
    tag: 'bestonamz0e-20',
    price: 799.99,
    reviewRating: 4.6,
    reviewCount: 2500
  },
  {
    title: 'Roborock Saros 10R',
    subtitle: 'Best Robot Vacuum for Deep Carpet Cleaning',
    image: '/images/Roborock-Saros-10R.jpg',
    altText: 'Roborock Saros 10R Robot Vacuum with Ultra-Slim Profile and Advanced Suction Power',
    description: `The Roborock Saros 10R is perfect for deep carpet cleaning with its advanced StarSight Autonomous System 2.0 and 22,000Pa suction. This ultra-slim model is only 3.14 inches tall and can easily glide under most furniture. Equipped with cutting-edge AI-powered obstacle avoidance and the AdaptiLift chassis, it can cross thresholds and navigate over carpets without wetting them. The 10R's multi-functional dock allows for automated cleaning, mopping, and dustbin emptying for a truly hands-free experience.`,
    pros: [
      '22,000Pa suction for deep cleaning',
      'Ultra-slim profile (3.14 inches tall) fits under most furniture',
      'Advanced obstacle avoidance with StarSight Autonomous System 2.0',
      'Hands-free cleaning with a multifunctional dock'
    ],
    cons: [
      'Higher price point',
      'May not be ideal for homes with a lot of stairs'
    ],
    asin: 'B0DHCJ571Z',
    tag: 'bestonamz0e-20',
    price: 1199.99,
    reviewRating: 4.9,
    reviewCount: 3500
  }
];

export default function BestRobotVacuums() {
  const [amazonDomain, setAmazonDomain] = useState('amazon.com');

  useEffect(() => {
    const region = navigator.language.includes('en-CA') ? 'ca' : 'com';
    setAmazonDomain(`amazon.${region}`);
  }, []);

  return (
    <>
      <Head>
        <title>Best Robot Vacuums – Top Robot Vacuums for 2025</title>
        <meta name="description" content="Explore the top robot vacuums for 2025. We review the best robot vacuum models from Ecovacs, Mova, Narwal, and Dreame, based on expert reviews and user feedback for optimal performance." />
      </Head>

      <main className="bg-white text-gray-900 font-sans">
        {/* Header */}
        <header className="flex justify-between items-center border-b px-4 py-3 md:px-12 bg-gray-100 shadow-sm sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img src="/images/logo.jpg" alt="BestOnAmz Logo" className="w-16 h-16 rounded-full cursor-pointer" />
            </Link>
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer">BestOnAmz</h1>
            </Link>
          </div>
          <nav className="flex gap-6 text-sm font-medium mt-2 sm:mt-0">
            <Link href="/">Home</Link>
            <Link href="/best-robot-vacuums">Robot Vacuums</Link>
            <Link href="/best-pimple-patches">Pimple Patches</Link>
          </nav>
        </header>

        {/* Main Section */}
        <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Best Robot Vacuums of 2025</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-center">
            Looking for a robot vacuum? We’ve curated the best models for 2025, including top picks from Ecovacs, Mova, Narwal, and Dreame. Find the perfect robot vacuum for your home.
          </p>

          {/* Product Cards Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link href={`https://${amazonDomain}/dp/${p.asin}/ref=nosim?tag=${p.tag}`} key={p.asin} passHref>
                <div className={`p-6 bg-white border shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 ${p.topPick ? 'border-4 border-yellow-500' : ''} ${p.bestValue ? 'border-4 border-green-500' : ''}`}>
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
                    <img src={p.image} alt={p.altText} className="rounded h-64 w-auto object-contain" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-center">{p.title}</h3>
                  <h4 className="text-lg font-medium mb-4 text-center text-gray-600">{p.subtitle}</h4>
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

                  {/* CTA Button */}
                  <div className="flex justify-center mt-4">
                    <a
                      href={`https://${amazonDomain}/dp/${p.asin}/ref=nosim?tag=${p.tag}`}
                      className="inline-block bg-gray-800 text-white px-6 py-3 text-sm rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                      target="_blank" rel="nofollow sponsored"
                    >
                      Check Price on Amazon
                    </a>
                  </div>
                </div>
              </Link>
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
