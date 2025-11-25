import { useEffect, useState, useCallback } from "react";
import React from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

// ---------------------------------------------------
// Motion variants (reduced weight = faster)
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const hoverVariants = {
  hover: { scale: 1.02, rotate: 0.3, transition: { duration: 0.2 } },
};

// -------------------------------------------------------
// CARD COMPONENT (optimized)
// -------------------------------------------------------
const Card = React.memo(function Card({ title, description, price, image, stock, onAddToCart }) {
  return (
    <motion.article
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
    >
      <motion.div variants={hoverVariants}>
        <figure>
          <img
            src={image} // already optimized in backend/seed
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-64 sm:h-72 md:h-80 object-cover"
          />
        </figure>

        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">{description}</p>
          <p className="font-semibold mt-2 text-primary">${price.toFixed(2)}</p>
          <p className="text-sm mt-1 text-gray-500">
            {stock > 0 ? `${stock} in stock` : "Out of stock"}
          </p>

          <button
            onClick={onAddToCart}
            disabled={stock <= 0}
            className={`mt-4 w-full py-2 rounded-lg font-semibold transition text-white ${
              stock > 0 ? "bg-primary hover:bg-primary/80" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {stock > 0 ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </motion.div>
    </motion.article>
  );
});

// -------------------------------------------------------
// MAIN PRODUCTS COMPONENT (optimized)
// -------------------------------------------------------
export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Optimized fetch + caching
  useEffect(() => {
    const cached = localStorage.getItem("products");

    if (cached) {
      setProducts(JSON.parse(cached));
      setLoading(false);
      return;
    }

    fetch(`${API_BASE}/api/products`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then(data => {
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data)); // cache
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // optimize cart handler
  const handleAddToCart = useCallback(async (product) => {
    try {
      const res = await fetch(`${API_BASE}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product._id,
          title: product.title,
          price: product.price,
          image: product.image,
        }),
      });

      if (!res.ok) throw new Error("Failed to add to cart");
      toast.success(`${product.title} added to cart!`);
    } catch (err) {
      toast.error(err.message);
    }
  }, []);

  // Skeleton Loader
  const SkeletonCard = () => (
    <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-72 sm:h-80 animate-pulse" />
  );

  if (loading) {
    return (
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </section>
    );
  }

  if (error)
    return <p className="text-center py-20 text-red-500 text-lg">{error}</p>;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Gear
          </span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore our most popular products, trusted by elite gamers worldwide.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {products.map((product) => (
            <Card
              key={product._id}
              {...product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </motion.div>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
}
