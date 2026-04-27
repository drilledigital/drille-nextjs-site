'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { BanknoteArrowUp, ChevronRight } from "lucide-react";
import { AvatarCircles } from "./ui/avatar-circles";
import { motion } from "motion/react"

export default function HeroSection() {
  const avatarUrls = [
    "/assets/images/businessman-smiling-camera-office.jpg",
    "/assets/images/experienced-businessman-standing-office-room-indian-content-office-employee-eyeglasses-smiling-posing-with-folded-hands-business-management-corporation-concept.jpg",
    "assets/images/medium-shot-queer-person-work.jpg",
    "assets/images/front-view-businessman-with-crossed-arms.jpg",
  ];

  return (
    // 1. Replaced Fragment with a black wrapper div
    <div className="bg-black min-h-screen w-full relative z-0">
      <style>{`
        .filter-to-white {
          filter: brightness(0) invert(1) !important;
        }
      `}</style>
      
      <HeroHeader />
      
      <main className="overflow-x-hidden">
        <section>
<div className="py-24 md:py-28 md:pt-75 md:pb-20 md:mb-0.5 lg:pb-36 lg:pt-72">
  <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
    <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-amber-50">
                  Drilling Ideas Into Digital Reality
                </h1>
                <p className="mt-8 max-w-2xl text-balance text-lg text-amber-50">
                  We craft digital identities, websites, and automated systems that position businesses for scale and global recognition.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base"
                  >
                    <Link href="https://calendly.com/drillemanagement/new-meeting?month=2026-04">
                      <span className="text-nowrap">Work with us</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                  >
                    <Link href="#projects">
                      <span className="text-nowrap text-amber-50">See Our Work</span>
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
                  <AvatarCircles avatarUrls={avatarUrls} />
                  <p className="text-sm text-amber-50/80">Trusted by founders</p>
                </div>
              </div>
            </div>

            {/* Background Image Layer */}
            {/* The inset-1 creates a small gap, allowing the bg-black from parent to show as a border */}
            <div className="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
              <img
                src="/assets/images/Gradient.svg"
                alt="Background gradient"
                className="size-full object-cover md:rounded-[3rem]"
              />
            </div>
          </div>
        </section>  

        <section className="pb-2">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6 border-white/20">
                <p className="text-end text-sm text-white">Powered by the best tech</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit opacity-70 filter-to-white"
                      src="/assets/logos/Zapier_idfZNtxiND_1.png"
                      alt="Figma Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit opacity-70 filter-to-white"
                      src="/assets/logos/WooCommerce_Logo_0.svg"
                      alt="Woo Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit opacity-70 filter-to-white"
                      src="/assets/logos/HubSpot_idHe7kSdFV_0.svg"
                      alt="Hubspot Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit opacity-70 filter-to-white"
                      src="/assets/logos/Shopify.com_Logo_0.svg"
                      alt="Shopify Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit opacity-70 filter-to-white"
                      src="/assets/logos/Supabase_idZ_4AZztt_0.svg"
                      alt="Supabase Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit opacity-70 filter-to-white"
                      src="/assets/logos/nextjs.png"
                      alt="Next Js Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}