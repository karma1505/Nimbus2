"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import { Lamp } from "../components/Lamp";

const HeroSection: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden">
      <Lamp />
      <div className="flex-grow flex items-center justify-center relative z-20">
        <div className="container mx-auto px-4 text-center">
          {/* Modified logo container */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-30">
            Welcome To Nimbus.
          </h2>
          <p className="text-base md:text-xl mb-8 mt-8 relative z-30">
            Transform Your Business: Custom Apps, Stunning Websites, and Powerful Software Solutions.
          </p>
          <div className="flex justify-center mt-8 relative z-30">
            <button
              onClick={scrollToServices}
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md text-base md:text-lg transition duration-300 flex items-center justify-center"
            >
              Get Started
              <IconTriangleInvertedFilled className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>

      <div ref={servicesRef} id="services" />
    </section>
  );
};

export default HeroSection;