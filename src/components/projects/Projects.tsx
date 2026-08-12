"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Prescripto",
    type: "Doctor Appointment Platform",
    description:
      "A full-stack platform for booking doctor appointments, managing schedules, and handling patient workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/prescripto.png",
    link: "https://doctor-appointment-app-frontend-5059.onrender.com/",
  },
  {
    title: "Classmate.AU",
    type: "Student Community Platform",
    description:
      "A student platform for sharing notes, accessing previous year questions, asking doubts, and connecting with classmates.",
    stack: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
    image: "/projects/classmate-au.png",
    link: "https://classmate-au.vercel.app/",
  },
  {
    title: "HireWise AI",
    type: "AI Recruitment Platform",
    description:
      "A recruitment platform that helps manage job postings, applications, candidate profiles, and AI-assisted resume matching.",
    stack: ["MERN", "JWT", "MongoDB", "AI"],
    image: "/projects/hirewise-ai.png",
    link: "https://hirewiseai2026.netlify.app/",
  },
  {
    title: "Ariyan Portfolio",
    type: "Developer Portfolio",
    description:
      "A personal portfolio focused on clean interfaces, subtle motion, responsive layouts, and modern web development.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Lenis"],
    image: "/projects/portfolio.png",
    link: "/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/60"
        >
          Selected Projects
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A few things I&apos;ve built.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            A selection of projects spanning full-stack development,
            student-focused platforms, and AI-powered applications.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target={project.link === "/" ? "_self" : "_blank"}
              rel={project.link === "/" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition duration-500 hover:border-white/20 hover:bg-white/[0.045]"
            >
              <div className="grid items-center gap-8 p-5 md:grid-cols-[1fr_0.9fr] md:p-8 lg:gap-12 lg:p-10">
                {/* Content */}
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/35">
                      0{index + 1} · {project.type}
                    </p>

                    <div className="rounded-full border border-white/10 p-2.5 text-white/50 transition duration-300 group-hover:rotate-45 group-hover:border-white/30 group-hover:text-white">
                      <ArrowUpRight size={20} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-cyan-100 md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/30 px-3.5 py-1.5 text-xs text-white/55 transition group-hover:border-white/20 group-hover:text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:h-72">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover opacity-65 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-transparent" />

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                    View Project
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