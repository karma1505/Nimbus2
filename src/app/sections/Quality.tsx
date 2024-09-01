"use client";

import React from "react";
import { WhyUsSection } from "../components/whyus";

export const QualitySection: React.FC = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
        Our Commitment To Quality 
      </h2>
        <div>
          <WhyUsSection />
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
