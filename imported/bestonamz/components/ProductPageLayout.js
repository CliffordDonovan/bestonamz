'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar'; // Assuming Navbar is correctly imported

export default function ProductPageLayout({ productData, pageContent }) {
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
      <main className="bg-white text-gray-900 font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Page Title and Subtitle (hidden on mobile) */}
        <section className="px-4 md:px-12 py-10 max-w-7xl mx-auto">
          <div className="text-center mb-6 hidden md:block">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{pageContent.title}</h1>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">{pageContent.subtitle}</p>
          </div>

          {/* Expert Insight (hidden on mobile) */}
          <div className="bg-blue-50 p-4 rounded-lg max-w-4xl mx-auto mb-8 hidden md:block">
            <p className="text-base text-gray-700">
              <strong>Expert Insight:</strong> {pageContent.expertInsight}
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {productData && Array.isArray(productData) && productData.map((product) => (
              <article
                key={product.asin}
                className={`p-6 bg-white border shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 ${product.topPick ? 'border-4 border-yellow-500' : ''} ${product.bestValue ? 'border-4 border-green-500' : ''} ${product.subtitle === "Cutting-Edge Tech - Best Robot Vacuum with Mechanical Arm" ? 'border-4 border-blue-500' : ''}`}
              >
                {/* Conditional Badge */}
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

                {/* Product Image */}
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

                {/* Product Title and Price Range */}
                <h3 className="text-2xl font-semibold mb-2 text-center">{product.title}</h3>
                <h4 className="text-lg font-medium mb-4 text-center text-gray-600">{product.subtitle}</h4>
                <p className="text-center text-gray-800 font-medium mb-4">{product.priceRange}</p>

                {/* Amazon Link */}
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

                {/* Product Description */}
                <p className="text-md text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: product.description }} />

                {/* Pros and Cons */}
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
            ))}
          </div>

          {/* Buying Guide */}
          <section className="mt-16 prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{pageContent.buyingGuideTitle}</h2>
            <p className="text-gray-700 mb-4">{pageContent.buyingGuide.introduction}</p>

            {/* Buying Guide Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {pageContent.buyingGuide.sections.map((section, index) => (
                <div key={index} className="bg-white p-6 border rounded-lg">
                  <h4 className="font-bold text-lg mb-2">{section.title}</h4>
                  <p className="text-gray-700 text-sm">{section.content}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">{pageContent.priceRanges.title}</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="font-bold text-lg mb-2">{pageContent.priceRanges.entryLevel.title}</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">{pageContent.priceRanges.entryLevel.range}</p>
                  <p className="text-sm text-gray-700">{pageContent.priceRanges.entryLevel.products.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{pageContent.priceRanges.midRange.title}</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{pageContent.priceRanges.midRange.range}</p>
                  <p className="text-sm text-gray-700">{pageContent.priceRanges.midRange.products.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{pageContent.priceRanges.premium.title}</h4>
                  <p className="text-2xl font-bold text-purple-600 mb-2">{pageContent.priceRanges.premium.range}</p>
                  <p className="text-sm text-gray-700">{pageContent.priceRanges.premium.products.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Expert Tips */}
            <h3 className="text-2xl font-bold mb-4">{pageContent.expertTipsTitle}</h3>
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-gray-800">
                {pageContent.expertTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-600 mr-2">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>

        {/* Footer */}
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
