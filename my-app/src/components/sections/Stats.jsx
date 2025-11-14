// src/components/Stats.jsx
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, memo, useMemo } from "react";

// Count-up animation
function useCountUp(target, start = false, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, start, duration]);

  return count;
}

function StatCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const count = useCountUp(item.value, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative p-6 sm:p-8 rounded-2xl 
                 bg-white/40 dark:bg-gray-800/40 
                 border border-gray-200/40 dark:border-gray-700/40 
                 shadow-md overflow-hidden"
    >
      {/* Subtle glow – disabled on mobile + reduced-motion */}
      {!prefersReducedMotion && (
        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.04, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + index * 0.3,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-2xl blur-xl 
                     bg-gradient-to-r from-primary to-accent opacity-20"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">
        <motion.h3
          animate={
            isInView && !prefersReducedMotion ? { scale: [1, 1.1, 1] } : {}
          }
          transition={{ duration: 0.35 }}
          className="text-4xl md:text-5xl font-extrabold text-primary"
        >
          {count.toLocaleString()}
          {item.suffix}
        </motion.h3>

        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-1">
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}

const MemoCard = memo(StatCard);

export default function Stats() {
  // Memoized array to prevent re-creation
  const stats = useMemo(
    () => [
      { label: "Years of Experience", value: 7, suffix: "+" },
      { label: "Products Sold", value: 10000, suffix: "+" },
      { label: "Active Gamers", value: 2000, suffix: "+" },
      { label: "Brands Partnered", value: 15, suffix: "+" },
    ],
    []
  );

  return (
    <section
      id="stats"
      aria-labelledby="stats-title"
      className="relative py-16 sm:py-24
                 bg-gradient-to-b from-white to-gray-50
                 dark:from-[#0a0a0a] dark:to-[#111]"
    >
      {/* Lightweight inline pattern (no blocking request) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><circle cx=\"1\" cy=\"1\" r=\"1\" fill=\"%23ccc\"/></svg>')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.h2
          id="stats-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-purple-600 
                           bg-clip-text text-transparent">
            Our Achievements
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, index) => (
            <MemoCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
