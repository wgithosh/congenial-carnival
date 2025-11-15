// src/components/Products.jsx
import { useEffect, useState, useCallback, useMemo } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------
// ANIMATION VARIANTS
// ---------------------------------------------------
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    rotate: 0.3,
    boxShadow: "0 8px 25px rgba(16,185,129,0.4)",
    transition: { duration: 0.2 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// ---------------------------------------------------
// CARD COMPONENT
// ---------------------------------------------------
const Card = React.memo(({ title, description, price, image, onAddToCart }) => (
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
        <motion.img
          src={`${image}&fm=webp`}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-64 sm:h-72 md:h-80 object-cover"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </figure>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">{description}</p>
        <p className="font-semibold mt-2 text-primary">${price.toFixed(2)}</p>
        <motion.button
          onClick={onAddToCart}
          whileTap={{ scale: 0.95 }}
          aria-label={`Add ${title} to cart`}
          className="mt-4 w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/80 transition"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  </motion.article>
));

// ---------------------------------------------------
// MAIN PRODUCT COMPONENT
// ---------------------------------------------------
export default function Products({ onAddToCartGlobal }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortPrice, setSortPrice] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const handleAddToCart = useCallback(
    (product) => {
      if (onAddToCartGlobal) onAddToCartGlobal(product);
    },
    [onAddToCartGlobal]
  );

  // Fetch products
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

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (categoryFilter !== "All") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }
    if (sortPrice === "asc") filtered.sort((a, b) => a.price - b.price);
    if (sortPrice === "desc") filtered.sort((a, b) => b.price - a.price);
    return filtered;
  }, [products, categoryFilter, sortPrice]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Skeleton loader
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

  if (error) {
    return <p className="text-center py-20 text-red-500 text-lg">{error}</p>;
  }

  // Extract categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-6"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Gear
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Explore our most popular products, trusted by elite gamers worldwide.
        </motion.p>

        {/* FILTER & SORT */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          >
            <option value="default">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        {/* GRID WITH STAGGER */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          <AnimatePresence>
            {paginatedProducts.map((product) => (
              <Card
                key={product._id}
                {...product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-lg ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
