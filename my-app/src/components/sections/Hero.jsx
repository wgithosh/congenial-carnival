import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6"
    >
      {/* Blur Placeholder */}
      <motion.img
        src="https://images.unsplash.com/photo-1651012998667-2c779fee76f8?auto=format&fit=crop&w=1000&q=10&fm=webp"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 will-change-transform"
      />
      
      {/* Main Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1651012998667-2c779fee76f8?auto=format&fit=crop&w=1000&q=80&fm=webp"
        alt="Gaming PC setup"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        className="relative z-10 max-w-3xl px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
          Level Up Your <br />
          <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Gaming Experience
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
          Discover the ultimate collection of high-performance gaming gear, designed to power your passion and elevate every victory.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#products"
            className="bg-primary hover:bg-accent text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg font-semibold tracking-wide transition"
          >
            Explore Products
          </motion.a>
          <a
            href="#about"
            className="border border-primary hover:border-accent text-primary hover:text-accent px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
