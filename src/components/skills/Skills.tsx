"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Node.js",
  "Express.js",
  "JWT Auth",
  "Framer Motion",
  "GSAP",
  "Python",
  "OpenCV",
  "Computer Networks",
  "OS",
  "DBMS",
  "DSA",
];

export default function Skills() {
  return (
    <section className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-sm uppercase tracking-[0.5em] text-white/40">
          Skills
        </p>

        <h2 className="mb-14 max-w-5xl text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl">
          Tools I use to build.
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-white/70"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}