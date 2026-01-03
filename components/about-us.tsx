'use client';

import React from 'react';
// Assuming the path is correct
import { ShimmerButton } from './ui/shimmer-button'; 
// Assuming you have an Image component or plain <img> tag setup for local assets
import Image from 'next/image'; // Assuming Next.js for better image handling

const AboutSection = () => {
  // ========================================
  // BRAND LOGOS CONFIGURATION
  // ========================================
  // Define the assets with their file paths
  // 💡 TIP: You can now customize individual logo sizes using the 'scale' property
  // scale: 1.0 = normal size (default)
  // scale: 1.5 = 50% larger
  // scale: 0.8 = 20% smaller
  const brandLogos = [
    { 
      id: 1, 
      alt: 'Ashesi Logo',
      src: '/assets/images/Ashesi Logo No BG.png',
      scale: 0.7  // 👈 Adjust this to change individual logo size
    },
    { 
      id: 2, 
      alt: 'ThreeTwentyOneLogo',
      src: '/assets/images/threetwentyonelogo-removebg-preview.png',
      scale: 1.0  // 👈 Example: Change to 1.2 to make this logo 20% bigger
    },
    { 
      id: 3, 
      alt: 'CloudFruition Logo',
      src: '/assets/images/cloudfruition_symbol-removebg-preview.png',
      scale: 1.0  // 👈 Example: Change to 0.8 to make this logo 20% smaller
    },
    { 
      id: 4, 
      alt: 'P1M Logo',
      src: '/assets/images/Project_One_Million_Black_Logo-removebg-preview.png',
      scale: 2.0  // 👈 Adjust size independently
    },
    { 
      id: 5, 
      alt: 'Closet Logo',
      src: '/assets/images/Closet Logo White No BG.png',
      scale: 2.0  // 👈 Adjust size independently
    },
  ];

  return (
    <>
      {/* ========================================
          CUSTOM STYLES & ANIMATIONS
          ======================================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Manrope', sans-serif;
        }
        
        /* Marquee animation for infinite scroll effect */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      
      {/* ========================================
          MAIN CONTAINER
          ======================================== */}
      <div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 lg:py-20 md:py-28">
        
        {/* ========================================
            ABOUT US BADGE (ShimmerButton)
            ======================================== */}
        <div className="mb-12">
            <ShimmerButton
                shimmerColor="#A0D9F8" // Light blue shimmer effect
                background="#1C2128"   // Dark gray background
                className="text-lg font-semibold uppercase tracking-wider px-8 py-4 rounded-full"
                borderRadius="10px"
            >
                ABOUT US
            </ShimmerButton>
        </div>
        
        {/* ========================================
            MAIN HEADING
            ======================================== */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-center max-w-5xl leading-tight mb-8 tracking-tight">
          Drille Digital is a branding, design, and growth studio drilling clarity into every part of your digital presence.
        </h1>
        
        {/* ========================================
            DESCRIPTION TEXT
            ======================================== */}
        <p className="text-base md:text-lg text-center max-w-4xl leading-relaxed mb-20 text-gray-300">
          From identity and websites to social media, automation, and marketing systems, we build the tools that help ambitious brands look global, convert consistently, and scale with precision. stand out, inspire, and excel in a crowded digital-first world
        </p>
        
        {/* ========================================
            BRANDS MARQUEE SECTION
            ======================================== */}
        <div className="w-full mb-12">
          {/* Section Label */}
          <p className="text-xs uppercase tracking-widest text-center mb-8 text-gray-400">
            BRANDS WE&apos;VE WORKED WITH
          </p>
          
          {/* ========================================
              MARQUEE CONTAINER
              💡 The marquee creates an infinite scrolling effect
              ======================================== */}
          <div className="relative overflow-hidden w-full">
            {/* 
              Flex container with animation
              gap-24 = spacing between logos (adjust this to change spacing)
            */}
            <div className="flex items-center gap-24 animate-marquee whitespace-nowrap">
              
              {/* ========================================
                  FIRST SET OF LOGOS
                  ======================================== */}
              {brandLogos.map((brand) => (
                <div
                  key={`first-${brand.id}`}
                  className="flex items-center justify-center w-40 h-24 md:w-48 md:h-28 opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                >
                  {/* 
                    Individual logo with custom scaling
                    The transform scale is controlled by brand.scale property
                  */}
                  <img 
                    src={brand.src} 
                    alt={brand.alt} 
                    className="max-w-full max-h-full object-contain transition-transform duration-300"
                    style={{ 
                      transform: `scale(${brand.scale})` // 👈 Apply individual scaling here
                    }}
                  />
                </div>
              ))}
              
              {/* ========================================
                  DUPLICATE SET FOR SEAMLESS LOOP
                  This creates the infinite scroll effect
                  ======================================== */}
              {brandLogos.map((brand) => (
                <div
                  key={`second-${brand.id}`}
                  className="flex items-center justify-center w-40 h-24 md:w-48 md:h-28 opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                >
                  <img 
                    src={brand.src} 
                    alt={brand.alt} 
                    className="max-w-full max-h-full object-contain transition-transform duration-300"
                    style={{ 
                      transform: `scale(${brand.scale})` // 👈 Apply individual scaling here
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* ========================================
            CALL-TO-ACTION BUTTON
            💡 TIP: You could replace this with ShimmerButton too for consistency
            ======================================== */}
        <button className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 transition-colors px-8 py-4 rounded-full mt-8 mb-8">
          {/* Green status indicator dot */}
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm uppercase tracking-wider font-medium">WORK WITH US</span>
        </button>
      </div>
    </>
  );
};

export default AboutSection;