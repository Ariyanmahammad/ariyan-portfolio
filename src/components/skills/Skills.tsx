"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Full Stack",
    description: "Building modern, scalable web applications.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "NextAuth",
      "Cloudinary",
    ],
  },
  {
    title: "Data Science",
    description: "Working with data, analysis, visualization, and ML.",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Exploratory Data Analysis",
      "Machine Learning",
    ],
  },
  {
    title: "AI & Computer Vision",
    description: "Exploring computer vision and AI-powered applications.",
    skills: [
      "OpenCV",
      "YOLO",
      "Ultralytics",
      "Object Detection",
      "Object Tracking",
      "ByteTrack",
      "Image Processing",
      "Computer Vision",
      "Deep Learning Basics",
      "Model Evaluation",
      "Python",
    ],
  },
  {
    title: "Core CS",
    description: "Strengthening fundamentals through GATE preparation.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Computer Organization",
      "Digital Logic",
      "Theory of Computation",
      "Compiler Design",
      "Discrete Mathematics",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/60"
        >
          Skills & Technologies
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            My current toolkit spans full-stack development, data science,
            computer vision, and core computer science.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: groupIndex * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:border-white/20 hover:bg-white/[0.045] md:p-8"
            >
              {/* Subtle glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.1]" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                      0{groupIndex + 1}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: groupIndex * 0.08 + index * 0.025,
                      }}
                      whileHover={{
                        y: -2,
                      }}
                      className="rounded-full border border-white/10 bg-black/30 px-3.5 py-2 text-xs text-white/60 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06] hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-white/70">
                Currently learning
              </p>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Data Science · Machine Learning · Computer Vision · Advanced
                Next.js
              </p>
            </div>

            <div className="text-sm text-white/30">
              Always learning. Always building.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}