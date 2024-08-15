"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Lamp } from '../components/Lamp'; // Import the Lamp component
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
  const [scrollPosition, setScrollPosition] = useState(0); // State to track scroll position
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null); // Reference for the About section

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close the menu after clicking on a menu item
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close the menu after clicking on a menu item
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false); // Close the menu when Home is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`bg-black text-white min-h-screen flex flex-col ${typeof window !== "undefined" && scrollPosition > window.innerHeight ? 'bg-blue-600' : 'bg-transparent'}`}>
      <nav className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 bg-black bg-opacity-30 backdrop-blur-md ${typeof window !== "undefined" && scrollPosition > window.innerHeight ? 'bg-opacity-60' : 'bg-opacity-30'}`}>
        <div className="text-2xl font-bold cursor-pointer" onClick={scrollToTop}>
          Nimbus Tech.
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-300" onClick={scrollToTop}>Home</a>
          <a href="#services" className="hover:text-blue-300" onClick={scrollToServices}>Services</a>
          <a href="#about" className="hover:text-blue-300" onClick={scrollToAbout}>About</a>
          <a href="#contact" className="hover:text-blue-300" onClick={scrollToServices}>Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={toggleMenu} style={{ width: 'auto' }}>
            ☰
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="flex flex-col space-y-4 text-white">
            <a href="#home" className="hover:text-blue-300" onClick={scrollToTop}>Home</a>
            <a href="#services" className="hover:text-blue-300" onClick={scrollToServices}>Services</a>
            <a href="#about" className="hover:text-blue-300" onClick={scrollToAbout}>About</a>
            <a href="#contact" className="hover:text-blue-300" onClick={scrollToServices}>Contact</a>
          </div>
        </div>
      )}

      <Lamp /> {/* Include Lamp component here */}

      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center"> {/* Added margin-top to move image higher */}
          <div className="flex justify-center">
            <Image src="/svglogo.png" alt="Nimbus Inc. Logo" width={200} height={200} className="object-contain max-w-full h-auto mb-36" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome To Nimbus.</h2>
          <p className="text-lg md:text-xl mb-8 mt-8">
            Elevate Your Online Presence: Tailored Websites, Strategic Ads, and SEO Excellence.
          </p>
          <button
            onClick={scrollToServices}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold transition duration-300">
            Get Started<span className="ml-2">▼</span>
          </button>
        </div>
      </div>

      <div ref={aboutRef} id="about" />
      <div ref={servicesRef} id="services" />
    </section>
  );
};

export default HeroSection;
