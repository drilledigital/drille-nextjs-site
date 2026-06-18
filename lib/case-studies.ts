export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  category: string
  duration: string
  date: string
  heroImage: string
  tags: string[]
  overview: string
  challenge: string
  solution: string
  results: string
  quote: string
  quoteAuthor: string
  quoteRole: string
  images: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "project-one-million",
    title: "Project One Million",
    subtitle: "Tech in service of social impact",
    category: "Strategy · Visual Identity · Website",
    duration: "8 weeks",
    date: "Jan 2025",
    heroImage: "/assets/images/laptop chair P1M mockup.png",
    tags: ["Strategy", "Visual Identity", "Website"],
    overview:
      "Project One Million is a social impact initiative aimed at connecting one million young Africans to digital skills, mentorship, and economic opportunity by 2030. The brief called for a digital identity and web presence that could carry the weight of that ambition, one that felt both urgent and trustworthy, capable of rallying donors, partners, and participants under a single, compelling vision. Drille Digital was brought in to translate that mission into a brand experience that didn't just explain the work, but made people feel the scale and possibility of it. We approached the project as equal parts strategy and design, starting with the narrative architecture before touching a single pixel.",
    challenge:
      "The primary challenge was communicating scale without losing human connection. Initiatives of this size often fall into one of two traps: they either become too abstract and institutional, or too grassroots and unpolished to attract serious partners. Project One Million needed to occupy a third lane, credible enough for large funders, resonant enough for the communities it serves. Beyond the brand positioning challenge, the web platform needed to serve multiple audience types simultaneously: young people looking to sign up, corporate partners exploring sponsorship, and media looking for the story. A single site had to do all of that without feeling fragmented or overloaded.",
    solution:
      "We developed a visual identity anchored in bold numerics and a restrained color palette that communicated ambition through simplicity rather than noise. The logotype was designed to scale, working equally well on a phone screen and a billboard. The website was structured around clear user journeys: a high-energy landing experience that established the vision immediately, followed by distinct pathways for each audience segment. Content hierarchy was engineered to let visitors self-select their path within seconds of landing. Photography direction emphasized faces over statistics, grounding the scale in the individual stories that make the mission real. The result was a platform that could launch campaigns, host events, and grow with the organization over time.",
    results:
      "The site launched to strong engagement from day one. Bounce rates came in well below industry benchmarks for nonprofit digital properties, and the average session duration suggested visitors were genuinely exploring rather than skimming. Partner inquiries increased significantly in the weeks following launch, and the identity system was adopted across printed materials, social media, and event collateral without modification, a sign that it was built with real-world flexibility from the start.",
    quote:
      "Drille Digital didn't just build us a website. They helped us articulate what Project One Million actually stands for. The brand feels like us, and the platform is something we're proud to share.",
    quoteAuthor: "Kassia Ella Agboka",
    quoteRole: "Project One Million",
    images: [],
  },
  {
    slug: "ashesi",
    title: "Ashesi Center For Leadership",
    subtitle: "Cultivating the next generation of ethical African leaders",
    category: "Strategy · Marketing · Graphic Design",
    duration: "6 weeks",
    date: "Mar 2025",
    heroImage: "/assets/images/Ashesi Center For Leadership Mockup on table.png",
    tags: ["Strategy", "Marketing", "Graphic Design"],
    overview:
      "The Ashesi Center for Leadership is the flagship leadership development arm of Ashesi University, one of Africa's most respected liberal arts institutions. The Center sought to define a sharper identity for its programmes and communications, distinct from the broader university brand while still clearly connected to it. The engagement covered strategic brand positioning, a suite of marketing collateral, and a refreshed visual language for the Center's events, reports, and digital presence. The work required deep sensitivity to institutional culture, as Ashesi's ethos of integrity and innovation had to be felt in every piece without becoming clichéd.",
    challenge:
      "The Center for Leadership sat in an unusual position: it needed to appeal to students already enrolled at Ashesi, prospective partners and funders outside the university, and a broader African professional community interested in leadership development. These audiences had fundamentally different expectations, and what resonated with an 18-year-old student was very different from what moved a corporate funder. The existing communications treated everyone the same, resulting in materials that felt neither personal nor authoritative. The visual language had also drifted over the years, a mix of styles accumulated across teams and vendors with no consistent thread.",
    solution:
      "We began with a positioning workshop with the Center's leadership team, working to articulate the specific promise of the Center's programmes in language that was honest and distinctive. From that foundation, we developed a messaging hierarchy that could flex across audiences without losing its core. The visual system we designed drew from the university's existing brand assets but introduced a stronger editorial sensibility, with clean layouts, purposeful typography, and a restrained palette that could carry both warmth and authority. All collateral was designed in reusable templates to reduce reliance on external design support for every new piece.",
    results:
      "The refreshed identity was rolled out across event materials, programme brochures, digital banners, and a flagship annual report. Feedback from the university's communications team highlighted the templates as a particular win, as staff were able to produce on-brand materials without design training. The materials were also used to support a major fundraising drive that exceeded its initial target.",
    quote:
      "The work Drille Digital did gave our Centre a visual coherence we hadn't had before. Everything now looks like it comes from the same place, and that makes a real difference in how people perceive us.",
    quoteAuthor: "Dr. Esi Ansah",
    quoteRole: "Ashesi Center for Leadership",
    images: [],
  },
  {
    slug: "three-twenty-one",
    title: "Three Twenty One",
    subtitle: "Commerce experiences built for scale",
    category: "E-Commerce · SEO Marketing · Website",
    duration: "10 weeks",
    date: "Feb 2025",
    heroImage: "/assets/images/ThreeTwentyOne Mockup.png",
    tags: ["E-commerce", "SEO Marketing", "Website"],
    overview:
      "Three Twenty One is a growing retail brand operating across physical and digital channels in Ghana. When they came to Drille Digital, they had a functioning but underperforming online store that wasn't converting at the rate their foot traffic suggested it should. The engagement was structured in two phases: a deep audit and strategic overhaul of the existing e-commerce experience, followed by a full rebuild and an SEO marketing programme designed to drive sustained organic growth. The goal was to turn the website from a secondary channel into a genuine revenue engine.",
    challenge:
      "The original store had been built quickly and hadn't kept pace with the business's growth. Product discovery was poor, and users couldn't find what they were looking for without already knowing it was there. The checkout experience had too much friction, with an abandonment rate that pointed to process problems rather than demand problems. On the SEO side, the site had essentially no organic presence and was invisible to the search queries that should have been driving its best customers. The brand also lacked a consistent visual language online, which was eroding the trust that the physical stores had carefully built.",
    solution:
      "We rebuilt the store from the ground up on a modern e-commerce stack, with information architecture designed around how customers actually browse, by lifestyle context rather than just product category. The checkout flow was stripped to its essentials, reducing the number of steps required to complete a purchase. A new visual system aligned the digital experience with the warmth and quality of the in-store experience. The SEO programme ran in parallel, where we conducted keyword research, rebuilt the site's content architecture around high-intent queries, and developed an on-page content strategy that compounded month over month.",
    results:
      "Within three months of launch, organic search traffic had grown significantly, with several category pages ranking on the first page of results for key terms. Conversion rates improved, and the average order value increased as better product discovery encouraged cross-category shopping. The checkout abandonment rate dropped sharply in the first thirty days.",
    quote:
      "We knew the website wasn't working as hard as it should, but we didn't know how to fix it. Drille Digital made it look easy, and the results have been real.",
    quoteAuthor: "Jeffrey",
    quoteRole: "Three Twenty One",
    images: [],
  },
  {
    slug: "closet",
    title: "Closet",
    subtitle: "AI-powered fashion e-commerce, reimagined",
    category: "E-Commerce · AI · Website",
    duration: "12 weeks",
    date: "Apr 2025",
    heroImage: "/assets/images/Closet Fashion Laptop Mockup.png",
    tags: ["E-Commerce", "AI", "Website"],
    overview:
      "Closet is an ambitious fashion e-commerce platform built around a central premise: that AI can do what personal stylists do, at scale. The founding team came to Drille Digital with a product concept and technical roadmap but no design language, no brand, and no user experience framework. Our role was to take the idea from concept to a fully realized digital product, building the brand, designing the end-to-end user experience, and developing the web platform that would serve as the commercial foundation for the business.",
    challenge:
      "AI-powered fashion tools had existed in some form for years, but most had failed to cross the adoption threshold because they felt either too clinical or too gimmicky. The challenge was to build something that felt genuinely useful, where the AI layer enhanced the shopping experience without making users feel surveilled or reduced to a data profile. Trust was the central design problem: users needed to feel that Closet understood their style without feeling like Closet was watching them. On the brand side, the fashion market is brutally competitive and intensely aesthetic, and a visual language that felt generic or derivative would kill the product before it launched.",
    solution:
      "The brand we developed positioned Closet at the intersection of curation and intelligence, not a robot stylist, but a service that combined editorial sensibility with personal data. The visual language was clean and tactile, drawing from high-fashion editorial codes but keeping things approachable. The UX was built around a style profile onboarding flow that gathered preference data through choices that felt like editorial content rather than a form. The AI recommendation layer was surfaced through a conversational interface embedded naturally in the shopping journey, so it enhanced rather than interrupted the experience.",
    results:
      "Closet launched to an early access waitlist and exceeded its initial sign-up target within the first two weeks. The onboarding completion rate was notably high for a flow that collected as much data as it did, which validated the editorial framing approach. Early user feedback highlighted the recommendation quality and the visual experience as standout features.",
    quote:
      "We had the technology and the vision. What we needed was someone who could make it beautiful and make it make sense. Drille Digital delivered both.",
    quoteAuthor: "Jonathan Odonkor",
    quoteRole: "Closet",
    images: [],
  },
  {
    slug: "grandport",
    title: "Grandport",
    subtitle: "Luxury real estate, crafted for digital discernment",
    category: "UI/UX · Visual Identity · Website",
    duration: "8 weeks",
    date: "May 2025",
    heroImage: "/assets/images/Grandport framer mockup.png",
    tags: ["UI/UX", "Visual Identity", "Website"],
    overview:
      "Grandport is a luxury real estate developer operating in Ghana's premium residential and commercial property market. Their portfolio includes high-specification residential developments and landmark commercial properties, with projects that attract both local buyers and diaspora investors. When they engaged Drille Digital, they were preparing to launch a new flagship development and needed a brand presence that could hold its own against international luxury comparators, not just the local market. The work covered a full visual identity system and a bespoke website designed to convert high-net-worth visitors into qualified leads.",
    challenge:
      "Luxury real estate marketing in Ghana had not kept pace with the sophistication of the buyers it was trying to reach. Most property websites in the market relied on generic templates that looked more like stock photography catalogues than editorial experiences. Grandport needed something that communicated the quality of the actual built product, with materials, finishes, and specifications that rivalled anything in London or Dubai. The challenge was to build a digital experience that matched that physical reality without resorting to the clichés of luxury marketing: the gold palettes, the overwrought serif typography, the stock images of champagne glasses.",
    solution:
      "The identity system we developed was deliberately restrained, a quality that is harder to execute than it sounds in the luxury category. A deep neutral palette anchored in raw concrete and aged brass tones, set against high-contrast type that gave the brand authority without shouting. The website was built as an editorial experience first and a property listing site second, with long-form photography and architectural writing setting the scene before any price or specification appeared. The lead generation mechanics were embedded naturally in the content flow, so enquiries came from visitors who were already bought in.",
    results:
      "The site launched ahead of the flagship development's sales campaign and generated a qualified lead pipeline that the sales team described as the strongest they had seen for a pre-launch phase. The identity system was extended across site hoardings, sales suite fit-out, and brochure design, maintaining consistency across every touchpoint in the buyer journey.",
    quote:
      "We've done property launches before, but never with a brand that felt this considered. Every piece of material felt like it belonged to the same world.",
    quoteAuthor: "",
    quoteRole: "",
    images: [],
  },
  {
    slug: "infrastructure-institute-for-development",
    title: "Infrastructure Institute for Development",
    subtitle: "Shaping Africa's infrastructure future",
    category: "UI/UX · Visual Identity · Website",
    duration: "10 weeks",
    date: "Jun 2025",
    heroImage: "/assets/images/IID web mockup.png",
    tags: ["UI/UX", "Visual Identity", "Website"],
    overview:
      "The Infrastructure Institute for Development is a policy research and advocacy organisation focused on infrastructure financing, governance, and delivery across sub-Saharan Africa. Operating at the intersection of government, multilateral institutions, and private capital, the IID needed a digital presence that communicated intellectual authority and operational credibility. The engagement covered a comprehensive visual identity overhaul and a new website designed to serve as both a research publication platform and an institutional flagship for the organisation's growing influence.",
    challenge:
      "Think tanks and policy institutes face a particular design challenge: they need to communicate rigor and depth without sacrificing accessibility. The IID's existing site was dense with content but structured in a way that made the most important work hard to find. The visual language felt dated, reading more like a government portal than a forward-thinking institution. For an organisation trying to influence decision-making at the highest levels of African governance, the first impression mattered enormously, and the existing site wasn't making it. The new site also needed to serve a genuinely international audience, including multilateral development bank staff, government ministers, and academic researchers, each with very different reading habits.",
    solution:
      "The identity we developed leaned into the tension between structure and motion, reflecting that the IID's work is about systems in flux. A refined typographic system gave the brand the authority it needed while a structured grid layout brought order to the content complexity. The website was built around a publication architecture that made research easy to discover, filter, and share, acting almost like a specialised journal interface rather than a standard institutional site. The homepage was designed to surface the IID's most current and significant work immediately, with longer exploration pathways for visitors who wanted to go deeper.",
    results:
      "The new site significantly increased time-on-page for research publications, suggesting that the structural changes were helping visitors engage more deeply with the content. Download rates for major reports increased in the first month. The site was cited in several partnership presentations to multilateral institutions as evidence of the organisation's operational maturity.",
    quote:
      "The new identity and website have changed how people perceive us. We're now seen as one of the leading policy voices in the region, and our digital presence reflects that.",
    quoteAuthor: "Charles Kwame",
    quoteRole: "Infrastructure Institute for Development",
    images: [],
  },
  {
    slug: "doxa-scholarships",
    title: "Doxa Scholarships",
    subtitle: "Opening doors to educational opportunity",
    category: "UI/UX · Website · Donation Platform",
    duration: "8 weeks",
    date: "Jul 2025",
    heroImage: "/assets/images/Doxa Scholarships Mockups Hero.png",
    tags: ["UI/UX", "Website", "Donation Platform"],
    overview:
      "Doxa Scholarships is a nonprofit organization connecting high-achieving students from underserved communities in Ghana with fully funded scholarship opportunities at leading universities worldwide. The organization runs two parallel operations: a scholarship application and selection process for students, and a donor engagement programme for individuals and corporations who fund the awards. Drille Digital was engaged to design and build a platform that could serve both sides of this equation efficiently, reducing the administrative burden on the Doxa team while improving the experience for both students and donors.",
    challenge:
      "The existing application process was managed largely through email and spreadsheets, creating enormous manual overhead and a poor experience for applicants. Students applying for scholarships, often from low-resource environments with limited digital experience, were expected to navigate complex email chains and upload documents to unfamiliar platforms. On the donor side, there was no digital giving infrastructure at all, meaning the organisation was leaving money on the table from people who wanted to give but couldn't find a way to do it simply. Both problems needed solving simultaneously on a nonprofit budget.",
    solution:
      "We designed the platform in two distinct layers: a student-facing application portal optimised for low-bandwidth environments and mobile-first interaction, and a donor-facing giving experience focused on clarity, trust signals, and frictionless payment. The application flow was designed with particular care, mapping the actual journey students went through, identifying where drop-off was most likely, and rebuilding the flow around those pain points. For donors, we built a transparent impact dashboard showing exactly where contributions went, which significantly improved donor retention in pilot testing. The whole platform was built on a stack that the small Doxa team could manage without ongoing technical support.",
    results:
      "Application completion rates improved significantly after launch, with a notable reduction in applications abandoned mid-way. The donor platform went live with ten founding donors and grew organically from there. The Doxa team reported that the administrative time spent on application processing dropped by more than half.",
    quote:
      "We were held back for years by the limitations of our digital tools. What Drille Digital built for us has completely transformed our capacity to run the programme.",
    quoteAuthor: "Wilfred Elegba",
    quoteRole: "Doxa Scholarships",
    images: [],
  },
  {
    slug: "beryls-quick-snacks",
    title: "Beryl's Quick Snacks",
    subtitle: "A food brand built for the digital shelf",
    category: "UI/UX · E-Commerce · Website",
    duration: "6 weeks",
    date: "Aug 2025",
    heroImage: "/assets/images/Berylsquicksnacks UI Mockup.png",
    tags: ["UI/UX", "E-commerce", "Website"],
    overview:
      "Beryl's Quick Snacks is an online food brand specialising in ready-to-eat snacks with a focus on local flavours and convenient delivery. Founded by a chef who spent years perfecting family recipes before going commercial, the brand had a loyal following on social media but no e-commerce infrastructure to convert that audience into customers. Drille Digital came in to design and build an online store that felt as warm and personality-driven as the brand itself, sitting somewhere between a neighbourhood market and a premium food brand.",
    challenge:
      "Food e-commerce in Ghana faces real structural challenges: delivery logistics are complex, payment trust is still being built, and photography costs are high for a bootstrapped business. Beryl's also faced a positioning tension, as the food was genuinely premium in quality but the 'quick snacks' framing risked making it feel disposable. The site needed to communicate quality and care without losing the approachability that had built the social media following. There was also very limited existing photography and no professional food imagery at all, which meant the design system needed to work hard on personality and typography to compensate.",
    solution:
      "We built the site around the founder's story rather than the product catalogue, centering the narrative on someone who cared deeply about food and wanted to share that with more people. The visual system was warm and tactile, using illustration and type-driven layouts in sections where photography wasn't available. The product pages were designed to be updated easily as new photography came in, so the site could evolve without a rebuild. The checkout and payment flow was integrated with the payment providers most familiar to Ghanaian consumers, and the delivery zone logic was built in cleanly so customers could confirm availability before getting invested in the purchase.",
    results:
      "The site launched to Beryl's existing social following and converted a strong percentage of visitors in the first week. Repeat order rates were notably high from launch, suggesting the site had captured the loyalty the brand had built on social media. Beryl's has since expanded its delivery zones twice, and the site infrastructure has handled that growth without modification.",
    quote:
      "I've been making these snacks for years, but the website made it feel like a real business for the first time. People who've never met me trust the brand, and that's because of the work Drille Digital did.",
    quoteAuthor: "Beryl Bempong",
    quoteRole: "Beryl's Quick Snacks",
    images: [],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
