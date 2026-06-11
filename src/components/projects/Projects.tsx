"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Classmate.AU",
    type: "Student Community Platform",
    description:
      "A platform for Aliah University students to learn, share notes, ask doubts, access PYQs, and connect with classmates.",
    stack: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
  },
  {
    title: "HireWise AI",
    type: "AI Recruitment System",
    description:
      "An AI-powered recruitment platform with job posting, applications, resume matching, and candidate tracking.",
    stack: ["MERN", "JWT", "MongoDB", "AI Score"],
  },
  {
    title: "AI Vision Project",
    type: "Computer Vision",
    description:
      "A future-ready AI project using vision models for real-world detection, analysis, and automation.",
    stack: ["Python", "OpenCV", "YOLO", "ML"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-sm uppercase tracking-[0.5em] text-white/40"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 max-w-5xl text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl"
        >
          Projects that tell my story.
        </motion.h2>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:bg-white/[0.08] md:p-10"
            >
              <div className="absolute right-8 top-8 rounded-full border border-white/10 p-3 opacity-60 transition group-hover:rotate-45 group-hover:opacity-100">
                <ArrowUpRight size={24} />
              </div>

              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40">
                {project.type}
              </p>

              <h3 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
                {project.title}
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}