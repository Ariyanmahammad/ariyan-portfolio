export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-sm font-semibold uppercase tracking-[0.4em] text-white">
          Ariyan
        </h1>

        <div className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  );
}