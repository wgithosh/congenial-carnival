import { motion } from "framer-motion";

const categories = [
  { title: "Consoles", img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80" },
  { title: "Headsets", img: "https://images.unsplash.com/photo-1677086852955-83f5942cae8a?auto=format&fit=crop&w=800&q=80" },
  { title: "Controllers", img: "https://images.unsplash.com/photo-1705910308551-7bd455ae8732?auto=format&fit=crop&w=800&q=80" },
  { title: "Gaming PCs", img: "https://images.unsplash.com/photo-1736457833722-35cf6dd38deb?auto=format&fit=crop&w=800&q=80" },
  { title: "Graphics Card", img: "https://images.unsplash.com/photo-1757356747708-f11f10dbda7e?auto=format&fit=crop&w=600&q=60" },
  { title: "Gaming Chairs", img: "https://images.unsplash.com/photo-1670946839270-cc4febd43b09?auto=format&fit=crop&w=800&q=80" },
];

export default function Categories() {
  return (
    <section id="categories" className="relative py-16 sm:py-24 bg-gray-50 dark:bg-[#111] overflow-hidden px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10"
      >
        <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
          Explore Categories
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-64 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg sm:text-xl font-bold">{cat.title}</h3>
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent mt-1 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
