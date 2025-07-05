'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const products = [
  {
    title: 'Shark PowerDetect NeverTouch Pro',
    subtitle: 'Top Pick - Best Self-Cleaning Robot Vacuum',
    image: '/images/Shark-Nevertouch.jpg',
    altText: 'Shark PowerDetect NeverTouch Pro Self-Emptying Self-Refill with Self-Clean Pad Wash & Dry',
    description: `The Shark PowerDetect NeverTouch Pro is a top-of-the-line robot vacuum and mop combo designed to make cleaning effortless. With its <strong>Anti-Allergen Complete Seal</strong> and <strong>HEPA filtration</strong>, it traps 99.97% of dust and allergens, ensuring a cleaner home environment. The vacuum features <strong>NeverStuck Technology</strong> to lift itself over obstacles, and its <strong>self-emptying base</strong> holds up to 60 days of debris. With self-cleaning pads, it requires minimal maintenance, making it perfect for allergy sufferers and busy homeowners.`,
    pros: [
      'Anti-Allergen Complete Seal traps 99.97% of dust and allergens.',
      'Automatic self-emptying and self-refilling for maintenance-free cleaning.',
      'Advanced edge cleaning with NeverStuck Technology.',
      'Self-cleaning mop pads after each use.',
      'Ideal for homes with pets and allergies.'
    ],
    cons: [
      'High price point compared to entry-level models.',
      'Requires space for the self-emptying base.'
    ],
    asin: 'B0DCPX2M8N',
    tag: 'bestonamz0e-20',
    topPick: true,
    priceRange: '$800-1200'
  },
  {
    title: 'Roborock Saros Z70',
    subtitle: 'Cutting-Edge Tech - Best Robot Vacuum with Mechanical Arm',
    image: '/images/Roborock-Saros-Z70.jpg',
    altText: 'Roborock Saros Z70 Robot Vacuum with Mechanical Arm for Object Handling',
    description: `The Roborock Saros Z70 is the ultimate tech-forward robot vacuum, featuring a revolutionary <strong>mechanical arm</strong> that picks up obstacles and moves them out of the way. It boasts an impressive <strong>22,000Pa suction power</strong>, <strong>hot water mopping</strong>, and the ability to <strong>self-clean</strong>. Its <strong>Tri-Laser navigation system</strong> ensures precise movement, and it’s perfect for deep cleaning in homes with multiple floor types.`,
    pros: [
      'Mechanical arm that moves objects out of the way for better cleaning.',
      '22,000Pa suction for deep cleaning of all surfaces.',
      'Advanced hot water mopping for superior stain removal.',
      'Tri-Laser system ensures precise navigation and obstacle avoidance.'
    ],
    cons: [
      'Very high price point.',
      'Mechanical arm may not be necessary for all homes.'
    ],
    asin: 'B0DHCJ571Z',
    tag: 'bestonamz0e-20',
    priceRange: '$2000+'
  },
  {
    title: 'Narwal Freo X Ultra',
    subtitle: 'Best Value Robot Vacuum Mop Combo',
    image: '/images/Narwal-Freo-X.jpg',
    altText: 'Narwal Freo X Ultra Robot Vacuum Mop Combo for Efficient Mopping',
    description: `The Narwal Freo X Ultra is the perfect combination of performance and value. It features <strong>8,200Pa suction</strong>, advanced <strong>mop heads</strong> with <strong>12N pressure</strong> for scrubbing tough stains, and a <strong>hands-free maintenance dock</strong> that washes and dries the mop pads. With its <strong>Tri-Laser navigation system</strong>, this robot vacuum delivers precision and efficiency, making it ideal for homes with hard floors.`,
    pros: [
      'Hands-free dock that washes, dries, and refills mop pads.',
      '8,200Pa suction combined with powerful mop heads.',
      'Tri-Laser system for precise obstacle avoidance.',
      'A great choice for homes with hard floors.'
    ],
    cons: [
      'Not the best for deep carpet cleaning.',
      'No automatic dustbin emptying feature.'
    ],
    asin: 'B0CPLP422K',
    tag: 'bestonamz0e-20',
    bestValue: true,
    priceRange: '$400-700'
  },
  {
    title: 'Deebot X9 Pro Omni',
    subtitle: 'Best for Full Automation with Self-Washing Mop',
    image: '/images/Deebot-X9.jpg',
    altText: 'Deebot X9 Pro Omni Robot Vacuum with Self-Washing Mop for Full Automation',
    description: `The Ecovacs Deebot X9 Pro Omni delivers unparalleled automation, featuring <strong>16,600Pa suction</strong> and an advanced <strong>OZMO Roller</strong> that washes itself after each use. This robot vacuum also features <strong>AI navigation</strong>, <strong>LiDAR mapping</strong>, and <strong>automatic mop lifting</strong> for carpets. It's the perfect solution for users who want a truly hands-off cleaning experience.`,
    pros: [
      '16,600Pa suction with <strong>Blast Airflow</strong> for deep cleaning.',
      'Self-washing mop for maintenance-free cleaning.',
      'Advanced AI navigation and real-time obstacle avoidance.',
      'Automatic mop lifting for carpet areas.'
    ],
    cons: [
      'High price point.',
      'Best for homes with hard floors, not as effective on thick carpets.'
    ],
    asin: 'B0DZXFNVQ2',
    tag: 'bestonamz0e-20',
    priceRange: '$1500+'
  },
  {
    title: 'Eureka E20 Plus',
    subtitle: 'Best for Pet Owners with Self-Emptying Station',
    image: '/images/Eureka-E20.jpg',
    altText: 'Eureka E20 Plus Robot Vacuum with Pet Hair Anti-Tangle Technology',
    description: `The Eureka E20 Plus combines <strong>8,000Pa suction</strong> with an <strong>anti-tangle brush</strong> for effective pet hair removal. It also features a <strong>self-emptying station</strong> that holds debris for up to <strong>45 days</strong>, reducing maintenance. Although it doesn’t have spinning mop heads, it does offer basic mopping capabilities. The vacuum uses <strong>AI 3D obstacle avoidance</strong> and <strong>night vision</strong>, making it effective even in low-light conditions. A great option for pet owners who want a vacuum that can handle both dirt and hair, but not ideal for deep mopping.`,
    pros: [
      '8,000Pa suction with anti-tangle brush for pet hair.',
      'Self-emptying station that reduces maintenance.',
      'AI 3D obstacle avoidance and night vision for precision cleaning.',
      'Great for homes with pets.'
    ],
    cons: [
      'Mopping function is basic, not as effective as models with spinning mop heads.',
      'Mopping is less advanced compared to other models.'
    ],
    asin: 'B0DDXVGX8X',
    tag: 'bestonamz0e-20',
    priceRange: '$400-500'
  },
  {
    title: 'Mova P10 Pro Ultra',
    subtitle: 'Best for Smart Dirt Detection and Long Battery Life',
    image: '/images/Mova-P10.jpg',
    altText: 'Mova P10 Pro Ultra Robot Vacuum with Smart Dirt Detection and Auto Mop Maintenance',
    description: `The Mova P10 Pro Ultra features <strong>13,000Pa suction</strong> and a <strong>smart dirt detection system</strong> that adapts to the level of dirt in your home. Its <strong>hands-free docking station</strong> washes, dries, and refills mop pads automatically, making it a convenient option for busy households. With <strong>long battery life</strong> and <strong>hair tangle prevention</strong>, this vacuum is an excellent option for pet owners.`,
    pros: [
      '13,000Pa suction with auto dirt detection for personalized cleaning.',
      'Hands-free docking station with mop washing and refilling.',
      'Great battery life with up to 2.5 hours of cleaning.',
      'Pet-friendly design with hair tangle prevention.'
    ],
    cons: [
      'Not ideal for thick carpets.',
      'App performance could use improvement.'
    ],
    asin: 'B0DGR1VDTB',
    tag: 'bestonamz0e-20',
    priceRange: '$400-500'
  }
];

// Product Card Component
const ProductCard = ({ product, amazonDomain }) => {
  return (
    <article className={`p-6 bg-white border shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 ${product.topPick ? 'border-4 border-yellow-500' : ''} ${product.bestValue ? 'border-4 border-green-500' : ''} ${!product.topPick && !product.bestValue ? 'border-4 border-blue-500' : ''}`}>
      {product.topPick && (
        <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
          Top Pick
        </div>
      )}
      {product.bestValue && (
        <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
          Best Value
        </div>
      )}
      {product.subtitle === "Cutting-Edge Tech - Best Robot Vacuum with Mechanical Arm" && (
        <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
          Cutting-Edge Tech
        </div>
      )}

      <div className="flex justify-center mb-4">
        <Image 
          src={product.image} 
          alt={product.altText} 
          width={256}
          height={256}
          className="rounded w-auto h-64 object-contain" 
          priority={product.topPick || product.bestValue}
        />
      </div>

      <h3 className="text-2xl font-semibold mb-2 text-center">{product.title}</h3>
      <h4 className="text-lg font-medium mb-4 text-center text-gray-600">{product.subtitle}</h4>
      <p className="text-center text-gray-800 font-medium mb-4">{product.priceRange}</p>

      <div className="flex justify-center mb-4">
        <a
          href={`https://${amazonDomain}/dp/${product.asin}/ref=nosim?tag=${product.tag}`}
          className="inline-block bg-gray-800 text-white px-6 py-3 text-sm rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          target="_blank" 
          rel="nofollow sponsored"
          aria-label={`Check price for ${product.title} on Amazon`}
        >
          Check Price on Amazon
        </a>
      </div>

      <hr className="mb-4 border-gray-300" />
      <p className="text-md text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: product.description }} />

      <div className="grid grid-cols-1 gap-4 mb-4 border-t pt-4">
        <div>
          <strong className="text-green-700 block mb-2">Pros:</strong>
          <ul className="list-disc list-inside text-sm text-green-800 space-y-1">
            {product.pros.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div>
          <strong className="text-red-700 block mb-2">Cons:</strong>
          <ul className="list-disc list-inside text-sm text-red-800 space-y-1">
            {product.cons.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default function BestRobotVacuums() {
  const [amazonDomain, setAmazonDomain] = useState('amazon.com');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const determineAmazonDomain = () => {
      try {
        const region = navigator.language.includes('en-CA') ? 'ca' : 'com';
        setAmazonDomain(`amazon.${region}`);
      } catch (error) {
        console.error('Error determining region:', error);
        setAmazonDomain('amazon.com'); // fallback
      } finally {
        setIsLoading(false);
      }
    };

    determineAmazonDomain();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Best Robot Vacuums – Top Picks for Efficient Home Cleaning (2025)</title>
        <meta name="description" content="Explore the best robot vacuums for 2025. Featuring top models like Roborock Saros Z70, Narwal Freo X Ultra, and more, offering powerful cleaning, smart navigation, and innovative features." />
        <meta name="keywords" content="best robot vacuums, robot vacuum reviews, home cleaning, automated cleaning, smart home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bestonamz.com/best-robot-vacuums" />
      </Head>

      <main className="bg-white text-gray-900 font-sans">
        <Navbar />
        <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-6 hidden md:block">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Best Robot Vacuums for 2025</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Explore the best robot vacuums for 2025. Featuring top models like Roborock Saros Z70, Narwal Freo X Ultra, and more, offering powerful cleaning, smart navigation, and innovative features.
            </p>
          </div>

          {/* Expert Insight Section */}
          <div className="bg-blue-50 p-4 rounded-lg max-w-4xl mx-auto mb-8 hidden md:block">
            <p className="text-base text-gray-700">
              <strong>Expert Insight:</strong> A high-quality robot vacuum not only saves time but also ensures efficient cleaning. Modern models come with advanced sensors, obstacle avoidance, and smart mapping, providing a thorough clean for all floor types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.asin} product={product} amazonDomain={amazonDomain} />
            ))}
          </div>

          {/* SEO Content: Buying Guide */}
          <section className="mt-16 prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Buying Guide for Best Robot Vacuums</h2>
            <p className="text-gray-700 mb-4">
              Robot vacuums have become a staple in modern homes due to their convenience and efficiency. They can clean autonomously and tackle a variety of floor types and debris types.
            </p>
            <h3 className="text-2xl font-bold mb-4">Key Considerations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">Cleaning Power</h4>
                <p className="text-gray-700 text-sm">
                  Consider suction power (Pa) and features like spinning brushes for corners and edges. More power is beneficial for large homes and heavy-duty cleaning.
                </p>
              </div>
              <div className="bg-white p-6 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">Navigation</h4>
                <p className="text-gray-700 text-sm">
                  Higher-end models use sensors like LiDAR or 3D mapping for precise navigation, making them ideal for complex floor plans.
                </p>
              </div>
              <div className="bg-white p-6 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">Battery Life</h4>
                <p className="text-gray-700 text-sm">
                  Longer battery life allows for larger areas to be cleaned in one go. Battery life can range from 60 to 180 minutes.
                </p>
              </div>
              <div className="bg-white p-6 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">Price Range</h4>
                <p className="text-gray-700 text-sm">
                  Entry-level models start around $200, while premium models can go up to $1,200. A higher price generally equates to more features and better performance.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Robot Vacuum Prices</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="font-bold text-lg mb-2">Entry-Level</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">$400–500</p>
                  <p className="text-sm text-gray-700">Eureka E20, Mova P10 Pro</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Mid-Range</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$400–700</p>
                  <p className="text-sm text-gray-700">Narwal Freo X Ultra</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Premium</h4>
                  <p className="text-2xl font-bold text-purple-600 mb-2">$800–2000+</p>
                  <p className="text-sm text-gray-700">Roborock Saros Z70, Shark PowerDetect</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Expert Tips</h3>
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span><strong>Clean regularly:</strong> Keep your vacuum in optimal condition by cleaning its brushes and sensors weekly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span><strong>Use virtual boundaries:</strong> Set up no-go zones to keep your vacuum away from certain areas.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span><strong>Maintain battery life:</strong> Ensure your robot vacuum is charged regularly to extend its lifespan.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span><strong>Pick the right model:</strong> If you have pets or deep carpets, invest in a vacuum with strong suction and high-efficiency filters.</span>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <footer className="bg-gray-100 border-t mt-16 py-8 text-center text-sm text-gray-600">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-2">© {new Date().getFullYear()} BestOnAmz.com – All rights reserved.</div>
            <div>As an Amazon Associate, we earn from qualifying purchases.</div>
          </div>
        </footer>
      </main>
    </>
  );
}
