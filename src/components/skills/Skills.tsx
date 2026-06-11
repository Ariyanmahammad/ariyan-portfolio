"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
  },
  {
    title: "AI / Vision",
    skills: ["Python", "OpenCV", "Computer Vision", "YOLO", "ML Basics"],
  },
  {
    title: "Core CS",
    skills: ["DSA", "OS", "DBMS", "Computer Networks", "GATE CS"],
  },
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-sm uppercase tracking-[0.5em] text-white/40"
        >
          Skill Universe
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 max-w-6xl text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl lg:text-9xl"
        >
          Tools that power my builds.
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: groupIndex * 0.15,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:bg-white/20" />

              <div className="mb-10 flex items-center justify-between">
                <h3 className="text-3xl font-black uppercase tracking-tighter md:text-5xl">
                  {group.title}
                </h3>

                <span className="text-5xl font-black text-white/10">
                  0{groupIndex + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: groupIndex * 0.15 + index * 0.05,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    className="rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-white/70 transition hover:border-white/40 hover:bg-white hover:text-black"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10"
        >
          <p className="max-w-4xl text-2xl font-semibold leading-relaxed text-white/75 md:text-4xl">
            I don&apos;t just collect technologies — I use them to create clean,
            useful and cinematic web experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}