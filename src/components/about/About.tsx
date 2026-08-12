"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "03+", label: "Major Projects" },
  { value: "Qualified", label: "GATE CS 2026" },
  { value: "CSE", label: "Core Branch" },
];

const highlights = [
  "Full-stack web development",
  "AI-powered applications",
  "Core Computer Science",
  "Modern UI and interaction design",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/60"
        >
          About Me
        </motion.p>

        <div className="grid items-start gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Building practical software with a focus on{" "}
              <span className="text-white/50">
                web development, AI, and computer science.
              </span>
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/55 md:text-lg">
              <p>
                I&apos;m Ariyan Mahammad, a final-year B.Tech Computer Science
                student at Aliah University, Kolkata. I enjoy building
                full-stack applications and exploring how AI can be used to
                solve practical problems.
              </p>

              <p>
                Currently, I&apos;m working on projects such as Classmate.AU
                and HireWise AI while strengthening my core CS fundamentals.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-7"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/35">
              What I Work On
            </p>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-black/30 px-4 py-3.5 text-sm text-white/65 transition hover:border-white/15 hover:bg-white/[0.04] hover:text-white"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <h3 className="text-3xl font-semibold tracking-tight text-white">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}