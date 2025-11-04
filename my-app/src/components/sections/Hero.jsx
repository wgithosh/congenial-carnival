 import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1607082349566-187342175e2e?auto=format&fit=crop&w=1920&q=80"
        alt="Gaming setup"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* RGB gradient overlay */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_#00fff5,_#ff00c8,_#8a2be2,_#00fff5)] opacity-20 animate-spin-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-[0_0_10px_#00fff5]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Level Up Your{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_15px_#00fff5]">
            Gaming Space
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Discover high-performance setups built for style, power, and precision.  
          Upgrade your play with <span className="text-pink-400 font-medium">NovaByte</span>.
        </motion.p>

        <motion.button
          className="relative bg-cyan-400 text-black px-8 py-3 font-semibold rounded-xl shadow-lg hover:bg-pink-500 hover:shadow-pink-400/40 transition-all duration-300 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">Shop Now</span>
          {/* Button glow effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 hover:opacity-30 blur-lg transition duration-300"></span>
        </motion.button>
      </motion.div>
    </section>
  );
}
