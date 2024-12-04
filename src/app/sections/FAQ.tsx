'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: React.ReactNode; // Update to accept JSX for links
}

const faqData: FAQItem[] = [
  {
    question: 'What App Development Services Do You Offer?',
    answer: 'We offer full-stack mobile app development services for both Android and iOS platforms. From custom app design to development and maintenance, we create mobile experiences tailored to your business needs, ensuring high performance and user engagement.',
  },
  {
    question: 'How Can SEO Improve My Website or App?',
    answer: 'SEO (Search Engine Optimization) helps improve the visibility of both websites and mobile apps on search engines and app stores. By optimizing your website’s content, structure, and app store listings, we increase organic traffic, enhance search rankings, and improve user engagement across platforms. This ensures that users can easily find your website or app, leading to higher conversions and better user experience.',
  },
  {
    question: 'What Types Of Advertisements Do You Manage?',
    answer: 'We manage various types of advertisements, including Google Ads, Meta Ads, and Social Media Ads (Facebook, Instagram). Our goal is to create effective ad campaigns that drive targeted traffic and generate leads for your business.',
  },
  {
    question: 'Do You Offer Ongoing Support for Web and App Development?',
    answer: 'Absolutely. We offer ongoing maintenance and support for both web and app development projects. Our team ensures that your app or website stays updated, secure, and runs smoothly, helping you to focus on growing your business.',
  },
  {
    question: 'Can You Help With Website or App Redesigns?',
    answer: 'Yes, we offer website and app redesign services to refresh your existing app or website. Whether you need a complete overhaul or just some updates, we work with you to improve design, functionality, and performance to better meet your business goals.',
  },
  {
    question: 'Where can I subscribe for NimbusSchedules™?',
    answer: (
      <>
        You can visit the NimbusSchedules™ website at{' '}
        <Link href="https://www.nimbusschedules.com" className='text-blue-400'>
        www.nimbusschedules.com
        </Link>{' '}
        to explore how it can help you.
      </>
    ),
  }
  
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center p-6 bg-black overflow-hidden">
      <motion.div
        className="relative w-full max-w-3xl bg-black text-white rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-white text-center mb-10">
          Just To Clear Your Thought Process.
        </p>
        <div className="p-6 space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-black"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center text-white cursor-pointer"
                aria-expanded={openIndex === index ? 'true' : 'false'}
              >
                <span>{item.question}</span>
                <span className={`text-2xl ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
              </div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={openIndex === index ? 'visible' : 'hidden'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="px-4 py-2"
              >
                {item.answer}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;
