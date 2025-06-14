"use client";

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h2>
          <p className="text-xl text-white">
            Discover who we are and what drives us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="px-4"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Our Mission
            </h3>
            <p className="text-white">
            At NimbusTech, our mission is to empower businesses and startups with innovative digital solutions.
            We believe in building custom websites, developing mobile apps, and delivering tailored software solutions while keeping a customer centric approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="px-4"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Our Vision
            </h3>
            <p className="text-white">
              Our vision is to be a leading force in the digital industry, known for our creativity, reliability, and dedication to client success. We envision a future where every business can thrive online with our tailored and best-in-class services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
