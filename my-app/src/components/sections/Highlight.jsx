import { motion } from "framer-motion";

export default function Highlight() {
  return (
    <section
      id="highlight"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#111] dark:to-[#0a0a0a] overflow-hidden px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
              Designed for Gamers,
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              Built for Victory
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto lg:mx-0 mb-6 rounded-full"></div>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
            At NovaArcade, we craft immersive experiences. Our devices are engineered to respond faster, last longer, and perform better under pressure.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">
            Every pixel, button, and light pulse is designed with precision and passion. Because when milliseconds matter, you deserve technology that keeps up with your reflexes.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#products"
            className="inline-block bg-primary hover:bg-accent text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg font-semibold tracking-wide transition"
          >
            Discover More
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[90%] sm:w-[500px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1682141878168-5dace8e1785d?auto=format&fit=crop&w=1000&q=80"
              alt="Gaming desk setup"
              loading="lazy"
              className="rounded-2xl shadow-2xl object-cover w-full"
            />
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl opacity-40 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
