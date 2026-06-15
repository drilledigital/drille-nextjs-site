'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { BanknoteArrowUp, ChevronRight, ArrowUpRight } from "lucide-react";
import { AvatarCircles } from "./ui/avatar-circles";
import { motion } from "motion/react"
import Aurora from "./Aurora";

export default function HeroSection() {
  const avatarUrls = [
    "/assets/images/businessman-smiling-camera-office.jpg",
    "/assets/images/experienced-businessman-standing-office-room-indian-content-office-employee-eyeglasses-smiling-posing-with-folded-hands-business-management-corporation-concept.jpg",
    "assets/images/medium-shot-queer-person-work.jpg",
    "assets/images/front-view-businessman-with-crossed-arms.jpg",
  ];

  return (
    // 1. Replaced Fragment with a black wrapper div
    <div data-nav-theme="dark" className="bg-black min-h-screen w-full relative z-0">
      <style>{`
        .filter-to-white {
          filter: brightness(0) invert(1) !important;
        }
      `}</style>
      
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

                <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                  <Link
                    href="https://calendly.com/drillemanagement/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full bg-white text-black overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-[1.02]"
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative text-nowrap text-sm font-semibold tracking-wide">Work with us</span>
                    <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <Link
                    href="#projects"
                    className="group inline-flex items-center gap-2 h-12 px-6 rounded-full border border-white/20 text-amber-50 text-sm font-medium transition-all duration-300 hover:border-white/50 hover:bg-white/5"
                  >
                    <span className="text-nowrap">See Our Work</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
                  <AvatarCircles avatarUrls={avatarUrls} />
                  <p className="text-sm text-amber-50/80">Trusted by founders</p>
                </div>
              </div>
            </div>

            {/* Background Aurora Layer */}
            <div className="absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:rounded-[3rem] dark:border-white/5 bg-black">
              <Aurora
                colorStops={["#3b82f6", "#8b5cf6", "#3b82f6"]}
                amplitude={1.0}
                blend={0.5}
                speed={0.6}
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
                  <div className="flex shrink-0 items-center">
                    <img
                      className="mx-auto h-5 w-auto opacity-70 filter-to-white"
                      src="/assets/logos/Zapier_idfZNtxiND_1.png"
                      alt="Figma Logo"
                      height="20"
                    />
                  </div>

                  <div className="flex shrink-0 items-center">
                    <img
                      className="mx-auto h-4 w-auto opacity-70 filter-to-white"
                      src="/assets/logos/WooCommerce_Logo_0.svg"
                      alt="Woo Logo"
                      height="16"
                    />
                  </div>
                  <div className="flex shrink-0 items-center">
                    <img
                      className="mx-auto h-5 w-auto opacity-70 filter-to-white"
                      src="/assets/logos/HubSpot_idHe7kSdFV_0.svg"
                      alt="Hubspot Logo"
                      height="20"
                    />
                  </div>
                  <div className="flex shrink-0 items-center">
                    <img
                      className="mx-auto h-5 w-auto opacity-70 filter-to-white"
                      src="/assets/logos/Shopify.com_Logo_0.svg"
                      alt="Shopify Logo"
                      height="20"
                    />
                  </div>
                  <div className="flex shrink-0 items-center">
                    <img
                      className="mx-auto h-7 w-auto opacity-70 filter-to-white"
                      src="/assets/logos/Supabase_idZ_4AZztt_0.svg"
                      alt="Supabase Logo"
                      height="28"
                    />
                  </div>

                  <div className="flex shrink-0 items-center">
                    <img
                      className="mx-auto h-6 w-auto opacity-70 filter-to-white"
                      src="/assets/logos/nextjs.png"
                      alt="Next Js Logo"
                      height="24"
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