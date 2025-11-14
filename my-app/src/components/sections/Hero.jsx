 import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  /** Memoized animation to avoid re-creation every render */
  const heroImageAnimation = useMemo(
    () =>
      prefersReducedMotion
        ? false
        : {
            opacity: 0,
            scale: 1.03,
          },
    [prefersReducedMotion]
  );

  const heroImageAnimate = useMemo(
    () =>
      prefersReducedMotion
        ? false
        : {
            opacity: 1,
            scale: 1,
          },
    [prefersReducedMotion]
  );

  return (
    <section
      id="home"
      role="region"
      aria-labelledby="hero-title"
      className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6"
    >
      {/* --- LQIP Blur Placeholder (non-LCP) --- */}
      <img
        src="https://images.unsplash.com/photo-1651012998667-2c779fee76f8?auto=format&fit=crop&w=400&q=20&fm=webp"
        aria-hidden="true"
        role="presentation"
        decoding="async"
        loading="lazy"
        width="1600"
        height="900"
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 will-change-transform"
      />

      {/* --- MAIN HERO IMAGE (LCP) --- */}
      <motion.img
        src="https://images.unsplash.com/photo-1651012998667-2c779fee76f8?auto=format&fit=crop&w=1600&q=60&fm=webp"
        srcSet="
          https://images.unsplash.com/photo-1651012998667-2c779fee76f8?auto=format&fit=crop&w=600&q=60&fm=webp 600w,
          https://images.unsplash.com/photo-1651012998667-2c779fee76f8?auto=format&fit=crop&w=1000&q=60&fm=webp 1000w,
          https://images.unsplash.com/photo-1651012998667-2c779fee76f8?auto=format&fit=crop&w=1600&q=60&fm=webp 1600w
        "
        sizes="100vw"
        alt="High-performance gaming setup with RGB lighting"
        width="1600"
        height="900"
        decoding="async"
        fetchpriority="high"  
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        initial={heroImageAnimation}
        animate={heroImageAnimate}
        transition={{ duration: 0.6 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-4 sm:px-6"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
        animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white"
        >
          Level Up Your <br />
          <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Gaming Experience
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
          Discover high-performance gaming gear crafted to power your passion
          and elevate every victory.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            href="#products"
            aria-label="Explore our gaming products"
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            className="bg-primary hover:bg-accent text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg font-semibold tracking-wide transition"
          >
            Explore Products
          </motion.a>

          <a
            href="#about"
            aria-label="Learn more about NovaArcade"
            className="border border-primary hover:border-accent text-primary hover:text-accent px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
