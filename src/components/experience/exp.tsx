"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "UptoSkills",
    role: "Artificial Intelligence & Machine Learning Intern",
    type: "Internship",
    date: "Jul 2026 – Present",
    location: "Remote",
    logo: "US",
    logoStyle: "from-cyan-400/20 to-blue-500/20",
    skills: ["Python", "FastAPI", "Artificial Intelligence", "Machine Learning"],
    description:
      "Working on AI and machine learning projects while gaining practical experience with Python-based development and backend technologies.",
    document: null,
  },
  {
    company: "1M1B (1 Million for 1 Billion)",
    role: "AI for Sustainability",
    type: "Internship",
    date: "Jul 2026 – Aug 2026",
    location: "Remote",
    logo: "1M1B",
    logoStyle: "from-orange-400/20 to-yellow-400/20",
    skills: ["Python", "Artificial Intelligence", "Sustainability"],
    description:
      "Participated in an AI-focused sustainability internship, working with Python and exploring practical applications of artificial intelligence.",
    document: null,
  },
  {
    company: "IBM × CSRBOX",
    role: "IBM SkillsBuild Program with CSRBOX on Agentic AI",
    type: "Apprenticeship",
    date: "Jul 2025 – Aug 2025",
    location: "Remote",
    logo: "IBM",
    logoStyle: "from-blue-400/20 to-indigo-500/20",
    skills: ["Python", "AI", "Agentic AI"],
    description:
      "Completed an AI-focused apprenticeship through the IBM SkillsBuild program, with exposure to AI concepts and agentic AI technologies.",
    document: null,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/60">
            Experience
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Where I&apos;ve been learning and building.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            A few internships and programs where I&apos;ve gained practical
            experience in AI, machine learning, and software development.
          </p>
        </motion.div>

        {/* Experience list */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-8px)] w-px bg-white/10 md:block" />

          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-8 hidden h-3 w-3 rounded-full border-2 border-cyan-300/50 bg-black md:block" />

                <div className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:border-white/20 hover:bg-white/[0.045] md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    {/* Company logo */}
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${experience.logoStyle} text-xs font-semibold tracking-tight text-white/80`}
                    >
                      {experience.logo}
                    </div>

                    {/* Main content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                            {experience.role}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-white/60">
                            {experience.company}
                            <span className="mx-2 text-white/20">·</span>
                            {experience.type}
                          </p>
                        </div>

                        <div className="shrink-0 text-left md:text-right">
                          <p className="text-sm text-white/45">
                            {experience.date}
                          </p>

                          <p className="mt-1 text-xs text-white/30">
                            {experience.location}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 md:text-base">
                        {experience.description}
                      </p>

                      {/* Skills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/50 transition group-hover:border-white/15 group-hover:text-white/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Document link */}
                      {experience.document && (
                        <a
                          href={experience.document}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition hover:text-white"
                        >
                          View document
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex items-center gap-3 text-sm text-white/30"
        >
          <BriefcaseBusiness size={16} />
          <span>Continuously learning through projects and experience.</span>
        </motion.div>
      </div>
    </section>
  );
}