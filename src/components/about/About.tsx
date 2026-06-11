"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "03+", label: "Major Projects" },
  { value: "Qualified", label: "GATE CS 2026" },
  { value: "CSE", label: "Core Branch" },
];

const highlights = [
  "Full-stack web development",
  "AI-powered student products",
  "Core CS + GATE preparation",
  "Premium UI and motion design",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-32 text-white"
    >
      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-sm uppercase tracking-[0.5em] text-white/40"
        >
          About Me
        </motion.p>

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="max-w-5xl text-4xl font-black uppercase leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              I build digital products with clean code, cinematic design, and
              real purpose.
            </h2>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              I am Ariyan Mahammad, a B.Tech CSE Final year student from Aliah University , Kolkata.
              I love creating modern web experiences where engineering,
              animation, design, and real student problems come together.
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">
              My current focus is building strong full-stack projects like
              Classmate.AU and HireWise AI, while preparing deeply for GATE and
              strengthening my core CS fundamentals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-white/10" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-white/10" />

            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/40">
              Current Focus
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white/70"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-5xl font-black tracking-tighter">
                {stat.value}
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}