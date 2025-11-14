// src/components/Products.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Card({ title, description, price, image }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
      <img
        src={`${image}&fm=webp`}
        alt={title}
        loading="lazy"
        className="w-full h-64 sm:h-72 md:h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
          {description}
        </p>
        <p className="font-semibold mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

    fetch(`${API_BASE}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const SkeletonCard = () => (
    <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-72 sm:h-80 animate-pulse" />
  );

  if (loading) {
    return (
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </section>
    );
  }

  if (error) {
    return <p className="text-center py-20 text-red-500 text-lg">{error}</p>;
  }

  return (
    <section
      id="products"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Gear
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Explore our most popular products, trusted by elite gamers worldwide.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Card {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
