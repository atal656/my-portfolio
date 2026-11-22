
"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Investor Ledger",
    category: "Business Application",
    status: "Prototype",
    symbol: "FX",
    description:
      "A multi-currency business ledger concept for tracking investments, transactions, profit allocations, and financial relationships across multiple investors.",
    tags: ["Financial Systems", "Product Design", "Business Logic"],
  },
  {
    number: "02",
    title: "Interactive Portfolio",
    category: "Web Development",
    status: "In Development",
    symbol: "3D",
    description:
      "An immersive personal website combining responsive design, animated typography, interactive 3D graphics, and smooth scrolling experiences.",
    tags: ["Next.js", "TypeScript", "Three.js", "GSAP"],
  },
  {
    number: "03",
    title: "Business Analytics",
    category: "Data & Insights",
    status: "Learning",
    symbol: "DATA",
    description:
      "Developing analytical thinking through data exploration, visualization, business metrics, and practical decision-making exercises.",
    tags: ["Analytics", "Data Visualization", "Strategy"],
  },
  {
    number: "04",
    title: "AI & Automation",
    category: "Emerging Technology",
    status: "Exploration",
    symbol: "AI",
    description:
      "Exploring how artificial intelligence and automation can improve workflows, simplify repetitive tasks, and support business operations.",
    tags: ["Artificial Intelligence", "Automation", "Innovation"],
  },
];


const experiences = [
  {
    role: "Business Development Representative — Co-op",
    organization: "AVASOFT",
    period: "2026",
    description:
      "Conducted B2B prospect research and outreach to senior decision-makers, supporting enterprise technology initiatives involving AI, workflow automation, IT service management, and digital transformation. Used ServiceNow CRM, Outreach.io, ZoomInfo, LinkedIn, and Excel.",
  },
  {
    role: "Marketing Intern",
    organization: "Icicle Technologies",
    period: "Apr – Jul 2026",
    description:
      "Supported digital marketing, customer case studies, competitive research, and content development for a food manufacturing software company. Worked with WordPress and GoHighLevel CRM to support digital content and marketing workflows.",
  },
  {
    role: "Vice President",
    organization: "TMU AI",
    period: "Student Leadership",
    description:
      "Support executive planning, team coordination, student engagement, and technology-focused initiatives that connect students with artificial intelligence and emerging technologies.",
  },
  {
    role: "Vice President",
    organization: "Afghan Unite TMU",
    period: "Student Leadership",
    description:
      "Support event planning, communications, executive coordination, and community engagement initiatives.",
  },
];


export default function Home() {
  const heroRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current,
          { opacity: 0, y: 65 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "power3.out",
          }
        );
      }

      if (paragraphRef.current) {
        gsap.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            delay: 0.35,
            duration: 1.1,
            ease: "power3.out",
          }
        );
      }

      [aboutRef, workRef, experienceRef, contactRef].forEach(
        (section) => {
          if (!section.current) return;

          gsap.fromTo(
            section.current,
            { opacity: 0, y: 55 },
            {
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      );
    });

    return () => context.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080B12] text-white">
      {/* Navigation */}
      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-12">
        <a href="#" className="text-2xl font-bold tracking-tight">
          AK<span className="text-[#4F7CFF]">.</span>
        </a>

        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 sm:gap-7 sm:text-sm">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center overflow-hidden px-6 py-16 md:px-12">
        <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#4F7CFF]/20 blur-[110px]" />

        <div className="relative z-0 h-[320px] w-full md:absolute md:right-0 md:top-1/2 md:h-[520px] md:w-1/2 md:-translate-y-1/2">
          <Hero3D />
        </div>

        <div className="pointer-events-none relative z-10 md:max-w-[60%]">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#4F7CFF] sm:text-sm">
            Technology · Business · Innovation
          </p>

          <h1
            ref={heroRef}
            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Building ideas
            <br />
            into <span className="text-[#4F7CFF]">impact.</span>
          </h1>

          <p
            ref={paragraphRef}
            className="mt-8 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            I&apos;m Atal Khan. I explore the intersection of
            business, technology, and entrepreneurship to turn
            ambitious ideas into practical solutions.
          </p>

          <a
            href="#work"
            className="pointer-events-auto mt-10 inline-flex rounded-full border border-[#4F7CFF] px-8 py-4 text-sm font-medium transition hover:bg-[#4F7CFF]"
          >
            Explore My Work ↗
          </a>
        </div>

        <div className="relative z-10 mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-500">
          <span className="h-px w-12 bg-gray-600" />
          Scroll to explore
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-[#F5F5F2] px-6 py-28 text-[#111111] md:px-12"
      >
       <div
  ref={aboutRef}
  className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]"
>
  <div>
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#4F7CFF]">
            01 / About Me
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight md:text-7xl">
            Curious by nature.
            <br />
            <span className="text-gray-400">
              Driven by possibility.
            </span>
          </h2>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-gray-600">
            I&apos;m a Business Technology Management student at
            Toronto Metropolitan University, interested in
            artificial intelligence, analytics, and
            entrepreneurship. I enjoy understanding how
            organizations work and finding ways technology can
            solve meaningful business challenges.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Business Technology",
              "Artificial Intelligence",
              "Entrepreneurship",
              "Analytics",
              "Product Thinking",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>

</div>

<div className="relative mx-auto w-full max-w-md">
  <div className="absolute -inset-3 rounded-3xl bg-[#4F7CFF]/15 blur-2xl" />

  <div className="relative overflow-hidden rounded-3xl border border-[#4F7CFF]/20 shadow-2xl">
    <img
      src="/profile.png"
      alt="Mohammad Atal Khan"
      className="h-auto w-full object-cover"
    />
  </div>
</div>

        </div>
      </section>

      {/* Projects */}
      <section
        id="work"
        className="bg-[#080B12] px-6 py-28 md:px-12"
      >
        <div ref={workRef} className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#4F7CFF]">
            02 / Selected Work
          </p>

          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Work that{" "}
            <span className="text-[#4F7CFF]">matters.</span>
          </h2>

          <p className="mt-8 max-w-2xl leading-relaxed text-gray-400">
            A selection of applications, learning projects, and
            ideas at the intersection of business and technology.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-white/10 bg-[#111827] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#4F7CFF]/60 hover:shadow-[0_20px_60px_rgba(79,124,255,0.15)] sm:p-8"
              >
                <div className="relative mb-8 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#1E293B] via-[#121C33] to-[#0B1020]">
                  <div className="absolute h-36 w-36 rounded-full bg-[#4F7CFF]/20 blur-3xl" />
                  <span className="relative text-5xl font-bold tracking-tight text-[#4F7CFF] transition-transform duration-500 group-hover:scale-110 sm:text-6xl">
                    {project.symbol}
                  </span>
                  <span className="absolute bottom-4 right-4 text-xs text-gray-500">
                    {project.number} / 04
                  </span>
                </div>

                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#4F7CFF]">
                    {project.category}
                  </p>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#4F7CFF]/25 bg-[#4F7CFF]/10 px-3 py-1 text-xs text-[#AFC6FF]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="bg-[#F5F5F2] px-6 py-28 text-[#111111] md:px-12"
      >
        <div ref={experienceRef} className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#4F7CFF]">
            03 / Experience & Leadership
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-7xl">
            Learning by <span className="text-gray-400">doing.</span>
          </h2>

          <p className="mt-8 max-w-2xl leading-relaxed text-gray-600">
            From technology-focused work to student leadership,
            each experience shapes how I approach challenges,
            collaborate with others, and build new ideas.
          </p>

          <div className="mt-14 border-t border-gray-300">
            {experiences.map((item) => (
              <div
                key={item.organization}
                className="grid gap-4 border-b border-gray-300 py-8 md:grid-cols-[1fr_2fr] md:gap-10"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#4F7CFF]">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {item.organization}
                  </h3>
                </div>

                <div>
                  <h4 className="text-xl font-medium">{item.role}</h4>
                  <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Education & Skills */}
<section
  id="education"
  className="bg-[#F5F5F2] px-6 py-28 text-[#111111] md:px-12"
>
  <div className="mx-auto max-w-7xl">
    <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#4F7CFF]">
      04 / Education & Expertise
    </p>

    <h2 className="text-4xl font-semibold tracking-tight md:text-7xl">
      Knowledge meets{" "}
      <span className="text-[#4F7CFF]">ambition.</span>
    </h2>

    <div className="mt-14 grid gap-12 lg:grid-cols-2">
      <div>
        <h3 className="mb-6 text-2xl font-semibold">Education</h3>
        <div className="border-t border-gray-300 py-6">
          <h4 className="text-xl font-semibold">
            Toronto Metropolitan University
          </h4>
          <p className="mt-2 text-gray-600">
            Bachelor of Commerce — Business Technology Management
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Expected Graduation: 2029
          </p>
        </div>

        <h3 className="mb-5 mt-10 text-2xl font-semibold">
          Professional Development
        </h3>
        <p className="leading-7 text-gray-600">
          Google professional learning programs, Ted Rogers
          Bootcamps, and ongoing training in business analytics,
          digital technology, and emerging AI applications.
        </p>
      </div>

      <div>
        <h3 className="mb-6 text-2xl font-semibold">
          Technical & Business Skills
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Microsoft Excel",
            "SQL",
            "Python",
            "Power BI",
            "Tableau",
            "ServiceNow CRM",
            "Outreach.io",
            "WordPress",
            "GoHighLevel",
            "Business Analysis",
            "Market Research",
            "Digital Marketing",
            "AI & Automation",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition hover:border-[#4F7CFF] hover:text-[#4F7CFF]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#080B12] px-6 py-28 md:px-12"
      >
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#4F7CFF]/15 blur-[100px]" />

        <div ref={contactRef} className="relative mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#4F7CFF]">
            05 / Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-8xl">
            Let&apos;s build
            <br />
            <span className="text-[#4F7CFF]">something great.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Interested in technology, business, or a new idea?
            I&apos;m always open to meaningful conversations and
            opportunities to collaborate.
          </p>

          
<div className="mt-10 flex flex-wrap gap-4">
  <a
    href="mailto:atal.khan@torontomu.ca"
    className="inline-flex items-center rounded-full bg-[#4F7CFF] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#3B66E5]"
  >
    Send an Email ↗
  </a>

  <a
    href="https://www.linkedin.com/in/mohammad-khan-210a31365"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition hover:border-[#4F7CFF] hover:bg-[#4F7CFF]/10"
  >
    Connect on LinkedIn ↗
  </a>
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row sm:items-center">
          <p>
            AK<span className="text-[#4F7CFF]">.</span> — Atal Khan
          </p>
          <p>Built with Next.js, Three.js & GSAP</p>
          <a href="#" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
