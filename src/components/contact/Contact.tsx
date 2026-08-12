"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDescription, MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const contactLinks = [
  {
    label: "Email",
    value: "ariyanmahammad5@gmail.com",
    href: "mailto:ariyanmahammad5@gmail.com",
    icon: MdEmail,
  },
  {
    label: "GitHub",
    value: "@Ariyanmahammad",
    href: "https://github.com/Ariyanmahammad",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "SK Ariyan Mahammad",
    href: "https://www.linkedin.com/in/sk-ariyan-mahammad-0907541b5/",
    icon: FaLinkedin,
  },
  {
    label: "LeetCode",
    value: "@Ariyan_mahammad",
    href: "https://leetcode.com/u/Ariyan_mahammad/",
    icon: SiLeetcode,
  },
  {
    label: "Resume",
    value: "View Resume",
    href: "/Resume_original.pdf",
    icon: MdDescription,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:py-32"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/60"
        >
          Get in Touch
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            I&apos;m open to internships, collaborations, and opportunities
            related to full-stack development, data science, AI, and computer
            vision.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={
                  item.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10 group-hover:text-cyan-200">
                  <Icon size={20} />
                </div>

                {/* Text */}
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                  {item.label}
                </p>

                <p className="mt-2 break-words text-sm font-medium text-white/70 transition group-hover:text-white">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/30 md:flex-row md:items-center md:justify-between"
        >
          <p>© 2026 Ariyan Mahammad</p>

          <p>
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}