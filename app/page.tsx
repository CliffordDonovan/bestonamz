'use client';

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Import the navbar component

export default function Home() {
  return (
    <>
      <Head>
        <title>BestOnAmz – Curated Amazon Product Roundups (2025)</title>
        <meta
          name="description"
          content="Discover the top-rated Amazon products across categories. Curated reviews of skincare, wellness, and home products to help you find the best deals."
        />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Header */}
        <header>
          <Navbar />
        </header>

        {/* Hero Section */}
        <section className="px-4 md:px-12 py-16 bg-white text-center shadow-lg">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to BestOnAmz</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Discover the best Amazon products through expertly curated reviews across skincare, health, home, and more. Shop smarter with trusted recommendations!
          </p>
          <Link href="/best-pimple-patches">
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Start Exploring Reviews
            </span>
          </Link>
        </section>

        {/* Top Categories Section */}
        <section className="py-12 px-4 md:px-12 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-8">Top Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Pimple Patches Category */}
            <Link href="/best-pimple-patches" className="bg-white rounded-lg border shadow-md hover:shadow-xl transition">
              <img
                src="/images/category-acne.jpg"
                alt="Pimple Patches"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Pimple Patches</h3>
                <p className="text-gray-600 mt-2">
                  Browse our top pimple patches and discover the best treatments for acne and blemishes.
                </p>
              </div>
            </Link>

            {/* Mushroom Coffee Category */}
            <Link href="/best-mushroom-coffees" className="bg-white rounded-lg border shadow-md hover:shadow-xl transition">
              <img
                src="/images/category-mushroom-coffee.jpg"
                alt="Mushroom Coffee"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Mushroom Coffee</h3>
                <p className="text-gray-600 mt-2">
                  Discover the best mushroom coffee blends to boost your health, immunity, and mental clarity.
                </p>
              </div>
            </Link>

            {/* Robot Vacuums Category */}
            <Link href="/best-robot-vacuums" className="bg-white rounded-lg border shadow-md hover:shadow-xl transition">
              <img
                src="/images/Narwal-Freo-X.jpg" // Correct product image for robot vacuums category
                alt="Robot Vacuums"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Robot Vacuums</h3>
                <p className="text-gray-600 mt-2">
                  Explore our curated list of the best robot vacuums for effortless home cleaning.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Why BestOnAmz Section */}
        <section className="py-12 px-4 md:px-12 bg-white border-t border-gray-300">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Choose BestOnAmz?</h3>
            <p className="text-gray-700 text-lg">
              We bring you handpicked Amazon product recommendations based on expert research, customer feedback, and the best deals. Our reviews are curated to help you make smarter buying decisions across various categories, from skincare to home gadgets.
            </p>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-12 px-4 md:px-12 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Featured Picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Example Featured Product 1 */}
            <Link href="/best-pimple-patches" passHref>
              <div className="p-6 bg-white border shadow-lg rounded-lg hover:scale-105 transition-all duration-300 transform">
                <img src="/images/grace-stella-patches.jpg" alt="Grace & Stella Pimple Patches" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-lg font-semibold text-center mt-4">Grace & Stella Pimple Patches</h3>
                <p className="text-center text-gray-600 mb-4">Best Hydrocolloid Acne Treatment for Blemishes</p>
                <div className="flex justify-center mt-4">
                  <a href="https://amazon.com/dp/B0CPJMSNL1" className="inline-block bg-blue-600 text-white px-6 py-3 text-sm rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </Link>

            {/* Example Featured Product 2 */}
            <Link href="/best-mushroom-coffees" passHref>
              <div className="p-6 bg-white border shadow-lg rounded-lg hover:scale-105 transition-all duration-300 transform">
                <img src="/images/foursigmatic-original.jpg" alt="Four Sigmatic Mushroom Coffee" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-lg font-semibold text-center mt-4">Four Sigmatic Mushroom Coffee</h3>
                <p className="text-center text-gray-600 mb-4">Best Overall Mushroom Coffee</p>
                <div className="flex justify-center mt-4">
                  <a href="https://amazon.com/dp/B0CGG395RP" className="inline-block bg-blue-600 text-white px-6 py-3 text-sm rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </Link>

            {/* Example Featured Product 3 */}
            <Link href="/best-robot-vacuums" passHref>
              <div className="p-6 bg-white border shadow-lg rounded-lg hover:scale-105 transition-all duration-300 transform">
                <img src="/images/Narwal-Freo-X.jpg" alt="Narwal Freo X Robot Vacuum" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-lg font-semibold text-center mt-4">Narwal Freo X Robot Vacuum</h3>
                <p className="text-center text-gray-600 mb-4">Effortless Cleaning for Your Home</p>
                <div className="flex justify-center mt-4">
                  <a href="https://amazon.com/dp/B0DHCJ571Z" className="inline-block bg-blue-600 text-white px-6 py-3 text-sm rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </Link>
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
