import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0A0F]/95 shadow-lg shadow-cyan-500/20" : "bg-[#0A0A0F]/70"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-cyan-400 drop-shadow-[0_0_10px_#00fff5]">
          NovaByte<span className="text-pink-500 drop-shadow-[0_0_8px_#ff00c8]">.</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0F]/95 border-t border-white/10 px-6 py-4">
          <Navigation mobile />
        </div>
      )}
    </header>
  );
}
