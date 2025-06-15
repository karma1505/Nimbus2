"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const WebDevelopmentServices: React.FC = () => {
  const router = useRouter();

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
    <section id ='web-development' className="bg-black py-20">
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
            Web Development Services
          </h2>
          <p className="text-xl text-white">
            Transforming ideas into digital experiences with cutting-edge
            technology and innovative design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Web Development",
              description:
                "Tailored web solutions that cater to your unique business needs, ensuring optimal performance and scalability.",
              color: "bg-blue-50",
              textColor: "text-blue-600",
              delay: 0.2,
            },
            {
              title: "Responsive Design",
              description:
                "Ensuring seamless user experiences across all devices with mobile-first design principles.",
              color: "bg-green-50",
              textColor: "text-green-600",
              delay: 0.4,
            },
            {
              title: "E-commerce Development",
              description:
                "Creating robust e-commerce platforms to drive sales and enhance customer experiences.",
              color: "bg-yellow-50",
              textColor: "text-yellow-600",
              delay: 0.8,
            },
            {
              title: "API Integration",
              description:
                "Seamlessly connect your website with third-party services and applications for enhanced functionality.",
              color: "bg-red-50",
              textColor: "text-red-600",
              delay: 1.0,
            },
            {
              title: "Web Maintenance & Support",
              description:
                "Ongoing maintenance and support to keep your website up-to-date, secure, and performing at its best.",
              color: "bg-pink-50",
              textColor: "text-pink-600",
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
  );
};

export default WebDevelopmentServices;
