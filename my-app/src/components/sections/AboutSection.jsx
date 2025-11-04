import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#0A0A0F] py-20 overflow-hidden border-y border-white/10">
      {/* Background accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#00fff520,_transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-cyan-400/20 shadow-[0_0_20px_#00fff522]">
            <img
              src="https://images.unsplash.com/photo-1616628182509-41f2c8c6a6d0?auto=format&fit=crop&w=800&q=80"
              alt="Gaming setup"
              className="object-cover w-full h-[400px] md:h-[450px]"
            />
          </div>
          {/* Accent bar */}
          <div className="absolute -bottom-3 left-10 right-10 h-[3px] bg-gradient-to-r from-cyan-400 to-pink-500 blur-[2px] rounded-full"></div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            We Build{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_10px_#00fff5]">
              Next-Gen
            </span>{" "}
            Gaming Experiences
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            At <span className="text-pink-400 font-medium">NovaByte</span>, we
            craft high-performance gaming setups that merge power, precision, and
            style. From custom-built rigs to next-level peripherals, we deliver
            a gaming environment that keeps you ahead of the competition.
          </p>

          <ul className="text-gray-400 space-y-2 mb-8">
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">▹</span> Premium gaming hardware
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">▹</span> Immersive lighting designs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">▹</span> Custom PC configurations
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-cyan-400 to-pink-500 text-black px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 overflow-hidden"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
