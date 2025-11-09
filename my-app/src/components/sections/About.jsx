import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden"
    >
      {/* Soft Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1598550473359-433795503a0f?auto=format&fit=crop&w=1000&q=80"
              alt="Gaming room console setup"
              className="rounded-[32px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.45)] w-[90%] lg:w-[500px] object-cover"
              loading="lazy"
            />

            {/* Soft Glow Behind */}
            <div className="absolute inset-0 rounded-[32px] blur-2xl bg-primary/20 opacity-40 -z-10"></div>
          </motion.div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.2, staggerChildren: 0.15 },
            },
          }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white"
          >
            The Story Behind <span className="text-primary">NovaArcade</span>
          </motion.h2>

          <div className="w-24 h-1 bg-primary/60 mx-auto lg:mx-0 mb-8 rounded-full"></div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          >
            Born from a love for gaming and innovation, NovaArcade brings
            world-class performance gear to every player from casual streamers
            to competitive champions.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
          >
            We create devices that feel intuitive, refined,
            and built with care. Gaming isn’t just play it’s meaning, community,
            and craft.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0 },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-full shadow-md hover:bg-primary/80 transition font-semibold"
            >
              Join the Squad
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#shop"
              className="border border-primary text-primary dark:text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition font-semibold"
            >
              Browse Gear
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
