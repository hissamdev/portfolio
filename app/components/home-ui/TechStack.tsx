export default function TechStack() {
    const stackInfo = [
    {
        title: "Full Stack",
        items: [
            { name: "TypeScript", desc: "Type-safe JavaScript for scalable application logic", link: "/" },
            { name: "Next.js", desc: "Server-side rendering and static site generation", link: "/" },
            { name: "Node.js", desc: "Scalable server-side runtime for backend services", link: "/" },
            { name: "Tailwind CSS", desc: "Modern utility-first styling for responsive design", link: "/" },
            { name: "Prisma", desc: "Type-safe ORM for database modeling and queries", link: "/" },
            { name: "PostgreSQL", desc: "Relational database for structured data integrity", link: "/" },
            { name: "Docker", desc: "Containerization for consistent deployment environments", link: "/" }
        ]
    },
    {
        title: "SEO & Growth",
        items: [
            { name: "Technical SEO", desc: "Core Web Vitals, schema markup, and site speed", link: "/" },
            { name: "Semrush / Ahrefs", desc: "Keyword research and competitor gap analysis", link: "/" },
            { name: "Content Strategy", desc: "Data-backed topic clustering and authority building", link: "/" },
            { name: "Google Search Console", desc: "Index monitoring and search performance tracking", link: "/" },
            { name: "Screaming Frog", desc: "Advanced technical auditing and crawl analysis", link: "/" },
            { name: "CRO & Heatmaps", desc: "Using Hotjar and Clarity to improve user flow", link: "/" }
        ]
    },
    {
        title: "Digital Marketing & Paid Ads",
        items: [
            { name: "Google Ads (SEM)", desc: "High-intent search, display, and shopping campaigns", link: "/" },
            { name: "Meta Business Suite", desc: "Targeted social advertising on FB & Instagram", link: "/" },
            { name: "Google Analytics 4", desc: "Event-based tracking and attribution modeling", link: "/" },
            { name: "Tag Manager (GTM)", desc: "Advanced pixel deployment and event tracking", link: "/" },
            { name: "LinkedIn Ads", desc: "B2B lead generation and professional targeting", link: "/" },
            { name: "Email Automation", desc: "Retention marketing via Klaviyo or Mailchimp", link: "/" },
            { name: "Looker Studio", desc: "Custom data visualization for marketing ROI", link: "/" }
        ]
    }
];



    return (
        <section className="px-[21px] md:px-0 pt-[98px] max-w-6xl mx-auto">
            <h2 className="text-[28.5px] leading-[34px] font-bold underline">Tech Stack</h2>
            <div className="mt-[25px] border-l-2 sm:border-l-4 border-[#64748B]/26">
                <p className="pl-2 md:pl-[18px] md:w-[379px] md:text-[17.25px] md:leading-[21px] text-[#64748B] font-bold">I use modern development tools combined with SEO and performance strategy to build and grow digital products that scale.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
                {stackInfo.map(stack => (
                    <div key={stack.title} className="pt-[27px] max-w-[339px] w-full h-fit group">
                        <h3 className="text-[24.25px] leading-[29px] font-bold">{stack.title}</h3>
                        <hr className="mt-[3px] w-[88px] h-1 bg-[#5856E6] rounded-[11px] border-none transition-all group-hover:w-full group-hover:bg-amber-600" />
                        <div>
                            {stack.items.map(item => (
                                <div key={item.name} className="pt-5 space-y-[17px]">
                                    <div className="pb-[9px] border-b border-black/25 cursor-pointer">
                                        <h4 className="text-[15.75px] leading-[19px] font-bold">{item.name}</h4>
                                        <p className="pt-1 text-[12.25px] leading-[15px]">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
                }
            </div>
        </section>
    )
}