"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import RequestCallModal from "@/components/form/RequestCallModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-expertise", label: "Our Expertise" },
  { href: "/our-people", label: "Our People" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-1000 border-b border-[rgba(201,168,76,0.15)] transition-colors duration-300 ${
        scrolled ? "bg-[#262b40]" : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="w-full lg:max-w-7xl mx-auto flex items-center justify-between h-18 px-6 md:px-0 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-[1.4rem] font-bold text-white tracking-[-0.01em]">
            {/* <span className="text-secondary">⚖</span> Lawyers */}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav hidden md:flex items-end gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-sm font-semibold px-3.5 py-2 tracking-[0.02em] relative transition-colors duration-200 ${
                pathname === href ? "text-secondary" : "text-white hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
                <RequestCallModal className="w-full lg:w-60 py-2" />
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn flex md:hidden flex-col bg-transparent border-0 cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white my-1.25 transition-all ${menuOpen ? "transform-[rotate(45deg)_translate(5px,5px)]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white my-1.25 transition-all ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-white my-1.25 transition-all ${menuOpen ? "transform-[rotate(-45deg)_translate(5px,-5px)]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-primary border-t border-[rgba(201,168,76,0.2)] pt-4 pb-8">
          <div className="container">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block font-body font-semibold py-3 border-b border-white/6 text-[0.95rem] ${
                  pathname === href ? "text-secondary" : "text-white/80"
                }`}
              >
                {label}
              </Link>
            ))}
            <RequestCallModal className="mt-6 rounded-full" />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
