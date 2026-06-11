"use client";

import { motion } from "framer-motion";

const skills = ["Full Stack Developer", "AI Builder", "GATE 2027"];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030305] px-6 pt-36 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.2),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.12),transparent_30%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      {/* Floating orb */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[24%] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-cyan-400/30 via-purple-500/20 to-pink-500/30 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-xs uppercase tracking-[0.55em] text-white/45"
        >
          Portfolio 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80, filter: "blur(18px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1 }}
          className="max-w-6xl text-[19vw] font-black uppercase leading-[0.82] tracking-[-0.12em] md:text-[15vw] lg:text-[10rem]"
        >
          Ariyan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[1] tracking-[-0.06em] text-white md:text-6xl lg:text-7xl"
        >
          Building cinematic web experiences.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-7 max-w-2xl text-lg leading-8 text-white/55"
        >
          I am a CSE student, full-stack developer, and GATE aspirant building
          AI-powered products and student-first digital platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-white/70 backdrop-blur-xl"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition hover:scale-105 hover:bg-cyan-200"
          >
            View Projects →
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white/80 backdrop-blur-xl transition hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 h-14 w-[1px] -translate-x-1/2 bg-gradient-to-b from-white/70 to-transparent"
      />
    </section>
  );
}