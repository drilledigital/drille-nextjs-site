"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const UnifiedPreloader = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [showStairs, setShowStairs] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplayCount(Math.round(latest));
      },
      onComplete: () => {
        setTimeout(() => {
          setShowStairs(true);
          // Complete after stairs animation
          setTimeout(() => {
            setIsComplete(true);
          }, 1000); // Adjust timing based on stair animation duration
        }, 300);
      },
    });

    return controls.stop;
  }, [count]);

  if (isComplete) {
    return null;
  }

  // Number of stairs/columns
  const numStairs = 8;
  const stairs = Array.from({ length: numStairs }, (_, i) => i);

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Main Preloader Content */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showStairs ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-black"
      >
        {/* Logo Spinner - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-[300px] h-[300px] flex items-center justify-center mb-20"
        >
          {/* Base D Logo - Static */}
          <Image
            src="/assets/images/D Bold Logo .png"
            alt="D Bold Logo"
            width={300}
            height={300}
            className="absolute"
          />

          {/* Spinning Inner Logo - Rotates */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute"
          >
            <Image
              src="/assets/images/Spinning Inner Logo.svg"
              alt="Spinner Inner Logo"
              width={180}
              height={180}
            />
          </motion.div>
        </motion.div>

        {/* Progress Section - Bottom Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 w-full"
        >
          {/* Progress Bar */}
          <div className="relative w-full h-3 bg-zinc-800 overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white"
              initial={{ width: "0%" }}
              animate={{ width: `${displayCount}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Percentage Display - Bottom Right */}
          <div className="absolute bottom-4 right-8">
            <h1 
              className="text-7xl font-bold text-white tracking-wider" 
              style={{fontFamily: 'Geist'}}
            >
              {displayCount}%
            </h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Stair Transition Overlay */}
      {showStairs && (
        <div className="absolute inset-0 flex">
          {stairs.map((index) => (
            <motion.div
              key={index}
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.76, 0, 0.24, 1]
              }}
              className="relative h-full bg-black"
              style={{ width: `${100 / numStairs}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UnifiedPreloader;