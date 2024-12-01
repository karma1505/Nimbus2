"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialsProps {
  items?: Testimonial[];
  direction?: "left" | "right";
  className?: string;
}

const InfiniteMovingCards: React.FC<TestimonialsProps> = ({
  items = [],
  direction = "left",
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [isDuplicated, setIsDuplicated] = useState(false);

  useEffect(() => {
    if (!isDuplicated) {
      duplicateItems();
      setIsDuplicated(true);
    }
  }, [isDuplicated]);

  const duplicateItems = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-7xl overflow-hidden py-16 px-6 md:py-32 md:px-80 mx-auto", // Adjusted padding for mobile
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-4 w-max flex-nowrap",
          direction === "left" ? "animate-scrollLeft" : "animate-scrollRight"
        )}
        style={{
          animationDuration: 'infinite', // Adjust the duration as needed
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-60 md:w-72 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-6 py-4 md:px-8 md:py-6"
            style={{
              background: "linear-gradient(180deg, rgba(20, 20, 20, 0.8), rgba(30, 30, 30, 0.8))",
              borderColor: "#444",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100% + 4px)] w-[calc(100% + 4px)]"
              ></div>
              <span className="text-xs md:text-sm leading-5 text-gray-200 font-normal relative z-20 block">
                {item.quote}
              </span>
              <div className="mt-4 md:mt-6 flex flex-row items-center relative z-20">
                <span className="flex flex-col gap-1">
                  <span className="text-xs md:text-sm leading-5 text-gray-300 font-normal">
                    {item.name}
                  </span>
                  <span className="text-xs md:text-sm leading-5 text-gray-300 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;