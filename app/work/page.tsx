import { HeroHeader } from "@/components/header"
import Footer4Col from "@/components/ui/footer-column"
import WorksOverview from "@/components/works-overview"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work — Drille Digital",
  description: "Selected projects and case studies from Drille Digital.",
}

export default function WorkPage() {
  return (
    <div className="bg-black min-h-screen">
      <HeroHeader />
      <WorksOverview />
      <Footer4Col />
    </div>
  )
}
