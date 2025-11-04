import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Card({ image, title, price, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white/10 backdrop-blur-md border border-gray-200/20 dark:border-white/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-accent/50 transition relative group"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Glow gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
            ${price.toFixed(2)}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
