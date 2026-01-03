"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features?: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

// Default placeholder data
const defaultFeatures: Feature[] = [
  {
    step: "Step 1",
    title: "Initial Discovery Call",
    content: "We start by understanding your business, goals, and challenges. This call helps us define your vision and identify the best solutions for design, web, and branding needs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    step: "Step 2",
    title: "Strategy & Creative Direction",
    content: "Our team develops a clear strategy and creative direction tailored to your brand. We create mood boards, wireframes, and initial concepts to ensure alignment before production begins.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
  },
  {
    step: "Step 3",
    title: "Building & Development",
    content: "We bring your brand to life through website development, app design, or digital assets. Each element is crafted with attention to UX, performance, and scalability to deliver high-quality results.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
  },
  {
    step: "Step 4",
    title: "Launch, Automate & Support",
    content: "After testing and refining, we launch your project. We also provide ongoing support, optimization, and automation solutions to ensure your brand continues to perform and grow.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

export function FeatureSteps({
  features = defaultFeatures,
  className,
  title = "Our Process",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!features || features.length === 0) return;

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features, autoPlayInterval])

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className={cn("p-8 md:p-12 bg-white", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-10 text-center text-black">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-black border-black text-white scale-110"
                      : "bg-blue-200 border-blue-400 text-blue-700",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span> //* 
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-black">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg bg-gray-200"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform transform"
                        width={1000}
                        height={500}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-white/50 to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}