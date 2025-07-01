'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const products = [
  {
    title: 'Grace & Stella Pimple Patches',
    subtitle: 'Best Hydrocolloid Acne Treatment for Blemishes',
    image: '/images/grace-stella-patches.jpg',
    altText: 'Grace & Stella Hydrocolloid Acne Patches for Blemishes and Breakouts with Tea Tree Oil and Salicylic Acid',
    description: `Grace & Stella’s hydrocolloid pimple patches are your go-to solution for zapping blemishes and promoting faster healing. These clinically-proven patches work by absorbing fluid from pimples, helping to flatten them in hours and keep them protected from external impurities. The patches are infused with tea tree oil and salicylic acid, two powerful ingredients that target acne and reduce inflammation. Dermatologist-tested and safe for all skin types, these cute patches not only heal but also act as a reminder to avoid skin-picking. With 36 patches in a pack, you're armed for multiple breakouts.`,
    pros: [
      'Fight Breakouts Fast: Reduces redness and swelling, leaving you with clearer skin in hours.',
      'Non-Drying & Gentle: With acne-fighting ingredients like tea tree oil and salicylic acid that are safe for all skin types.',
      'Cute & Functional: Adorable cloud, heart, and flower shapes that cover blemishes and prevent skin-picking.',
      'Trusted by Influencers: Featured in FabFitFun, Ipsy, and BoxyCharm, and loved by celebrities.'
    ],
    cons: [
      'May not suit minimalist preferences',
      'Slightly pricier per patch'
    ],
    asin: 'B0CPJMSNL1',
    tag: 'bestonamz0e-20',
    price: 15.99,
    reviewRating: 4.8,
    reviewCount: 1500,
    topPick: true
  },
  {
    title: 'Mighty Patch Original',
    subtitle: 'Best Acne Patch for Whiteheads',
    image: '/images/mighty-patch.jpg',
    altText: 'Mighty Patch Original Hydrocolloid Acne Patch for Whiteheads and Pimples by Hero Cosmetics',
    description: `Tired of dealing with whiteheads? Mighty Patch Original works wonders by shrinking pimples in just 6 hours. Made with medical-grade hydrocolloid, these patches are dermatologist-tested and suitable for sensitive skin. They absorb impurities, preventing further inflammation and keeping your blemishes safe from bacteria. These patches work while you sleep, ensuring you wake up with smoother skin. If you’re prone to picking your pimples, the Mighty Patch will prevent that, giving you a more effective and satisfying solution.`,
    pros: [
      'Fast & Effective: Shrinks pimples in 6 hours with hydrocolloid technology.',
      'Protects & Heals: Helps protect pimples from external impurities and supports a healing environment.',
      'Dermatologist-Tested: Safe for sensitive skin, ensuring no irritation.',
      'Convenient Nighttime Use: Apply before bed and wake up to smoother skin.'
    ],
    cons: [
      'Best for whiteheads only',
      'Peel may tug on dry skin'
    ],
    asin: 'B074PVTPBW',
    tag: 'bestonamz0e-20',
    price: 13.99,
    reviewRating: 4.9,
    reviewCount: 10000
  },
  {
    title: 'COSRX Acne Pimple Master Patch',
    subtitle: 'Best Pimple Patch for Sensitive Skin',
    image: '/images/cosrx-patches.jpg',
    altText: 'COSRX Acne Pimple Master Patch for Sensitive Skin with Hypoallergenic Hydrocolloid',
    description: `COSRX Acne Pimple Master Patch is the ultimate solution for anyone struggling with acne. Made with hydrocolloid technology, these patches protect pimples from dirt and bacteria while creating a moist healing environment. Ideal for sensitive skin, they are hypoallergenic, dermatologist-tested, and free from harmful chemicals like parabens and sulfates. Each pack comes with three different sizes so you can treat multiple pimples at once. The original pimple patch loved by millions, COSRX is your go-to for gentle yet effective treatment.`,
    pros: [
      'Quick & Easy: Heals pimples by protecting them from external contaminants and promoting faster recovery.',
      'Flexible Sizes: 3 different sizes to treat different pimples.',
      'Skin-Friendly: Free from harmful chemicals and formulated to soothe sensitive skin.',
      'Trusted by K-Beauty Fans: Known for its long-lasting effectiveness and gentle touch.'
    ],
    cons: [
      'Less invisible under makeup',
      'Not ideal for deep cystic acne'
    ],
    asin: 'B014SAB948',
    tag: 'bestonamz0e-20',
    price: 12.99,
    reviewRating: 4.7,
    reviewCount: 8500
  },
  {
    title: 'Rael Beauty Miracle Patch',
    subtitle: 'Best Invisible Hydrocolloid Pimple Patch for Acne',
    image: '/images/rael-patches.jpg',
    altText: 'Rael Beauty Miracle Hydrocolloid Acne Patches for Overnight Pimple Treatment',
    description: `Rael Beauty Miracle Patches are your invisible, all-day solution to acne. Made with medical-grade hydrocolloid, these patches are hypoallergenic and non-drying, ensuring a smooth, invisible fit under your skin. They come in two sizes to treat multiple pimples, and with their thin, clear edges, they blend seamlessly with any skin tone. These patches are perfect for day or night use, adhering securely so you can go about your day without worry. And since they are vegan and cruelty-free, they’re as kind to your skin as they are to the planet.`,
    pros: [
      'Invisible & Seamless: Transparent design blends perfectly with all skin tones.',
      'Highly Absorbent: Hydrocolloid technology helps absorb fluids, promoting faster healing.',
      'Non-Drying & Gentle: Hypoallergenic and vegan, so it’s safe for even sensitive skin.',
      'All-Day or Night Coverage: Thin outer edges keep the patch secure throughout the day or night.'
    ],
    cons: [
      'May roll off oily skin',
      'Takes longer to work for some'
    ],
    asin: 'B07G1VKCND',
    tag: 'bestonamz0e-20',
    price: 14.99,
    reviewRating: 4.6,
    reviewCount: 4200
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
        <title>Best Pimple Patches for Acne Treatment – Curated Top Hydrocolloid Patches on Amazon (2025)</title>
        <meta name="description" content="Explore the best pimple patches for acne treatment on Amazon. We’ve curated the top-rated hydrocolloid patches from Grace & Stella, Mighty Patch, COSRX, and Rael based on expert reviews to help you clear your skin effectively in 2025." />
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
            <Link href="/best-pimple-patches">Pimple Patches</Link>
            <Link href="/best-mushroom-coffees">Mushroom Coffee</Link>
          </nav>
        </header>

        {/* Main Section */}
        <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Best Pimple Patches for Acne Treatment – Curated Top Hydrocolloid Patches on Amazon (2025)</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-center">
            Looking for effective acne treatment? We’ve curated the top-rated hydrocolloid pimple patches based on expert reviews and user feedback to help you find the best options for clearer skin.
          </p>

          {/* Product Cards Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link href={`https://${amazonDomain}/dp/${p.asin}/ref=nosim?tag=${p.tag}`} key={p.asin} passHref>
                <div className={`p-6 bg-white border shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 ${p.topPick ? 'border-4 border-yellow-500' : ''}`}>
                  {p.topPick && (
                    <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                      Top Pick
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
