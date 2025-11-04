 import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-16 py-16"
    >
      {/* LEFT: Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Level Up Your <br />
          <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Gaming Experience
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Discover the ultimate collection of high-performance gaming gear,
          designed to power your passion and elevate every victory.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#products"
            className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-full shadow-lg font-semibold tracking-wide transition"
          >
            Explore Products
          </motion.a>

          <a
            href="#about"
            className="border border-primary hover:border-accent text-primary hover:text-accent px-8 py-3 rounded-full font-semibold transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* RIGHT: Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center relative"
      >
        <div className="relative">
         <img
  src="https://images.unsplash.com/photo-1651012998667-2c779fee76f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwcGN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80"
  alt="Gaming PC setup"
  className="rounded-3xl shadow-2xl w-[90%] lg:w-[500px] object-cover"
  loading="lazy"
/>


          {/* Glow Effect */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl opacity-40 -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
}
