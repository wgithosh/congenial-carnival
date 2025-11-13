import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function useCountUp(target, start = false, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, start, duration]);

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
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] overflow-hidden"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10 dark:opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Our Achievements
          </span>
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((item, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-100px" });
            const count = useCountUp(item.value, inView);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 25px rgba(147, 51, 234, 0.5), 0 0 50px rgba(236, 72, 153, 0.4)",
                }}
                className="relative p-6 sm:p-8 rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30 shadow-md overflow-hidden transition-transform duration-300"
              >
                {/* Animated Glow */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + index,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-2xl blur-2xl bg-gradient-to-r from-primary via-accent to-purple-600 opacity-40"
                />

                {/* Stat Content */}
                <div className="relative z-10">
                  <motion.h3
                    animate={inView ? { scale: [1, 1.1, 1] } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.2,
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-1 sm:mb-2 drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                  >
                    {count.toLocaleString()}
                    {item.suffix}
                  </motion.h3>
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
