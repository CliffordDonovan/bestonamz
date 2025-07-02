// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800 shadow-md sticky top-0 z-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <img
            src="/images/logo.jpg"
            alt="BestOnAmz Logo"
            className="w-16 h-16 rounded-full cursor-pointer"
          />
        </Link>
        <Link href="/">
          <h1 className="text-3xl text-white font-semibold cursor-pointer">BestOnAmz</h1>
        </Link>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <Link href="/" passHref>
          <span className="text-white hover:text-yellow-500 transition duration-200 cursor-pointer">Home</span>
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
      </div>

      {/* Search Bar (Responsive and Always Visible) */}
      <div className="relative hidden md:block">
        <input
          type="search"
          placeholder="Search..."
          className="px-3 py-2 rounded-full text-sm border-none outline-none"
        />
        <button
          className="absolute top-0 right-0 px-4 py-2 text-sm bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200"
        >
          Search
        </button>
      </div>

      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
      
      {/* Mobile Menu (Dropdown for Small Screens) */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-800 text-white p-4`}
      >
        <Link href="/" passHref>
          <span className="block text-white hover:text-yellow-500 py-2">Home</span>
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
      </div>
    </nav>
  );
};

export default Navbar; // Default export
