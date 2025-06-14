"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const Lamp = () => {
  return (
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-70 overflow-hidden">
      {/* Left gradient cone */}
      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] max-w-full z-10"
      >
        <div className="absolute w-full left-0 bg-gradient-to-t from-black to-transparent h-40 bottom-0 z-20" />
        <div className="absolute w-40 h-full left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
      </motion.div>

      {/* Right gradient cone */}
      <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top] max-w-full z-10"
      >
        <div className="absolute w-40 h-full right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute w-full right-0 bg-gradient-to-t from-black to-transparent h-40 bottom-0 z-20" />
      </motion.div>

      {/* Background effects */}
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-gradient-to-t from-black via-black/80 to-transparent blur-2xl z-0"></div>
      <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
      <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl max-w-full"></div>
      
      {/* Additional light effects */}
      <motion.div
        initial={{ width: "8rem" }}
        whileInView={{ width: "16rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl max-w-full"
      ></motion.div>
      
      <motion.div
        initial={{ width: "15rem" }}
        whileInView={{ width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute inset-auto z-40 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 max-w-full"
      ></motion.div>
      
      {/* Bottom fade-out container */}
      <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-gradient-to-t from-black via-black/90 to-transparent"></div>
    </div>
  );
};