"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useRef, useState } from "react";

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
        "scroller relative z-20 max-w-7xl overflow-hidden py-32 px-80 mx-auto", // Added mx-auto for horizontal centering
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
            className="w-72 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6"
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
              <span className="text-sm leading-5 text-gray-200 font-normal relative z-20 block">
                {item.quote}
              </span>
              <div className="mt-6 flex flex-row items-center relative z-20">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-5 text-gray-300 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-5 text-gray-300 font-normal">
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
