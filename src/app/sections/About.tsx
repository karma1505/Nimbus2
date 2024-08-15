"use client";

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-white">Discover who we are and what drives us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-white">
              At Nimbus Tech. , our mission is to empower businesses & startups with innovative digital solutions. We believe in crafting exceptional websites, executing strategic ad campaigns, and delivering robust SEO strategies that drive growth and success for our clients.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-white">
              Our vision is to be a leading force in the digital industry, known for our creativity, reliability, and dedication to client success. We envision a future where every business can thrive online with our tailored and best-in-class services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
