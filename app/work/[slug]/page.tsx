import { notFound } from "next/navigation"
import { getCaseStudyBySlug, caseStudies } from "@/lib/case-studies"
import { HeroHeader } from "@/components/header"
import Footer4Col from "@/components/ui/footer-column"
import CaseStudyContent from "@/components/case-study-content"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) return {}
  return {
    title: `${cs.title} | Drille Digital`,
    description: cs.overview.slice(0, 160),
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = getCaseStudyBySlug(slug)
  if (!cs) notFound()

  return (
    <div className="bg-black text-white min-h-screen">
      <HeroHeader />
      <CaseStudyContent caseStudy={cs} />
      <Footer4Col />
    </div>
  )
}
