"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialsProps {
  items?: Testimonial[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
  pauseOnHover?: boolean;
}

const InfiniteMovingCards: React.FC<TestimonialsProps> = ({
  items = [],
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!items.length) return;

    // Duplicate items for seamless infinite scroll
    const scrollerContent = Array.from(scrollerRef.current?.children || []);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden py-16 px-6 md:py-32 md:px-20 mx-auto",
        className
      )}
    >
      {/* Added heading section with consistent styling */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-white">
          Hear from businesses we&apos;ve helped grow.
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full gap-4 w-max flex-nowrap",
            direction === "left" ? "animate-infinite-scroll" : "animate-infinite-scroll-reverse",
            pauseOnHover && "hover:[animation-play-state:paused]",
            speed === "slow" && "md:[animation-duration:40s]",
            speed === "normal" && "md:[animation-duration:20s]",
            speed === "fast" && "md:[animation-duration:10s]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20, 20, 20, 0.8), rgba(30, 30, 30, 0.8))",
              }}
            >
              <blockquote>
                <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-500 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;