"use client";

import React from "react";
import { IconBrandInstagram } from "@tabler/icons-react";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-neutral-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-neutral-700 pb-8 mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Nimbus Tech.</h3>
            <p className="text-sm">
              Empowering businesses through powerful software solutions.
            </p>
          </div>
          <div className="flex space-x-6 text-xl">
            <a
              href="https://www.instagram.com/nimbustech.india/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-sm text-neutral-400">
          <div className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nimbus Technologies. All rights reserved.
          </div>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a 
              href="/privacy-policy.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-and-conditions.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="tel:+919999098900" 
              className="hover:text-neutral-200 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;