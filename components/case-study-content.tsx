"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react"
import type { CaseStudy } from "@/lib/case-studies"
import Aurora from "@/components/Aurora"

function GlassTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium tracking-wide text-white/80 bg-white/8 backdrop-blur-md border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
      {children}
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.45)] shrink-0" />
      <span className="text-[10px] tracking-widest uppercase text-white/35 font-medium">{children}</span>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-amber-50 leading-tight tracking-tight mt-20 mb-6">
      {children}
    </h2>
  )
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg text-white/55 leading-[1.85] font-light">
      {children}
    </p>
  )
}

function ImagePlaceholder({ tall = false, label = "Visual — Coming Soon" }: { tall?: boolean; label?: string }) {
  return (
    <div className={`w-full rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mt-10 ${tall ? "h-[440px] md:h-[560px]" : "h-[280px] md:h-[380px]"}`}>
      <span className="text-[11px] tracking-widest uppercase text-white/20">{label}</span>
    </div>
  )
}

function Divider() {
  return <div className="w-full h-px bg-white/[0.08]" />
}

export default function CaseStudyContent({ caseStudy: cs }: { caseStudy: CaseStudy }) {
  return (
    <main className="bg-black text-white">

      {/* ── Hero image ──────────────────────────────────── */}
      <section data-nav-theme="dark" className="relative w-full h-[60vh] min-h-[440px] overflow-hidden">
        <Image
          src={cs.heroImage}
          alt={cs.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />

        {/* Breadcrumb */}
        <div className="absolute top-28 left-0 right-0 px-6 md:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-[11px] text-white/40 tracking-wide">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/work" className="hover:text-white/80 transition-colors">Work</Link>
            <span>/</span>
            <span className="text-white/70">{cs.title}</span>
          </nav>
        </div>
      </section>

      {/* ── Title block ─────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 pt-12 pb-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-white/30 tracking-widest uppercase mb-5">{cs.date}</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-amber-50 leading-[1.05] tracking-tight">
            {cs.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/45 font-light max-w-2xl">
            {cs.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {cs.tags.map((tag) => (
              <GlassTag key={tag}>{tag}</GlassTag>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meta strip ──────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <Divider />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/25 mb-2">Industry</p>
              <p className="text-sm text-white/65">{cs.tags[0]}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/25 mb-2">Timeline</p>
              <p className="text-sm text-white/65">{cs.duration}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-white/25 mb-2">Scope</p>
              <p className="text-sm text-white/65">{cs.tags.slice(1).join(", ")}</p>
            </div>
          </div>
          <Divider />
        </div>
      </section>

      {/* ── Editorial content ───────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 pb-8">
        <div className="max-w-4xl mx-auto">

          <SectionHeading>The Overview.</SectionHeading>
          <BodyText>{cs.overview}</BodyText>

          {cs.images[0] ? (
            <div className="relative w-full h-[440px] md:h-[560px] rounded-2xl overflow-hidden mt-10">
              <Image src={cs.images[0]} alt={`${cs.title} visual`} fill className="object-cover" />
            </div>
          ) : (
            <ImagePlaceholder tall />
          )}

          <SectionHeading>The Challenge.</SectionHeading>
          <BodyText>{cs.challenge}</BodyText>

          {cs.images[1] ? (
            <div className="relative w-full h-[380px] md:h-[480px] rounded-2xl overflow-hidden mt-10">
              <Image src={cs.images[1]} alt={`${cs.title} challenge`} fill className="object-cover" />
            </div>
          ) : (
            <ImagePlaceholder />
          )}

          <SectionHeading>The Solution.</SectionHeading>
          <BodyText>{cs.solution}</BodyText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {cs.images[2] ? (
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src={cs.images[2]} alt="detail 1" fill className="object-cover" />
              </div>
            ) : (
              <ImagePlaceholder label="Detail — Coming Soon" />
            )}
            {cs.images[3] ? (
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src={cs.images[3]} alt="detail 2" fill className="object-cover" />
              </div>
            ) : (
              <ImagePlaceholder label="Detail — Coming Soon" />
            )}
          </div>

          <SectionHeading>The Results.</SectionHeading>
          <BodyText>{cs.results}</BodyText>

        </div>
      </section>

      {/* ── Quote block ─────────────────────────────────── */}
      {cs.quoteAuthor && <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <Divider />
          <div className="py-16 md:py-20">
            <p className="text-[10px] tracking-widest uppercase text-white/25 mb-10">Client Perspective</p>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-50 leading-[1.35] mb-12">
              &ldquo;{cs.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-semibold text-white">
                {cs.quoteAuthor.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">{cs.quoteAuthor}</p>
                <p className="text-xs text-white/35 mt-0.5">{cs.quoteRole}</p>
              </div>
            </div>
          </div>
          <Divider />
        </div>
      </section>}

      {/* ── Back nav ────────────────────────────────────── */}
      <div className="px-6 md:px-12 lg:px-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 text-sm text-white/35 hover:text-white/70 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            All projects
          </Link>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-black border border-white/10 overflow-hidden px-8 md:px-14 py-14 md:py-20">
            <div className="absolute inset-0">
              <Aurora
                colorStops={["#3b82f6", "#8b5cf6", "#3b82f6"]}
                amplitude={1.0}
                blend={0.45}
                speed={0.6}
              />
            </div>
            <div className="relative z-10">
              <SectionLabel>Start a project</SectionLabel>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-amber-50 leading-tight max-w-md mb-3">
                Let&apos;s build something great together.
              </h2>
              <p className="text-white/50 text-base max-w-sm mb-8">
                Whether you have a brief or just an idea — we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
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
        </div>
      </section>

    </main>
  )
}
