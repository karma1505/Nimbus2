"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

const AppDevelopmentServices: React.FC = () => {
  const router = useRouter();

  // Service structured data
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services",
    "description": "Professional mobile app development services including iOS, Android, and cross-platform development.",
    "provider": {
      "@type": "Organization",
      "name": "Nimbus Technologies Private Limited",
      "url": "https://nimbustechnologies.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Mobile App Development",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  const handleBackToServices = () => {
    router.push('/');
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <Navbar />
      
      <main className="flex-grow mb-40">
        <div className="container mx-auto px-4 pt-20">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/#services' },
              { label: 'Mobile App Development' }
            ]} 
          />
        </div>
        <section id='app-development' className="py-20">
          <div className="container mx-auto px-4">
            <button 
              onClick={handleBackToServices}
              className="text-white mb-8 inline-block hover:underline cursor-pointer"
            >
              ← Back to All Services
            </button>
            
            <motion.div
              className="max-w-4xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mobile App Development Services
              </h2>
              <p className="text-xl text-white">
                Building native and cross-platform mobile experiences for iOS and Android.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "iOS App Development",
                  description: "Native iOS apps built with Swift and SwiftUI for optimal performance.",
                  color: "bg-gray-50",
                  textColor: "text-gray-800",
                  delay: 0.2,
                },
                {
                  title: "Android App Development",
                  description: "High-quality Android apps using Kotlin and Jetpack Compose.",
                  color: "bg-green-50",
                  textColor: "text-green-800",
                  delay: 0.4,
                },
                {
                  title: "Cross-Platform Development",
                  description: "Flutter and React Native apps for unified iOS/Android solutions.",
                  color: "bg-blue-50",
                  textColor: "text-blue-800",
                  delay: 0.6,
                },
                {
                  title: "App UI/UX Design",
                  description: "Intuitive interfaces that enhance user engagement and retention.",
                  color: "bg-purple-50",
                  textColor: "text-purple-800",
                  delay: 0.8,
                },
                {
                  title: "App Testing & QA",
                  description: "Comprehensive testing to ensure bug-free performance.",
                  color: "bg-yellow-50",
                  textColor: "text-yellow-800",
                  delay: 1.0,
                },
                {
                  title: "App Maintenance",
                  description: "Ongoing updates and support for existing applications.",
                  color: "bg-red-50",
                  textColor: "text-red-800",
                  delay: 1.2,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`${service.color} p-6 rounded-lg shadow-md`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: service.delay,
                  }}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${service.textColor}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppDevelopmentServices;