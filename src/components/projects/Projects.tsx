"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Prescripto",
    type: "Doctor Appointment Platform",
    description:
      "A full-stack doctor appointment booking system with patient flow, appointment management, and clean healthcare UI.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/prescripto.png",
    link: "https://doctor-appointment-app-frontend-5059.onrender.com/",
  },
  {
    title: "Classmate.AU",
    type: "Student Community Platform",
    description:
      "A platform for Aliah University students to share notes, access PYQs, ask doubts, and connect with classmates.",
    stack: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    image: "/projects/classmate-au.png",
    link: "https://classmate-au.vercel.app/",
  },
  {
    title: "HireWise AI",
    type: "AI Recruitment System",
    description:
      "An AI-powered recruitment platform with job posting, applications, resume matching, and candidate tracking.",
    stack: ["MERN", "JWT", "MongoDB", "AI Score"],
    image: "/projects/hirewise-ai.png",
    link: "https://hirewiseai2026.netlify.app/",
  },
  {
    title: "Ariyan Portfolio",
    type: "Cinematic Developer Portfolio",
    description:
      "An Unseen-inspired personal portfolio with smooth scrolling, animated sections, custom cursor, and premium interactions.",
    stack: ["Next.js", "Tailwind", "Framer Motion", "Lenis"],
    image: "/projects/portfolio.png",
    link: "/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black px-6 py-32 text-white">
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
          className="mb-20 max-w-6xl text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl lg:text-8xl"
        >
          Projects with purpose, polish, and product thinking.
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target={project.link === "/" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:border-white/30 hover:bg-white/[0.08] md:p-10"
            >
              <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="mb-6 flex items-center justify-between gap-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40 md:text-sm">
                      0{index + 1} / {project.type}
                    </p>

                    <div className="rounded-full border border-white/10 p-3 opacity-60 transition duration-500 group-hover:rotate-45 group-hover:border-white/40 group-hover:opacity-100">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  <h3 className="text-4xl font-black uppercase tracking-tighter transition duration-500 group-hover:translate-x-2 md:text-6xl lg:text-7xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/60 transition group-hover:border-white/30 group-hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative h-64 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 md:h-80">
                  <img
  src={project.image}
  alt={project.title}
  className="h-full w-full object-cover opacity-70 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
/>

                  <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/0" />

                  <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
                    Open Project
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}