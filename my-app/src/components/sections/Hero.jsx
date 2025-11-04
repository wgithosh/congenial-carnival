 import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#08080C] text-white overflow-hidden pt-24 pb-20">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#00fff520,_transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Power Your{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_10px_#00fff5]">
              Next Game
            </span>
            .
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8">
            Step into the future of performance gaming with setups built for
            dominance. Designed by pros, powered by passion.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-cyan-400/40 transition-all duration-300">
              Shop Gear
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1606813902912-d4b95d06e9b9?auto=format&fit=crop&w=1000&q=80"
            alt="Gaming setup"
            className="w-full max-w-[500px] md:max-w-none mx-auto rounded-2xl border border-cyan-400/20 shadow-[0_0_20px_#00fff522]"
          />
        </motion.div>
      </div>
    </section>
  );
}
