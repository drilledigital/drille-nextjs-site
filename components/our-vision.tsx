'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  useInView,
  useMotionValue,
  animate,
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const color = useTransform(progress, range, ['rgb(209, 213, 219)', 'rgb(0, 0, 0)']);
  return (
    <motion.span style={{ color }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
};

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, target, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, target, motionValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const OurVisionSection = () => {
  // Data for the metrics cards
  const metrics = [
    { target: 45, suffix: '+', label: 'Brands supported across design, web, and digital strategy' },
    { target: 92, suffix: '%', label: 'Client retention and referrals' },
    { target: 100, suffix: '+', label: 'Workflow hours saved for clients through better systems & automation' },
  ];

  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ['start 0.95', 'start -0.2'],
  });
  const headingText =
    'From brands to websites to full digital systems — we drill precision, clarity, and growth into everything we create.';
  const words = headingText.split(' ');

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
      <div data-nav-theme="light" className="vision-section bg-white text-black p-8 md:p-16 lg:p-24">
        
        {/* Blue Borders (Simulating the effect seen in the screenshot edges) */}
        <div className="border-t-2 border-b-2 py-10 md:py-20">
            
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

            {/* A. Left Column: Titles/Badges */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              
              {/* Top Badge: OUR VISION */}
              <div className="flex items-center mb-10 lg:mb-0">
                <div className="inline-flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                    Our Vision
                  </span>
                </div>
              </div>
              
              {/* Bottom Badge: SERVICES (Pushed to the bottom of the column) */}
              <div className="hidden lg:flex items-center gap-3 mt-auto">
              </div>
            </div>

            {/* B. Right Column: Content and Metrics */}
            <div className="lg:col-span-9">
              
              {/* Main Heading */}
              <h2
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-7xl leading-tight mb-10 font-semibold tracking-tighter flex flex-wrap"
              >
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + 1 / words.length;
                  return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                      {word}
                    </Word>
                  );
                })}
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
                    <p className="text-5xl sm:text-6xl lg:text-7xl font-normal text-blue-600 mb-3 tracking-tight leading-none">
                      <CountUp target={metric.target} suffix={metric.suffix} />
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