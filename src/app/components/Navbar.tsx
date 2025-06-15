'use client';

import React, { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'  // Aligns to top of viewport
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full p-2 flex justify-between items-center z-50 bg-black bg-opacity-30 backdrop-blur-md ${typeof window !== "undefined" && window.scrollY > window.innerHeight ? 'bg-opacity-60' : 'bg-opacity-30'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12"> {/* Reduced height */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold"> {/* Reduced text size */}
              Nimbus Tech.
            </Link>
          </div>
          <div className="hidden md:flex md:space-x-8">
            <Link href="/" className="text-white cursor-pointer hover:text-gray-300">
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-white hover:text-gray-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-gray-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('footer')} 
              className="text-white hover:text-gray-300"
            >
              Contact
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <IconMenu2 />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" onClick={toggleMenu} className="block text-white cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ 
                behavior: 'smooth'
              });
            }}
            className="scroll-smooth block text-white cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ 
                behavior: 'smooth'
              });
            }}
            className="scroll-smooth block text-white cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#footer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('footer')?.scrollIntoView({ 
                behavior: 'smooth'
              });
            }}
            className="scroll-smooth block text-white cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;