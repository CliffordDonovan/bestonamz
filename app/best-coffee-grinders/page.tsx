'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const products = [
  {
    title: 'Breville Smart Grinder Pro',
    subtitle: 'Our Top Pick - Best Overall Coffee Grinder',
    image: '/images/breville-smart-grinder-pro.jpg',
    altText: 'Breville Smart Grinder Pro Coffee Grinder with Digital Timer and Conical Burrs',
    description: `The Breville Smart Grinder Pro earns our top recommendation for its exceptional balance of features, performance, and value. After extensive testing, this grinder earned the top spot as our favorite model with 60 precise grind settings, digital timer with dosing control, and stainless steel conical burrs. Perfect for both espresso and brew methods with relatively quiet operation.`,
    pros: [
      'Excellent grind consistency across all settings',
      'Precise dosing control reduces waste',
      'Durable construction with premium feel',
      'Works well for both espresso and brew methods',
      'Easy to clean and maintain'
    ],
    cons: [
      'Higher price point than entry-level options',
      'Some grind retention in the chamber',
      'Takes up significant counter space'
    ],
    asin: 'B00OXGXW8O',
    tag: 'bestonamz0e-20',
    topPick: true,
    priceRange: '$200-250'
  },
  {
    title: 'OX Grinder – Portable and Quiet',
    subtitle: 'Best Value - Affordable, Compact, and Efficient',
    image: '/images/Nutii-Grinder.jpg',
    altText: 'OX Burr Coffee Grinder with 20 Adjustable Grind Settings and Quiet Operation',
    description: `The OX Grinder offers a perfect balance of performance, portability, and affordability. With its patented stainless steel burrs and 20 grind settings, it's designed to deliver professional results across all brewing methods. A long battery life and whisper-quiet operation make it an excellent option for home or office use, while its compact size ensures easy portability. Whether you're brewing espresso or pour-over, the OX Grinder provides great value for coffee enthusiasts.`,
    pros: [
      'Sleek, minimalist design with award-winning aesthetics',
      '20 grind settings for consistent results across brewing methods',
      'Quiet operation ideal for home or office use',
      'Long-lasting battery with up to 50 grinds per charge',
      'Portable and compact, perfect for travel',
      'Affordable for the features it offers'
    ],
    cons: [
      'Not ideal for high-volume daily grinding',
      'Can be slow for larger batches',
      'Requires a 15-minute cooldown after heavy use'
    ],
    asin: 'B0DT5RR112',
    tag: 'bestonamz0e-20',
    bestValue: true,
    priceRange: '$80-100'
  },
  {
    title: 'Fellow Ode Gen 2',
    subtitle: 'Best Premium Electric - Pinnacle of Home Brewing',
    image: '/images/fellow-ode-gen2.jpg',
    altText: 'Fellow Ode Gen 2 Coffee Grinder with Flat Burrs for Pour-Over and Drip Coffee',
    description: `The Fellow Ode Gen 2 represents the pinnacle of home brewing grinders, designed specifically for pour-over, drip, and cold brew methods. Premium metal construction feels solid and grinds without making a mess. Features flat burr design for consistency, 31 grind settings optimized for brewing, and minimal grind retention with sleek, modern design.`,
    pros: [
      'Exceptional grind quality and consistency',
      'Beautiful, minimalist design',
      'Very quiet operation',
      'Minimal static and mess',
      'Perfect for specialty coffee brewing'
    ],
    cons: [
      'Expensive for home use',
      'Not suitable for espresso',
      'Smaller hopper capacity',
      'Overkill for casual coffee drinkers'
    ],
    asin: 'B0BLRMCM9Y',
    tag: 'bestonamz0e-20',
    priceRange: '$350-400'
  },
  {
    title: 'Baratza Encore ESP',
    subtitle: 'Gold Standard Entry-Level Burr Grinder',
    image: '/images/baratza-encore.jpg',
    altText: 'Baratza Encore Coffee Grinder with Conical Burrs for Pour-Over and Drip Coffee',
    description: `The Baratza Encore has earned a reputation as the gold standard for entry-level burr grinders. As a brew grinder, the Encore excels, producing high-quality grounds for moka pot, pour-over, and Chemex. With 40 grind settings, conical burr design, and replaceable burrs for longevity, it offers exceptional value for money.`,
    pros: [
      'Exceptional value for money',
      'High quality materials, burrs show minimal wear',
      'Perfect for pour-over and drip coffee',
      'Easy to repair and upgrade',
      'Strong customer support from Baratza'
    ],
    cons: [
      'Not ideal for espresso (though upgradeable)',
      'Can be somewhat noisy',
      'Slower grinding speed than premium models'
    ],
    asin: 'B0BW272XCV',
    tag: 'bestonamz0e-20',
    priceRange: '$170-190'
  },
  {
    title: 'Timemore C3 ESP Pro',
    subtitle: 'Best Manual Grinder - Premium Quality on a Budget',
    image: '/images/timemore-c3-esp-pro.jpg',
    altText: 'Timemore C3 ESP Pro Manual Coffee Grinder with Folding Handle and Conical Burrs',
    description: `For those who don't mind a bit of manual work, the Timemore C3 ESP Pro offers exceptional value and performance. The C3 ESP Pro refines the design further, bringing premium features to the $100 price range for manual grinders. Features stainless steel conical burrs, 36 click adjustments, and folding handle design that's compact and portable.`,
    pros: [
      'Excellent grind quality for the price',
      'Folding handle among best designs in manual grinders',
      'Perfect for travel',
      'No electricity required',
      'Very quiet operation'
    ],
    cons: [
      'Requires manual effort',
      'Slower than electric grinders',
      'Limited capacity (about 25g at a time)',
      'Can be tiring for larger quantities'
    ],
    asin: 'B0BZHFYWZD',
    tag: 'bestonamz0e-20',
    priceRange: '$100-120'
  },
  {
    title: 'OXO Brew Conical Burr Grinder',
    subtitle: 'Best for Beginners - Simple and User-Friendly',
    image: '/images/oxo-brew-conical.jpg',
    altText: 'OXO Brew Conical Burr Coffee Grinder with One-Touch Timer for Beginners',
    description: `The OXO Brew Conical Burr Grinder suits most coffee drinkers just fine with its grind consistency, easily changeable settings, and sub-$150 price point. It's an excellent starting point for those new to burr grinders. Features 15 grind settings, one-touch timer, and stainless steel conical burrs with simple, intuitive operation.`,
    pros: [
      'Very user-friendly design',
      'Good value for money',
      'Consistent grind quality',
      'Easy to clean',
      'Compact size'
    ],
    cons: [
      'Limited grind settings compared to competitors',
      'Struggles to provide consistent grind for espresso',
      'Some users report durability issues over time'
    ],
    asin: 'B07CSKGLMM',
    tag: 'bestonamz0e-20',
    priceRange: '$100-120'
  }
];

// Product Card Component
const ProductCard = ({ product, amazonDomain }) => {
  return (
    <article className={`p-6 bg-white border shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 ${product.topPick ? 'border-4 border-yellow-500' : ''} ${product.bestValue ? 'border-4 border-green-500' : ''}`}>
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
      
      <div className="flex justify-center mb-4">
        <Image 
          src={product.image} 
          alt={product.altText} 
          width={256}  // Keep fixed width
          height={256}  // Keep fixed height
          className="rounded w-auto h-64 object-contain"  // Ensures scaling and maintains aspect ratio
          priority={product.topPick || product.bestValue}
        />
      </div>
      
      <h3 className="text-2xl font-semibold mb-2 text-center">{product.title}</h3>
      <h4 className="text-lg font-medium mb-2 text-center text-gray-600">{product.subtitle}</h4>
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
      <p className="text-md text-gray-700 mb-4">{product.description}</p>

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

export default function BestCoffeeGrinders() {
  const [amazonDomain, setAmazonDomain] = useState('amazon.com');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const determineAmazonDomain = () => {
      try {
        const region = navigator.language.includes('en-CA') ? 'ca' : 'com';
        setAmazonDomain(`amazon.${region}`);
      } catch (error) {
        console.error('Error determining region:', error);
        setAmazonDomain('amazon.com');
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
        <title>6 Best Coffee Grinders – Top Picks for Perfect Coffee Grinding (2025)</title>
        <meta name="description" content="Find the best coffee grinders for 2025. Expert reviews of top burr grinders from Breville, Baratza, Fellow, and more. Transform your coffee experience with our detailed buying guide." />
        <meta name="keywords" content="best coffee grinders, burr grinders, coffee grinding, Breville Smart Grinder Pro, Baratza Encore, coffee equipment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bestonamz.com/best-coffee-grinders" />
      </Head>

      <main className="bg-white text-gray-900 font-sans">
        <Navbar />

        <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
          {/* SEO Content (Hidden on mobile) */}
          <div className="hidden md:block">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">6 Best Coffee Grinders - 2025</h1>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
                Transform your coffee experience with our expert-reviewed selection of the best coffee grinders. From budget-friendly options to premium models, find the perfect grinder for your brewing needs.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg max-w-4xl mx-auto">
                <p className="text-gray-800 text-base">
                  <strong>Expert Insight:</strong> If you're serious about coffee, investing in a quality grinder is the single most important upgrade you can make. The difference between pre-ground coffee and freshly ground beans is night and day, and the right grinder can transform your morning routine from mediocre to exceptional.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.asin} product={product} amazonDomain={amazonDomain} />
            ))}
          </div>

          {/* Buying Guide Section */}
          <section className="mt-16 prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Buying Guide for Best Coffee Grinders</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-800 mb-4">
                Coffee grinders come in two main types: blade grinders (which chop beans unevenly) and burr grinders (which crush beans uniformly). For consistently great coffee, you'll want a burr grinder. These come in manual and electric varieties, with different price points and features to suit every coffee lover's needs.
              </p>
              <p className="text-gray-800">
                Whether you're brewing pour-over coffee, espresso, or French press, the grind consistency and particle size will dramatically impact your cup's flavor.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4">Key Considerations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">Brewing Methods</h4>
                <p className="text-gray-700 text-sm">
                  Different brewing methods require different grind sizes. Espresso needs fine, consistent grounds, while French press requires a coarse grind. Pour-over methods need medium-fine grounds.
                </p>
              </div>
              
              <div className="bg-white p-6 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">Daily Usage</h4>
                <p className="text-gray-700 text-sm">
                  If you're grinding for multiple cups daily, look for grinders with larger hoppers and faster grinding speeds. Single-cup drinkers can get by with smaller models.
                </p>
              </div>
              
              <div className="bg-white p-6 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">Electric vs. Manual</h4>
                <p className="text-gray-700 text-sm">
                  Electric grinders are faster and more convenient but tend to be noisier and more expensive. Manual grinders are quieter, more portable, and often provide better grind quality at lower price points.
                </p>
              </div>
              
              <div className="bg-white p-6 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">Budget</h4>
                <p className="text-gray-700 text-sm">
                  Entry-level burr grinders start around $80, while premium models can exceed $300. Even budget burr grinders will dramatically outperform blade grinders or pre-ground coffee.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Coffee Grinder Prices</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="font-bold text-lg mb-2">Entry-Level</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">$80-150</p>
                  <p className="text-sm text-gray-700">OXO Brew, Baratza Encore</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Mid-Range</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$150-250</p>
                  <p className="text-sm text-gray-700">Breville Smart Grinder Pro</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Premium</h4>
                  <p className="text-2xl font-bold text-purple-600 mb-2">$250-400+</p>
                  <p className="text-sm text-gray-700">Fellow Ode Gen 2</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Expert Tips</h3>
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span><strong>Grind fresh:</strong> Coffee begins losing flavor within 15 minutes of grinding, so always grind just before brewing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span><strong>Clean regularly:</strong> Clean your grinder every few weeks with grinder cleaning tablets or uncooked rice to remove coffee oils.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span><strong>Invest wisely:</strong> A $200 grinder with a $50 coffee maker will produce better coffee than a $200 coffee maker with a $50 grinder.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">✓</span>
                  <span><strong>Match your method:</strong> Espresso needs fine grounds, pour-over needs medium-fine, and French press needs coarse.</span>
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
