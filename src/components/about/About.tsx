"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-sm uppercase tracking-[0.5em] text-white/40"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl text-4xl font-black uppercase leading-tight tracking-tighter md:text-6xl lg:text-7xl"
        >
          I am a CSE student building modern web products, while preparing deeply for GATE.
        </motion.h2>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg leading-8 text-white/60"
          >
            I am pursuing B.Tech CSE from Aliah University. I enjoy building
            useful digital products like Classmate.AU and HireWise AI, where
            design, engineering, and real student problems come together.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-lg leading-8 text-white/60"
          >
            My focus is to become stronger in core CS, full-stack development,
            and AI-powered applications. I want my work to look premium, feel
            smooth, and solve real problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
}