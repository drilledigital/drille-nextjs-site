"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  subtitle: string
  image: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Project One Million",
    subtitle: "Tech in service of social impact",
    image: "/assets/images/laptop chair P1M mockup.png",
    tags: ["Strategy", "Visual Identity", "Website"],
    link: "https://example.com", // Add your actual URL here
  },
  {
    id: "2",
    title: "Ashesi",
    subtitle: "Center For Leadership",
    image: "/assets/images/Ashesi Center For Leadership Mockup on table.png",
    tags: ["Strategy", "Marketing", "Graphic Design"],
    link: "", // Leave empty if no link yet
  },
  {
    id: "3",
    title: "Three Twenty One",
    subtitle: "Commerce experiences built for scale",
    image: "/assets/images/ThreeTwentyOne Mockup.png",
    tags: ["E-commerce", "SEO Marketing", "Website"],
    link: "",
  },
  {
    id: "4",
    title: "Closet",
    subtitle: "Ai Powered Fashion E-commerce",
    image: "/assets/images/Closet Fashion Laptop Mockup.png",
    tags: ["E-Commerce", "AI", "Website"],
    link: "",
  },
  {
    id: "5",
    title: "Grandport",
    subtitle: "Luxury Real Estate",
    image: "/assets/images/Grandport framer mockup.png",
    tags: ["UI/UX", "Visual Identity", "Website"],
    link: "",
  },
  {
    id: "6",
    title: "Strava",
    subtitle: "Re-imagining Luxury Interior Spaces",
    image: "/assets/images/Strakta Hero Device Mockup.png",
    tags: ["UI/UX", "Visual Identity", "Website"],
    link: "",
  },
]

export default function OurProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section className="w-full bg-background py-24 px-4 md:px-8">
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
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onMouseMove={handleMouseMove}
              onClick={() => handleProjectClick(project.link)}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden mb-6 bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {project.title} <span className="text-muted-foreground font-normal">| {project.subtitle}</span>
                </h3>
                <p className="text-xl text-muted-foreground">{project.tags.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Badge */}
        {hoveredProject && (
          <div
            className="fixed pointer-events-none z-50 px-6 py-3 bg-blue-600 text-white text-lg font-bold tracking-wider rounded-full shadow-xl"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            CASE STUDY COMING SOON
          </div>
        )}
      </div>
    </section>
  )
}