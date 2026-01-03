"use client"

import React from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/moving-border' 

import './FlowingMenu.css';

// Add default menu items
const defaultItems = [
  {
    text: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
  },
  {
    text: " Digital Marketing",
    // NOTE: If you are using a local image, replace the link with its path 
    // from the /public directory, e.g., "/assets/images/digital-marketing-reference.jpg"
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400"
  },
  {
    text: "Website Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400"
  },
  {
    text: "Automation & Systems",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
  }
];

function FlowingMenu({ items = defaultItems }) {
  return (
    // FIX: A single root element is required (I've added 'flowing-menu-container' 
    // for layout flexibility).
    <div className="flowing-menu-container"> 
      
      {/* 1. Button component at the top-left */}
      <div className="flex items-center gap-3 ml-10 pl-20 pb-9 mb-10 lg:mb-0">
        <Button
          borderRadius="1rem"
          className="bg-white border-slate-200 text-black font-medium"
          containerClassName="h-auto w-auto"
          borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
          duration={3000}
        >
          <span className="text-xs md:text-sm tracking-wider uppercase px-4 py-2">
            OUR SERVICES
          </span>
        </Button>
      </div>

      {/* 2. Menu component */}
      <div className="menu-wrap">
        <nav className="menu">
          {items.map((item, idx) => (
            <MenuItem key={idx} {...item} />
          ))}
        </nav>
      </div>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.05, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * y2;
  };

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
    </React.Fragment>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <a className="menu__item-link" href={link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text}
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;