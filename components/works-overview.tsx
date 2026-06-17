"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight, Mail } from "lucide-react"
import { caseStudies } from "@/lib/case-studies"
import Aurora from "@/components/Aurora"

const ALL = "All"

const categories = [
  ALL,
  "Strategy",
  "UI/UX",
  "E-Commerce",
  "Branding",
  "Website",
]


export default function WorksOverview() {
  const [active, setActive] = useState(ALL)
  const [hoveredId, setHoveredId] = useState<string | null>(null) // eslint-disable-line @typescript-eslint/no-unused-vars

  const filtered = useMemo(() => {
    if (active === ALL) return caseStudies
    return caseStudies.filter((cs) =>
      cs.tags.some((t) => t.toLowerCase().includes(active.toLowerCase()))
    )
  }, [active])

  return (
    <div data-nav-theme="dark" className="bg-black text-white min-h-screen">

      {/* ── Page Hero ─────────────────────────────────── */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2.5 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.45)] shrink-0" />
            <span className="text-[10px] tracking-widest uppercase text-white/35 font-medium">Drille Digital · Selected Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] text-amber-50 max-w-3xl"
          >
            Work &amp; Case Studies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-white/45 font-light max-w-xl"
          >
            Explore selected projects where strategy, design, and craft come together.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 text-xs text-white/20 tracking-widest uppercase"
          >
            {caseStudies.length.toString().padStart(2, "0")} Projects
          </motion.p>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="w-full h-px bg-white/10" />
      </div>

      {/* ── Filter bar ────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-5 py-2 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
                {active === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-white -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <span className="ml-auto self-center text-xs text-white/25 tracking-widest uppercase hidden md:block">
              {filtered.length.toString().padStart(2, "0")} shown
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Works Grid ────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((cs, idx) => (
                <motion.div
                  key={cs.slug}
                  layout
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: idx * 0.06,
                  }}
                >
                  <Link
                    href={`/work/${cs.slug}`}
                    className="group block relative overflow-hidden rounded-2xl bg-white/5"
                    onMouseEnter={() => setHoveredId(cs.slug)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={cs.heroImage}
                        alt={cs.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />

                      {/* Base gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Index number */}
                      <div className="absolute top-5 left-6 text-xs font-mono text-white/30 group-hover:opacity-0 transition-opacity duration-300">
                        {(idx + 1).toString().padStart(2, "0")}
                      </div>

                      {/* Arrow */}
                      <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-black" />
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                          {cs.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] text-[10px] font-medium tracking-wide text-white/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-tight transition-transform duration-400 group-hover:-translate-y-1">
                          {cs.title}
                        </h2>
                        <p className="mt-1 text-sm text-white/55 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                          {cs.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty filter state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p className="text-white/25 text-sm tracking-widest uppercase">No projects in this category yet</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-black overflow-hidden px-8 md:px-14 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Aurora background */}
            <div className="absolute inset-0">
              <Aurora
                colorStops={["#3b82f6", "#8b5cf6", "#3b82f6"]}
                amplitude={1.0}
                blend={0.45}
                speed={0.6}
              />
            </div>
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.45)] shrink-0" />
                <span className="text-[10px] tracking-widest uppercase text-white/35 font-medium">Start a project</span>
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-semibold text-amber-50 leading-snug max-w-sm">
                Ready to start your project?
              </h3>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="https://calendly.com/drillemanagement/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 h-11 pl-6 pr-2 rounded-full bg-white text-black text-sm font-semibold overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-500"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Book a call</span>
                <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="mailto:drillemanagement@gmail.com"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white/8 backdrop-blur-md border border-white/15 text-white/75 text-sm font-medium hover:bg-white/12 hover:text-white transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                Send us a message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
