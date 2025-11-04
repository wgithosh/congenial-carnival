import { motion } from "framer-motion";

const categories = [
  {
    title: "Gaming Desks",
    img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Headsets",
    img: "https://images.unsplash.com/photo-1612197527762-9c6d0a19b1f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Keyboards",
    img: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chairs",
    img: "https://images.unsplash.com/photo-1616628182509-41f2c8c6a6d0?auto=format&fit=crop&w=800&q=80",
  },
];

export default function GearSection() {
  return (
    <section className="relative w-full bg-[#0B0B11] py-24 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00fff520,_transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Explore Our{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_10px_#00fff5]">
            Gear
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-14"
        >
          From precision peripherals to immersive setups — discover the gear
          built to amplify your playstyle.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 shadow-[0_0_20px_#00fff522] hover:shadow-cyan-400/40 transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000cc] to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>

              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <button className="text-cyan-400 font-medium hover:text-pink-400 transition-colors">
                  Shop Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
