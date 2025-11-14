import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative py-16 sm:py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden px-4 sm:px-6"
    >
      {/* Decorative background texture - non-blocking + no CLS */}
      <img
        src="https://www.transparenttextures.com/patterns/asfalt-dark.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full opacity-[0.05] object-cover"
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* IMAGE COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1598550473359-433795503a0f?auto=format&fit=crop&w=1000&q=80"
            alt="Gaming room console setup with colorful LED lighting"
            loading="lazy"
            decoding="async"
            width="500"
            height="550"
            className="rounded-2xl shadow-2xl w-[90%] lg:w-[500px] object-cover"
            animate={
              prefersReducedMotion
                ? {}
                : { y: [0, -10, 0] }
            }
            transition={
              prefersReducedMotion
                ? {}
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          />
        </motion.div>

        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2
            id="about-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white"
          >
            The Story Behind <span className="text-primary">NovaArcade</span>
          </h2>

          <div className="w-20 h-1 bg-primary/60 mx-auto lg:mx-0 mb-6 rounded-full" />

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
            Born from a love for gaming and innovation, NovaArcade delivers
            world-class performance gear to players of every level — from casual
            explorers to competitive champions.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
            Every device is designed to feel intuitive, refined, and built with
            care. Gaming isn't just entertainment — it's community, creativity,
            and passion.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <motion.a
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              href="#contact"
              className="bg-primary text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-md hover:bg-primary/80 transition font-semibold"
            >
              Join the Squad
            </motion.a>

            <motion.a
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              href="#shop"
              className="border border-primary text-primary dark:text-primary px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-primary/10 transition font-semibold"
            >
              Browse Gear
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(About);
