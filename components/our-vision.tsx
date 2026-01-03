'use client';

import React from 'react';
import { Button } from '@/components/ui/moving-border';

const OurVisionSection = () => {
  // Data for the metrics cards
  const metrics = [
    { value: '45+', label: 'Brands supported across design, web, and digital strategy' },
    { value: '92%', label: 'Client retention and referrals' },
    { value: '100+', label: 'Workflow hours saved for clients through better systems & automation' },
  ];

  return (
    <>
      {/* 1. Font and Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        
        /* Apply Manrope to everything in this component */
        .vision-section {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>

      {/* 2. Main Container with Grid Layout */}
      <div className="vision-section bg-white text-black p-8 md:p-16 lg:p-24">
        
        {/* Blue Borders (Simulating the effect seen in the screenshot edges) */}
        <div className="border-t-2 border-b-2 py-10 md:py-20">
            
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

            {/* A. Left Column: Titles/Badges */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              
              {/* Top Badge: OUR VISION with Moving Border */}
              <div className="flex items-center gap-3 mb-10 lg:mb-0">
                <Button
                  borderRadius="1rem"
                  className="bg-white border-slate-200 text-black font-medium"
                  containerClassName="h-auto w-auto"
                  borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
                  duration={3000}
                >
                  <span className="text-xs md:text-sm tracking-wider uppercase px-4 py-2">
                    OUR VISION
                  </span>
                </Button>
              </div>
              
              {/* Bottom Badge: SERVICES (Pushed to the bottom of the column) */}
              <div className="hidden lg:flex items-center gap-3 mt-auto">
              </div>
            </div>

            {/* B. Right Column: Content and Metrics */}
            <div className="lg:col-span-9">
              
              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-tight mb-10 font-semibold tracking-tighter">
                From brands to websites to full digital systems — we drill precision, clarity, and growth into everything we create.
              </h2>
              
              {/* Description/Paragraph */}
              <p className="text-base md:text-lg max-w-4xl leading-relaxed mb-16 text-gray-700">
                Our vision is to transform bold ideas into digital systems that work seamlessly together – helping businesses grow faster, operate smarter, and stand out with a brand built to last. We go beyond beautiful design to engineer the tools, experiences, and automated workflows that create real impact in a digital-first world.
              </p>
              
              {/* Metrics Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    {/* Metric Value */}
                    <p className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-blue-600 mb-2">
                      {metric.value}
                    </p>
                    {/* Metric Label */}
                    <p className="text-base text-gray-700">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              
            </div>
            

            
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVisionSection;