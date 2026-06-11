"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(120,120,255,0.25),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,120,200,0.18),transparent_30%)]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 blur-sm" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-6 text-sm uppercase tracking-[0.5em] text-white/60"
        >
          Engineer • Builder • GATE Aspirant
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl"
        >
          Ariyan
          <br />
          Mahammad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl"
        >
          I build modern web experiences, AI-powered projects, and student-first digital products with cinematic design and clean engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}