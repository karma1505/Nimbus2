"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Testimonials from "../components/Testimonials";

const Services: React.FC = () => {
  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white">
            Discover how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Design & Development",
              description:
                "We create stunning websites tailored to your brand with modern design principles and robust functionality.",
              color: "bg-blue-50",
              textColor: "text-blue-600",
              delay: 0.2,
              link: "#", 
            },
            {
              title: "Android & iOS App Development",
              description:
                "We will develop custom Android and iOS apps tailored to your business needs for a seamless user experience.",
              color: "bg-green-50",
              textColor: "text-green-600",
              delay: 0.4,
              link: "#", 
            },
            {
              title: "Business Solutions From NimbusTech.",
              description:
                "Leverage our custom-built software solutions like NimbusSchedules™ to optimize your business processes and drive growth.",
              color: "bg-purple-50",
              textColor: "text-purple-600",
              delay: 0.6,
              link: "#", 
            }
            
          ].map((service, index) => (
            <Link href={service.link} key={index}>
              <motion.div
                className={`${service.color} p-6 rounded-lg shadow-md cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: service.delay,
                }}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${service.textColor}`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          <Testimonials />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
