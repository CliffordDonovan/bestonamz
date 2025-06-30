'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>BestOnAmz – Expert Amazon Product Roundups (2025)</title>
        <meta name="description" content="Discover the best Amazon products by category. Honest, curated reviews to help you find the best skincare and adaptogen products." />
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
            <Link href="/">Categories</Link>
            <Link href="/best-pimple-patches">Pimple Patches</Link>
            <Link href="/best-mushroom-coffees">Mushroom Coffee</Link>
          </nav>
          <input type="search" placeholder="Search..." className="border text-sm px-2 py-1 rounded" />
        </header>

        {/* Hero */}
        <section className="text-center px-4 md:px-12 py-16 bg-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to BestOnAmz.com</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We help you find top-rated Amazon products with expert roundups you can trust.
            Whether you’re looking for skincare essentials or healthy coffee alternatives —
            we’ve got you covered with clean, affiliate-supported reviews.
          </p>
          <Link href="/best-pimple-patches">
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
              Start Exploring Reviews
            </span>
          </Link>
        </section>

        {/* Categories */}
        <section className="py-12 px-4 md:px-12 bg-gray-50">
          <h3 className="text-2xl font-bold text-center mb-8">Top Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/best-pimple-patches" className="bg-white rounded-lg border hover:shadow-lg transition block">
              <img src="/images/category-acne.jpg" alt="Pimple Patches" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">Pimple Patches</h4>
              </div>
            </Link>
            <Link href="/best-mushroom-coffees" className="bg-white rounded-lg border hover:shadow-lg transition block">
              <img src="/images/category-mushroom-coffee.jpg" alt="Mushroom Coffee" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">Mushroom Coffee</h4>
              </div>
            </Link>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-12 px-4 md:px-12 bg-white border-t">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Why BestOnAmz?</h3>
            <p className="text-gray-700 text-base">
              Unlike auto-generated affiliate sites, we manually research and test products to recommend the best of Amazon.
              Our team includes SEO strategists, copywriters, and product researchers dedicated to creating helpful, no-fluff roundups that earn your trust.
            </p>
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
