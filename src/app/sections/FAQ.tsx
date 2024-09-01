'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
    {
      question: 'What Web Development Services Do You Offer?',
      answer: 'We Provide Comprehensive Web Development Services Including Custom Website Design, Development, And Maintenance. Our Team Specializes In Creating Responsive And User-Friendly Websites Tailored To Your Business Needs.',
    },
    {
      question: 'How Can SEO Improve My Website?',
      answer: 'SEO (Search Engine Optimization) Helps Improve Your Website’s Visibility On Search Engines Like Google. By Optimizing Your Website’s Content And Structure, We Help Increase Organic Traffic, Improve Search Rankings, And Enhance User Experience.',
    },
    {
      question: 'What Types Of Advertisements Do You Manage?',
      answer: 'We Manage Various Types Of Advertisements Including Google Ads, Social Media Ads (Facebook, Instagram, LinkedIn), And Display Advertising. Our Goal Is To Create Effective Ad Campaigns That Drive Targeted Traffic And Generate Leads For Your Business.',
    },
    {
      question: 'How Long Does It Take To See Results From SEO?',
      answer: 'SEO Is A Long-Term Strategy And Results Can Vary Based On Factors Like Competition And Current Website Status. Generally, You Can Start Seeing Improvements In Search Rankings And Traffic Within 3 To 6 Months. We Provide Regular Updates And Reports To Track Progress.',
    },
    {
      question: 'Can You Help With Website Redesigns?',
      answer: 'Yes, We Offer Website Redesign Services To Refresh Your Existing Site. Whether You Need A Complete Overhaul Or Just Some Updates, We Work With You To Improve Design, Functionality, And Performance To Better Meet Your Business Goals.',
    },
    {
      question: 'Do You Offer Ongoing Website Maintenance?',
      answer: 'Absolutely. We Offer Ongoing Maintenance Services To Ensure Your Website Remains Up-To-Date, Secure, And Running Smoothly. Our Maintenance Packages Can Include Updates, Backups, Security Monitoring, And Performance Optimization.',
    },
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
          <p className="text-xl text-white text-center mb-10 ">
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
