'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-10 py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img
              src="/images/logo.jpg"
              alt="BestOnAmz Logo"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </Link>
          <Link href="/">
            <h1 className="text-xl text-white font-semibold cursor-pointer">BestOnAmz</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center flex-grow gap-6 text-sm font-medium">
          <Link href="/" passHref>
            <span className="text-white hover:text-yellow-500 transition duration-200 cursor-pointer">Home</span>
          </Link>
          <Link href="/best-coffee-grinders" passHref>
            <span className="text-white hover:text-yellow-500 transition duration-200 cursor-pointer">Coffee Grinders</span>
          </Link>
          <Link href="/best-stick-vacuums-mops" passHref>
            <span className="text-white hover:text-yellow-500 transition duration-200 cursor-pointer">Stick Vacuums & Mops</span>
          </Link>
          <Link href="/best-pimple-patches" passHref>
            <span className="text-white hover:text-yellow-500 transition duration-200 cursor-pointer">Pimple Patches</span>
          </Link>
          <Link href="/best-mushroom-coffees" passHref>
            <span className="text-white hover:text-yellow-500 transition duration-200 cursor-pointer">Mushroom Coffee</span>
          </Link>
          <Link href="/best-robot-vacuums" passHref>
            <span className="text-white hover:text-yellow-500 transition duration-200 cursor-pointer">Robot Vacuums</span>
          </Link>
          <Link href="/best-tvs" passHref>
            <span className="text-white hover:text-yellow-500 transition duration-200 cursor-pointer">Best TVs</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-2 bg-gray-800 text-white rounded-md shadow-lg p-4`}
      >
        <Link href="/" passHref>
          <span className="block text-white hover:text-yellow-500 py-2">Home</span>
        </Link>
        <Link href="/best-coffee-grinders" passHref>
          <span className="block text-white hover:text-yellow-500 py-2">Coffee Grinders</span>
        </Link>
        <Link href="/best-stick-vacuums-mops" passHref>
          <span className="block text-white hover:text-yellow-500 py-2">Stick Vacuums & Mops</span>
        </Link>
        <Link href="/best-pimple-patches" passHref>
          <span className="block text-white hover:text-yellow-500 py-2">Pimple Patches</span>
        </Link>
        <Link href="/best-mushroom-coffees" passHref>
          <span className="block text-white hover:text-yellow-500 py-2">Mushroom Coffee</span>
        </Link>
        <Link href="/best-robot-vacuums" passHref>
          <span className="block text-white hover:text-yellow-500 py-2">Robot Vacuums</span>
        </Link>
        <Link href="/best-tvs" passHref>
          <span className="block text-white hover:text-yellow-500 py-2">Best TVs</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
