"use client";

import React from "react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-neutral-700 pb-8 mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Nimbus Tech.</h3>
            <p className="text-sm">
              Empowering businesses through custom web solutions.
            </p>
          </div>
          <div className="flex space-x-6 text-xl">
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <IconBrandFacebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <IconBrandTwitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-sm text-neutral-400">
          <div className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nimbus Technologies All rights reserved.
          </div>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="hover:text-neutral-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-200 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neutral-200 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
