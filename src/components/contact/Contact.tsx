"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center bg-black px-6 py-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-sm uppercase tracking-[0.5em] text-white/40"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl lg:text-9xl"
        >
          Let&apos;s build something amazing.
        </motion.h2>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:ariyanmahammad5@gmail.com"
            className="flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            <MdEmail size={18} />
            Email
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-white/70 transition hover:bg-white hover:text-black"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-white/70 transition hover:bg-white hover:text-black"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}