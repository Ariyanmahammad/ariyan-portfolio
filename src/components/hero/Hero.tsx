"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "Web Development",
  "Data Science",
  "AI & Machine Learning",
  "GATE CS 2026 Qualified",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030305] px-6 pt-28 text-white md:pt-32">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(168,85,247,0.16),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.08),transparent_30%)]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      {/* Ambient orb */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[30%] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

          {/* LEFT — PROFILE PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">

              {/* Outer glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-400/20 via-purple-500/15 to-pink-500/20 blur-2xl" />

              {/* Decorative ring */}
              <div className="relative rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-[2px]">
                <div className="rounded-full bg-[#030305] p-2">

                  {/* Profile image */}
                  <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-72 sm:w-72 md:h-80 md:w-80">
                    <Image
                      src="/profile.png"
                      alt="Ariyan Mahammad"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                </div>
              </div>

              {/* Small status badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-3 right-4 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 backdrop-blur-xl"
              >
                <span className="flex items-center gap-2 text-xs font-medium text-white/70">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Open to opportunities
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <div className="max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-cyan-300/70"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9 }}
              className="text-5xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl"
            >
              Ariyan Mahammad
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-5 text-2xl font-medium leading-tight text-white/80 sm:text-3xl"
            >
              Web Developer &{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Data Scientist
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg"
            >
              I build modern, scalable web applications and explore
              data-driven solutions with AI and machine learning. I enjoy
              turning ideas into practical products through clean code,
              thoughtful design, and intelligent technology.
            </motion.p>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/65 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.07] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-200"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black"
              >
                Get in Touch
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 h-12 w-[1px] -translate-x-1/2 bg-gradient-to-b from-white/50 to-transparent"
      />
    </section>
  );
}