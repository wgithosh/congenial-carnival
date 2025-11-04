 import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Toggle dark/light mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-heading font-bold text-primary hover:text-accent transition"
        >
          Nova<span className="text-accent">Arcade</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-primary transition">
            Home
          </a>
          <a href="#features" className="hover:text-primary transition">
            Features
          </a>
          <a href="#products" className="hover:text-primary transition">
            Products
          </a>
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </nav>

        {/* CTA + Theme toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-block bg-primary hover:bg-accent text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition">
            Shop Now
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
