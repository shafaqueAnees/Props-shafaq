

'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle hamburger menu

  return (
    <div>
      <header className="text-gray-600 body-font  ">
        <div className="container mx-auto flex p-5 items-center justify-between">
          {/* Logo Section */}
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <Image
              src="/images/logo.png" // Replace with your logo file path
              alt="Logo"
              className="w-auto h-auto"
              width={154.49}
              height={24}
            />
          </a>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex items-center text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-8 flex-wrap items-center text-base justify-center">
            <Link href="/" className="hover:text-gray-900 cursor-pointer text-black">Home</Link>
            <Link href="/"className="hover:text-gray-900 cursor-pointer text-[#18191F] ">Service</Link>
            <Link href="/"className="hover:text-gray-900 cursor-pointer text-gray-700">Feature</Link>
            <Link href="/"className="hover:text-gray-900 cursor-pointer text-gray-700">Product</Link>
            <Link href="/"className="hover:text-gray-900  cursor-pointer text-gray-700">Testimonial</Link>
            <Link href="/"className="hover:text-gray- cursor-pointer text-gray-700">FAQ</Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <button className="text-[#4CAF4F] px-4 py-2 rounded hover:bg-gray-100">
              Login
            </button>
            <button className="text-white bg-[#4CAF4F] px-4 py-2 rounded hover:bg-[#45A049]">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start px-5 mt-3 space-y-3 bg-white">
            <a className="block text-black hover:text-gray-900">Home</a>
            <a className="block text-gray-700 hover:text-gray-900">Service</a>
            <a className="block text-gray-700 hover:text-gray-900">Feature</a>
            <a className="block text-gray-700 hover:text-gray-900">Product</a>
            <a className="block text-gray-700 hover:text-gray-900">Testimonial</a>
            <a className="block text-gray-700 hover:text-gray-900">FAQ</a>
            <button className="w-full text-[#4CAF4F] px-4 py-2 rounded hover:bg-gray-100">
              Login
            </button>
            <button className="w-full text-white bg-[#4CAF4F] px-4 py-2 rounded hover:bg-[#45A049]">
              Sign Up
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
