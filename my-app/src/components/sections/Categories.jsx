import { motion } from "framer-motion";

const categories = [
  {
    title: "Consoles",
    img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc29sZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
  },

  {
    title: "Headsets",
    img: "https://images.unsplash.com/photo-1677086852955-83f5942cae8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhlYWRzZXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
  },

  {
    title: "Controllers",
    img: "https://images.unsplash.com/photo-1705910308551-7bd455ae8732?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udHJvbGxlcnMlMjBwcyUyMDV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
  },

  {
    title: "Gaming PCs",
    img: "https://images.unsplash.com/photo-1736457833722-35cf6dd38deb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGdhbWluZyUyMHBjfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
  },

  {
    title: "Accessories",
    img: "https://images.unsplash.com/photo-1757356747708-f11f10dbda7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXBoaWNzJTIwY2FyZCUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },

  {
    title: "Gaming Chairs",
    img: "https://images.unsplash.com/photo-1670946839270-cc4febd43b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
  },

];

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative py-24 bg-gray-50 dark:bg-[#111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
            Explore Categories
          </span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition"></div>

              {/* Title */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">
                  {cat.title}
                </h3>
                <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-accent mt-2 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
