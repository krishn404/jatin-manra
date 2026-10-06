import { contact } from "@/lib/contact"

export type CaseStudyMetric = {
  value: string
  label: string
}

export type CaseStudy = {
  category: string
  title: string
  summary: string
  metrics: CaseStudyMetric[]
  tags: string[]
  challenge: string
  owned: string[]
  outcome: string
  proves: string
  meta: string
  cta: string
  href: string
}

export const caseStudies: CaseStudy[] = [
  {
    category: "01 — PERFORMANCE MARKETING",
    title: "Reducing CPL through creative testing and daily optimization",
    summary: "Meta lead-generation campaigns across fitness, automotive, real estate, and aviation, with creative testing and daily optimization.",
    metrics: [
      { value: "₹97 → ₹28", label: "CPL · 71% reduction" },
      { value: "372", label: "Automotive platform leads" },
      { value: "10+", label: "Live campaigns" },
      { value: "1,100+", label: "Platform leads generated" },
    ],
    tags: ["Lead generation", "Creative testing", "CPL tracking", "Daily optimization"],
    challenge: "Maintain lead flow while monitoring creative fatigue, budget changes, and lead quality each day.",
    owned: [
      "Meta campaign monitoring",
      "Creative and hook testing",
      "Budget and ad-set checks",
      "Lead-sheet reconciliation",
      "Creative rotation and CPL tracking",
      "Reporting and next-test decisions",
    ],
    outcome: "Campaigns generated 1,100+ platform leads at approximately ₹40 blended CPL. A fitness campaign moved from ₹97 CPL to ₹28 through creative testing; an automotive account generated 372 platform leads across three concurrent ad sets.",
    proves: "I connect creative decisions with campaign data and sales feedback; Meta Ads is not set-and-forget.",
    meta: "Lead generation · Multiple industries · 10+ live campaigns",
    cta: "Review campaign results",
    href: "#experience",
  },
  {
    category: "02 — CONTENT STRATEGY & CREATIVE PRODUCTION",
    title: "From idea to 2.8M organic views",
    summary: "Creator-led short-form content from research and hooks through scripting, performance, direction, and production.",
    metrics: [
      { value: "2.8M+", label: "Top organic reel" },
      { value: "100+", label: "Scripts written" },
      { value: "50+", label: "Videos performed in" },
      { value: "4+", label: "Other high-performing pieces" },
    ],
    tags: ["Talking-head", "UGC", "On-camera performance", "Creative direction", "Organic testing"],
    challenge: "Create content that could earn attention organically without relying only on paid distribution.",
    owned: [
      "Research and concept development",
      "Hook writing and scripts",
      "On-camera performance and direction",
      "Production coordination",
      "Creative iteration",
    ],
    outcome: "One self-written and self-performed reel reached 2.8M+ organic views. Multiple additional pieces reached between 30K and 2.5L views.",
    proves: "I understand both the strategic idea behind a post and the execution required to make it watchable.",
    meta: "Organic short-form · Concept, script, performance · Multiple formats",
    cta: "View the content examples",
    href: contact.instagram,
  },
  {
    category: "03 — CONTENT LEADERSHIP",
    title: "Building a content operation, not just making content",
    summary: "Led UIHTM’s digital content operation across a full academic year, coordinating a 5–6 person team and institutional event publishing.",
    metrics: [
      { value: "12 months", label: "Continuous ownership" },
      { value: "5–6", label: "Person team led" },
      { value: "Every event", label: "Promoted online" },
    ],
    tags: ["Content planning", "Shoot direction", "Team leadership", "Publishing", "Event promotion"],
    challenge: "Maintain consistency, coordinate people and deadlines, and communicate institutional events throughout the academic year.",
    owned: [
      "Annual content planning",
      "Shoot direction and editing workflow",
      "Design coordination and publishing",
      "Deadline management and quality control",
      "Team coordination and event promotion",
    ],
    outcome: "A 5–6 person team supported every institutional event across the year. I led the production and publishing cycle and designed the brochure for the 11th International Hosticon, an international-scale event with a formal, premium communication standard.",
    proves: "I can lead the people, production, deadlines, quality, and consistency behind content.",
    meta: "UIHTM · 2024–2025 · Plan → Shoot → Edit → Design → Publish",
    cta: "View the content leadership project",
    href: "#contact",
  },
]
