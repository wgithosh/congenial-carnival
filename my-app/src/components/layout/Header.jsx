 import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle theme mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-heading font-bold text-primary hover:text-accent transition">
          Nova<span className="text-accent">Arcade</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#features" className="hover:text-primary transition">Features</a>
          <a href="#products" className="hover:text-primary transition">Products</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-block bg-primary hover:bg-accent text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition">
            Shop Now
          </button>

          {/* Theme Toggle */}
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

          {/* Hamburger (mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Side Drawer Menu (mobile) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Slide-in menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white dark:bg-[#0a0a0a] border-l border-gray-200 dark:border-gray-800 shadow-2xl z-50 p-8 flex flex-col justify-between"
            >
              {/* Menu links */}
              <div className="flex flex-col gap-6 text-lg font-medium mt-10">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">Home</a>
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">Features</a>
                <a href="#products" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">Products</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">About</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition">Contact</a>
              </div>

              {/* CTA button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 bg-primary hover:bg-accent text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
              >
                Shop Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
