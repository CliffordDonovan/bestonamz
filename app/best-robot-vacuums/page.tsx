'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar'; // Import Navbar component
import Link from 'next/link';

const products = [
  {
    title: 'Roborock Saros Z70',
    subtitle: 'Best Robot Vacuum with Mechanical Arm',
    image: '/images/Roborock-Saros-Z70.jpg',
    altText: 'Roborock Saros Z70 Robot Vacuum with Mechanical Arm for Object Handling',
    description: `The Roborock Saros Z70 is a revolutionary robot vacuum with an integrated mechanical arm that can pick up objects and move them out of the way. With 22,000Pa of suction power and advanced StarSight 3D navigation, it offers an unbeatable cleaning experience. The innovative design also includes hot water mopping capabilities, a multifunctional dock for self-cleaning, and precise obstacle avoidance with its Tri-Laser system.`,
    pros: [
      'Revolutionary mechanical arm for object handling and moving items out of the way.',
      'Powerful 22,000Pa suction for effective cleaning on all surfaces.',
      'Advanced obstacle avoidance with StarSight 3D navigation and Tri-Laser system.',
      'Hot water mopping system for better stain removal.'
    ],
    cons: [
      'High price point, making it a premium option.',
      'Mechanical arm might not be necessary for everyone.'
    ],
    asin: 'B0DHCJ571Z',
    tag: 'bestonamz0e-20',
    topPick: true
  },
  {
    title: 'Narwal Freo X Ultra',
    subtitle: 'Best Value Robot Vacuum Mop Combo',
    image: '/images/Narwal-Freo-X.jpg',
    altText: 'Narwal Freo X Ultra Robot Vacuum Mop Combo for Efficient Mopping',
    description: `The Narwal Freo X Ultra is designed with mopping in mind. Featuring powerful 8,200Pa suction and revolutionary mop heads with 12N of pressure, it excels at scrubbing tough stains. The robot comes with a hands-free maintenance dock that washes and dries the mop pads, and its Tri-Laser system ensures precise navigation around obstacles. A great value for anyone looking for superior mopping performance.`,
    pros: [
      'Hands-free maintenance dock that washes, dries, and refills mop pads.',
      '8,200Pa suction and advanced mop heads for deep cleaning.',
      'Tri-Laser system for precise obstacle avoidance.',
      'Excellent for homes with hard floors and pets.'
    ],
    cons: [
      'Not ideal for deep carpet cleaning.',
      'Lack of automatic dustbin emptying.'
    ],
    asin: 'B0CPLP422K',
    tag: 'bestonamz0e-20',
    bestValue: true
  },
  {
    title: 'Deebot X9 Pro Omni',
    subtitle: 'Best for Full Automation with Self-Washing Mop',
    image: '/images/Deebot-X9.jpg',
    altText: 'Deebot X9 Pro Omni Robot Vacuum with Self-Washing Mop for Full Automation',
    description: `The Ecovacs Deebot X9 Pro Omni offers an entirely automated cleaning experience. With a 16,600Pa suction, it combines advanced airflow with powerful suction to lift dust and debris. The OZMO Roller ensures a self-washing mop that never spreads dirty water, while its AI navigation and LiDAR mapping create an intelligent path for cleaning. It’s perfect for users looking for minimal intervention.`,
    pros: [
      '16,600Pa suction with Blast Airflow for deep cleaning.',
      'Self-washing mop technology ensures clean mopping every time.',
      'Advanced AI navigation with real-time obstacle avoidance.',
      'Multi-surface cleaning with automatic mop lifting for carpets.'
    ],
    cons: [
      'On the pricier side for a robot vacuum.',
      'Best for homes with hard floors, less effective on thick carpets.'
    ],
    asin: 'B0DZXFNVQ2',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'Mova P10 Pro Ultra',
    subtitle: 'Best for Smart Dirt Detection and Long Battery Life',
    image: '/images/Mova-P10.jpg',
    altText: 'Mova P10 Pro Ultra Robot Vacuum with Smart Dirt Detection and Auto Mop Maintenance',
    description: `The Mova P10 Pro Ultra delivers impressive performance with 13,000Pa suction, and its unique smart dirt detection system automatically adjusts the cleaning process based on the dirt level. It also includes a hands-free docking station that washes, dries, and refills the mop pads. Perfect for those seeking a value-driven solution with excellent cleaning power and convenience.`,
    pros: [
      '13,000Pa suction and auto dirt detection for customized cleaning.',
      'Hands-free docking station with mop washing and refilling.',
      'Great battery life with up to 2.5 hours of cleaning time.',
      'Pet-friendly design with hair tangle prevention.'
    ],
    cons: [
      'Not ideal for thick carpets due to its suction limitations.',
      'App performance could be better, with occasional bugs.'
    ],
    asin: 'B0DGR1VDTB',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'Dreame X50 Ultra',
    subtitle: 'Best for Cross-Threshold and Low-Impact Cleaning',
    image: '/images/Dreame-X50.jpg',
    altText: 'Dreame X50 Ultra Robot Vacuum with Retractable Legs for Threshold Crossing',
    description: `The Dreame X50 Ultra is designed to handle thresholds, obstacles, and all floor types with ease. It features retractable legs that can cross thresholds up to 2.36 inches and shock absorbers to minimize noise. With 20,000Pa suction and advanced VersaLift navigation, this vacuum delivers quiet, deep cleaning while navigating tight spaces and under furniture.`,
    pros: [
      '20,000Pa suction power for superior cleaning.',
      'Retractable legs and shock absorbers for crossing thresholds.',
      'Quiet operation, great for homes with pets or small children.',
      'Easily cleans under furniture with low height design.'
    ],
    cons: [
      'Not as effective on very thick carpets.',
      'Limited mopping function compared to other models.'
    ],
    asin: 'B0DM5J52GC',
    tag: 'bestonamz0e-20'
  },
  {
    title: 'Eureka E20 Plus',
    subtitle: 'Best for Pet Owners with Self-Emptying Station',
    image: '/images/Eureka-E20.jpg',
    altText: 'Eureka E20 Plus Robot Vacuum with Pet Hair Anti-Tangle Technology',
    description: `The Eureka E20 Plus combines powerful 8,000Pa suction with a self-emptying station that holds debris for up to 45 days. The V-shaped anti-tangle brush design ensures efficient hair pickup, making it ideal for pet owners. It also features AI 3D obstacle avoidance and night vision capabilities for effective cleaning in low-light conditions.`,
    pros: [
      '8,000Pa suction for deep cleaning on hard floors and carpets.',
      'Self-emptying station that reduces maintenance and saves money.',
      'AI 3D obstacle avoidance and night vision for precision cleaning.',
      'Pet-friendly design with anti-tangle brush for hair removal.'
    ],
    cons: [
      'No mop feature.',
      'Less advanced mopping capability compared to other models.'
    ],
    asin: 'B0DDXVGX8X',
    tag: 'bestonamz0e-20'
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
        <title>Best Robot Vacuums – Top Picks for Efficient Home Cleaning (2025)</title>
        <meta name="description" content="Explore the best robot vacuums for 2025. Featuring top models like Roborock Saros Z70, Narwal Freo X Ultra, and more, offering powerful cleaning, smart navigation, and innovative features." />
      </Head>

      <main className="bg-white text-gray-900 font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Main Section */}
        <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
          {/* Hidden SEO Title and Description */}
          <div className="sr-only">
            <h2 className="text-3xl font-bold mb-4 text-center">Best Robot Vacuums – Top Picks for Efficient Home Cleaning (2025)</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-center">
              Explore the best robot vacuums for 2025. Featuring top models with powerful suction, smart navigation, and convenient cleaning technology to help you maintain a spotless home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <img src={p.image} alt={p.altText} className="rounded h-64 w-auto object-contain" />
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
