"use client";

import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Resume", href: "/Resume_original.pdf", external: true },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Ariyan_mahammad/",
    external: true,
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-5 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
        
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10">
            <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-70" />
            <span className="relative text-sm font-black text-white">
              A
            </span>
          </span>

          <div className="leading-none">
            <h1 className="text-sm font-bold uppercase tracking-[0.25em] text-white">
              Ariyan
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Portfolio
            </p>
          </div>
        </a>

        {/* Center Navigation */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noreferrer" : ""}
              className="rounded-full px-5 py-2 text-sm font-medium text-white/60 transition duration-300 hover:bg-white hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {/* <a
            href="/Resume_original.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
          >
            Resume
          </a> */}

          {/* <a
            href="mailto:ariyanmahammad5@gmail.com"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-white/90"
          >
            Hire Me
          </a> */}
        </div>

        {/* Mobile Button */}
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 md:hidden"
        >
          Menu
        </a>
      </nav>
    </motion.header>
  );
}