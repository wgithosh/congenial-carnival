// src/components/CartDrawer.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function CartDrawer({ cartItems, onClose, onRemove }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-white dark:bg-gray-900 shadow-xl z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Your Cart
        </h2>
        <button
          onClick={handleClose}
          aria-label="Close cart"
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          <X className="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center mt-10">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1 ml-3">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => onRemove(index)}
                aria-label={`Remove ${item.title}`}
                className="text-red-500 hover:text-red-600 transition text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer / Checkout */}
      {cartItems.length > 0 && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between font-bold text-gray-900 dark:text-white mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full py-3 bg-primary text-white rounded-full font-semibold hover:bg-accent transition"
            onClick={() => alert("Checkout functionality coming soon!")}
          >
            Checkout
          </button>
        </div>
      )}
    </motion.div>
  );
}
