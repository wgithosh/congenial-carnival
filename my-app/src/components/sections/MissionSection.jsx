import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="relative w-full bg-[#08080C] py-24 border-t border-white/10 overflow-hidden">
      {/* Neon glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#ff00ff20,_transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The{" "}
            <span className="text-pink-500 drop-shadow-[0_0_10px_#ff00ff]">
              NovaByte
            </span>{" "}
            Mission
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            We believe gaming isn’t just a pastime — it’s a performance art.
            Every player deserves a setup that enhances skill, fuels creativity,
            and looks as powerful as it performs. That’s why we build immersive,
            high-performance environments that let you focus on what matters:
            winning.
          </p>

          <p className="text-gray-400 mb-8">
            From our neon-lit workshops to your ultimate battle station, our
            mission is to push the boundaries of what gaming gear can be —
            functional, futuristic, and fearlessly bold.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-cyan-400 text-black px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
          >
            Discover More
          </motion.a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-pink-500/20 shadow-[0_0_25px_#ff00ff33]">
            <img
              src="https://images.unsplash.com/photo-1606813902912-d4b95d06e9b9?auto=format&fit=crop&w=900&q=80"
              alt="NovaByte gaming setup"
              className="object-cover w-full h-[420px] md:h-[500px]"
            />
          </div>

          {/* Accent bar glow */}
          <div className="absolute -bottom-3 left-12 right-12 h-[3px] bg-gradient-to-r from-pink-500 to-cyan-400 blur-[2px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
