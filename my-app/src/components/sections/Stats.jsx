import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Simple counter animation hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        start = target;
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);
  return count;
}

export default function Stats() {
  const stats = [
    { label: "Years of Experience", value: 7, suffix: "+" },
    { label: "Products Sold", value: 10000, suffix: "+" },
    { label: "Active Gamers", value: 2000, suffix: "+" },
    { label: "Brands Partnered", value: 15, suffix: "+" },
  ];

  return (
    <section
      id="stats"
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10 dark:opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Our Achievements
          </span>
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => {
            const count = useCountUp(item.value);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  {count}
                  {item.suffix}
                </h3>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
