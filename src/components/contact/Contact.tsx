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
    value: "Open Resume",
    href: "/Resume_original.pdf",
    icon: MdDescription,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-black px-6 py-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(120,120,255,0.25),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(255,80,180,0.18),transparent_30%)]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-sm uppercase tracking-[0.6em] text-white/40"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl lg:text-9xl"
        >
          Let&apos;s create
          <br />
          something
          <br />
          unforgettable.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-white/60"
        >
          Open to internships, collaborations, and meaningful projects in
          full-stack development, AI-powered applications, and creative web
          experiences.
        </motion.p>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noreferrer"}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 translate-y-full bg-white transition duration-500 group-hover:translate-y-0" />

                <div className="relative z-10">
                  <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition group-hover:bg-black group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <p className="text-sm uppercase tracking-[0.35em] text-white/40 transition group-hover:text-black/50">
                    {item.label}
                  </p>

                  <p className="mt-3 break-words text-xl font-semibold text-white transition group-hover:text-black">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 border-t border-white/10 pt-8 text-sm text-white/40"
        >
          © 2026 Ariyan Mahammad — Designed and built with Next.js.
        </motion.div>
      </div>
    </section>
  );
}