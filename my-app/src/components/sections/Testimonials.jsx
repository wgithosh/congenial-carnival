// src/components/Testimonials.jsx
import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
  {
    name: "Liam K.",
    role: "Esports Pro Player",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80",
    quote:
      "NovaArcade gear took my game to the next level — lightning-fast response times and pure comfort. I can’t imagine competing without it.",
  },
  {
    name: "Sasha M.",
    role: "Streamer & Content Creator",
    image:
      "https://images.unsplash.com/photo-1628501899963-43bb8e2423e1?auto=format&fit=crop&w=600&q=80",
    quote:
      "The RGB setup is insane, and my viewers love it! Quality meets aesthetics — 10/10 for design and performance.",
  },
  {
    name: "Ethan R.",
    role: "Game Developer",
    image:
      "https://images.unsplash.com/photo-1630441446262-55e54788fa49?auto=format&fit=crop&w=600&q=80",
    quote:
      "What I love about NovaArcade is their build quality. Their peripherals feel custom-built for serious gamers and developers alike.",
  },
];

// Motion variants
const variants = {
  enter: { opacity: 0, y: 40 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

// Memoized card
const TestimonialCard = memo(function TestimonialCard({
  testimonial,
  prefersReducedMotion,
}) {
  return (
    <motion.div
      variants={prefersReducedMotion ? {} : variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
      className="bg-white/10 dark:bg-white/5 border border-gray-200/10 
                 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-xl 
                 max-w-md sm:max-w-3xl mx-auto"
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        loading="lazy"
        decoding="async"
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 sm:mb-6 border-4 border-primary/50"
      />
      <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 italic mb-4 sm:mb-6">
        “{testimonial.quote}”
      </p>
      <h4 className="text-lg sm:text-xl font-bold text-primary">
        {testimonial.name}
      </h4>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        {testimonial.role}
      </p>
    </motion.div>
  );
});

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#111] dark:to-[#0a0a0a] overflow-hidden relative"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2
          id="testimonials-title"
          className="text-3xl md:text-5xl font-extrabold mb-10"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Gamers Say
          </span>
        </h2>

        <div className="relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={index}
              testimonial={testimonialsData[index]}
              prefersReducedMotion={prefersReducedMotion}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
                       bg-white/20 dark:bg-black/30 hover:bg-primary/40 
                       focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
                       bg-white/20 dark:bg-black/30 hover:bg-accent/40 
                       focus:outline-none focus:ring-2 focus:ring-accent transition"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`View testimonial ${i + 1}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all focus:outline-none ${
                i === index
                  ? "bg-gradient-to-r from-primary to-accent w-6"
                  : "bg-gray-400/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
