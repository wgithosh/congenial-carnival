import React, { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

function CategoriesComponent() {
  const prefersReducedMotion = useReducedMotion();

  const categories = useMemo(
    () => [
      {
        title: "Consoles",
        img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Headsets",
        img: "https://images.unsplash.com/photo-1677086852955-83f5942cae8a?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Controllers",
        img: "https://images.unsplash.com/photo-1705910308551-7bd455ae8732?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Gaming PCs",
        img: "https://images.unsplash.com/photo-1736457833722-35cf6dd38deb?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Graphics Card",
        img: "https://images.unsplash.com/photo-1757356747708-f11f10dbda7e?auto=format&fit=crop&w=600&q=60",
      },
      {
        title: "Gaming Chairs",
        img: "https://images.unsplash.com/photo-1670946839270-cc4febd43b09?auto=format&fit=crop&w=800&q=80",
      },
    ],
    []
  );

  return (
    <section
      id="categories"
      aria-labelledby="categories-title"
      className="relative py-14 sm:py-20 bg-gray-50 dark:bg-[#111] px-4 sm:px-6"
    >
      {/* Title */}
      <motion.h2
        id="categories-title"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-12"
      >
        <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
          Explore Categories
        </span>
      </motion.h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat, i) => (
          <motion.button
            key={cat.title}
            aria-label={`View products in ${cat.title}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden shadow-lg 
                       cursor-pointer w-full h-64 sm:h-56 md:h-60 lg:h-64
                       outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            {/* Image */}
            <img
              src={cat.img}
              alt={cat.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover 
                         transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t 
                            from-black/70 via-black/40 to-transparent 
                            opacity-90 group-hover:opacity-100 transition" />

            {/* Category Text */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                {cat.title}
              </h3>
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mt-1 rounded-full" />
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

export default memo(CategoriesComponent);
