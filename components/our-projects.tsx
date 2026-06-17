"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  subtitle: string
  image: string
  tags: string[]
  slug: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Project One Million",
    subtitle: "Tech in service of social impact",
    image: "/assets/images/laptop chair P1M mockup.png",
    tags: ["Strategy", "Visual Identity", "Website"],
    slug: "project-one-million",
  },
  {
    id: "2",
    title: "Ashesi",
    subtitle: "Center For Leadership",
    image: "/assets/images/Ashesi Center For Leadership Mockup on table.png",
    tags: ["Strategy", "Marketing", "Graphic Design"],
    slug: "ashesi",
  },
  {
    id: "3",
    title: "Three Twenty One",
    subtitle: "Commerce experiences built for scale",
    image: "/assets/images/ThreeTwentyOne Mockup.png",
    tags: ["E-commerce", "SEO Marketing", "Website"],
    slug: "three-twenty-one",
  },
  {
    id: "4",
    title: "Closet",
    subtitle: "Ai Powered Fashion E-commerce",
    image: "/assets/images/Closet Fashion Laptop Mockup.png",
    tags: ["E-Commerce", "AI", "Website"],
    slug: "closet",
  },
  {
    id: "5",
    title: "Grandport",
    subtitle: "Luxury Real Estate",
    image: "/assets/images/Grandport framer mockup.png",
    tags: ["UI/UX", "Visual Identity", "Website"],
    slug: "grandport",
  },
  {
    id: "6",
    title: "Infrastructure Institute for Development",
    subtitle: "Shaping Africa's Infrastructure Future",
    image: "/assets/images/IID web mockup.png",
    tags: ["UI/UX", "Visual Identity", "Website"],
    slug: "infrastructure-institute-for-development",
  },
  {
    id: "7",
    title: "Doxa Scholarships",
    subtitle: "Scholarship Application Platform",
    image: "/assets/images/Doxa Scholarships Mockups Hero.png",
    tags: ["UI/UX", "Website", "Donation Platform"],
    slug: "doxa-scholarships",
  },
  {
    id: "8",
    title: "Beryl's Quick Snacks",
    subtitle: "Online Food Brand",
    image: "/assets/images/Berylsquicksnacks UI Mockup.png",
    tags: ["UI/UX", "E-commerce", "Website"],
    slug: "beryls-quick-snacks",
  },
]

export default function OurProjects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  return (
    <section id="projects" data-nav-theme="light" className="w-full bg-background py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-4">OUR PROJECTS</p>
          <h2 className="text-4xl tracking-tight md:text-5xl font-bold mb-6 text-foreground">Our selected works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Dive into our diverse collection of innovative projects, where creativity meets cutting-edge technology to
            solve real-world challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div
                data-cursor-hidden
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
                className="relative w-full h-64 md:h-72 overflow-hidden mb-6 bg-muted rounded-xl ring-1 ring-black/5 transition-all duration-500 group-hover:ring-blue-500/30 group-hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.08]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Tag chip */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-black tracking-wide opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.tags[0]}
                </div>
                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full bg-white text-black opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-blue-600">
                  {project.title} <span className="text-muted-foreground font-normal">| {project.subtitle}</span>
                </h3>
                <p className="text-xl text-muted-foreground">{project.tags.join(" · ")}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Floating Case Study Pill */}
      {hoveredId && (
        <div
          className="fixed pointer-events-none z-[60] px-5 py-2.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold rounded-full shadow-xl transition-opacity duration-200"
          style={{
            left: `${mouse.x}px`,
            top: `${mouse.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          View Case Study
        </div>
      )}
    </section>
  )
}