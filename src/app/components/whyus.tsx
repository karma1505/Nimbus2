"use client";

import React from "react";
import { cn } from "../lib/utils";

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      title: "Expert Team",
      description:
        "The Nimbus Team is composed of seasoned developers, designers, and SEO specialists who scale your business to the next level by bringing it online.",
      color: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Tailored Solutions",
      description:
        "At Nimbus, we understand that every business is unique, and we create custom websites that reflect your brand's identity.",
      color: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest technologies to build responsive, fast, and SEO-friendly websites that perform exceptionally well for all your needs.",
      color: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Transparent Process",
      description:
        "From planning to deployment, our process of creating your website is totally transparent, ensuring that you're always in the loop and satisfied with the progress.",
      color: "bg-white",
      textColor: "text-yellow-600",
    },
  ];

  return (
    <section className="bg-black py-4">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <h2 className="text-2xl  text-white text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className={cn(
                `${point.color} p-6 rounded-lg shadow-md`,
                "transition-transform transform hover:scale-105",
                "h-56 w-full"
              )}
            >
              <h3 className={`text-lg font-semibold mb-3 ${point.textColor}`}>
                {point.title}
              </h3>
              <p className="text-gray-700 overflow-hidden text-ellipsis">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
