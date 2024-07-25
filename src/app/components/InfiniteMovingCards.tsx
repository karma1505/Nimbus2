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
  const [animationDirection, setAnimationDirection] = useState<"scrollLeft" | "scrollRight">("scrollLeft");

  useEffect(() => {
    if (!isDuplicated) {
      duplicateItems();
      setIsDuplicated(true);
    }

    const interval = setInterval(() => {
      setAnimationDirection((prevDirection) => (prevDirection === "scrollLeft" ? "scrollRight" : "scrollLeft"));
    }, 80000); // Interval in milliseconds (80 seconds)

    return () => clearInterval(interval);
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
          animationDirection === "scrollLeft" ? "animate-scrollLeft" : "animate-scrollRight"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-350 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-450"
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100% + 4px)] w-[calc(100% + 4px)]"
              ></div>
              <span className="text-sm leading-5 text-gray-100 font-normal relative z-20">
                {item.quote}
              </span>
              <div className="mt-6 flex flex-row items-center relative z-20">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-5 text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-5 text-gray-400 font-normal">
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
