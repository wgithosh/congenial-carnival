import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import React from "react";

function HeaderComponent() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const shouldReduceMotion = useReducedMotion();
  const drawerRef = useRef(null);
  const firstLinkRef = useRef(null);

  /** Prevent background scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  /** Trap focus inside drawer */
  useEffect(() => {
    if (!isMenuOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const focusableSelectors =
      "a, button, input, [tabindex]:not([tabindex='-1'])";

    const focusableElements = drawer.querySelectorAll(focusableSelectors);
    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];
    firstEl?.focus();

    function handleKey(e) {
      if (e.key === "Escape") setIsMenuOpen(false);

      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKey, { passive: true });
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "Features", href: "#features" },
      { name: "Products", href: "#products" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  /** Theme toggler */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    []
  );

  const toggleMenu = useCallback(
    () => setIsMenuOpen((prev) => !prev),
    []
  );

  const handleKeyPress = (e, callback) => {
    if (e.key === "Enter" || e.key === " ") callback();
  };

  /** Track current visible section */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting && setActiveSection(entry.target.id)
        );
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  /** Memoized animation variants (prevents re-renders) */
  const menuVariants = useMemo(
    () => ({
      hidden: { x: shouldReduceMotion ? 0 : "100%", opacity: 0 },
      visible: { x: 0, opacity: 1 },
      exit: { x: shouldReduceMotion ? 0 : "100%", opacity: 0 },
    }),
    [shouldReduceMotion]
  );

  const overlayVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 0.5 },
      exit: { opacity: 0 },
    }),
    []
  );

  return (
    <motion.header
      initial={{ y: shouldReduceMotion ? 0 : -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-heading font-bold text-primary hover:text-accent"
        >
          Nova<span className="text-accent">Arcade</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          role="navigation"
          className="hidden md:flex gap-8 text-sm font-medium"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                activeSection === item.href.substring(1) ? "page" : undefined
              }
              className={`transition relative ${
                activeSection === item.href.substring(1)
                  ? "text-accent after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-accent"
                  : "hover:text-primary"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button className="hidden md:inline-block bg-primary hover:bg-accent text-white px-5 py-2 rounded-full font-medium shadow-md">
            Shop Now
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            onKeyDown={(e) => handleKeyPress(e, toggleTheme)}
            aria-label="Toggle theme"
            role="switch"
            aria-checked={theme === "dark"}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={toggleMenu}
            onKeyDown={(e) => handleKeyPress(e, toggleMenu)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-hidden="true"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobileMenuTitle"
              id="mobile-menu"
              ref={drawerRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white dark:bg-[#0a0a0a] shadow-2xl border-l border-gray-200 dark:border-gray-800 z-50 p-8 flex flex-col justify-between"
            >
              <h2 id="mobileMenuTitle" className="sr-only">
                Mobile Navigation Menu
              </h2>

              <nav className="flex flex-col gap-6 text-lg font-medium mt-10">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    ref={index === 0 ? firstLinkRef : null}
                    href={item.href}
                    aria-current={
                      activeSection === item.href.substring(1) ? "page" : undefined
                    }
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition ${
                      activeSection === item.href.substring(1)
                        ? "text-accent font-semibold"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 bg-primary hover:bg-accent text-white px-6 py-3 rounded-full font-semibold shadow-md"
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

export default React.memo(HeaderComponent);
