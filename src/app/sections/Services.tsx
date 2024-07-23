"use client";
import React from 'react';
import Testimonials from '../components/Testimonials';

const Services: React.FC = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-white">Discover how we can help your business grow.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Web Design & Development</h3>
            <p className="text-gray-700">
              We create stunning websites tailored to your brand with modern design principles and robust functionality.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Digital Advertising & SEO</h3>
            <p className="text-gray-700">
              Enhance your online presence with strategic digital advertisement campaigns and search engine optimizations.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-700">
              Build and optimize your e-commerce platform to drive sales and provide a seamless shopping experience.
            </p>
          </div>
        </div>
        <div className="mt-4">
            <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default Services;

