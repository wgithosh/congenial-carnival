// src/components/Newsletter.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessageType("error");
      return setMessage("Please enter an email");
    }

    setLoading(true);
    setMessage("");

    try {
      const API_BASE = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_BASE}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = { message: res.statusText || "Something went wrong" };
      }

      if (!res.ok) {
        setMessageType("error");
        setMessage(data.message || "Failed to subscribe");
        return;
      }

      setMessageType("success");
      setMessage(data.message || "Subscribed successfully!");
      setEmail("");
    } catch (err) {
      setMessageType("error");
      setMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Join the NovaArcade Squad
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto"
        >
          Get early access to our latest gaming gear, community tournaments, and special discounts straight to your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 sm:px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-accent/40 transition disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.form>

        {message && (
          <p
            className={`mt-4 text-sm font-medium ${
              messageType === "success"
                ? "text-green-500 dark:text-green-400"
                : "text-red-500 dark:text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-sm text-gray-500 dark:text-gray-600 mt-6">
          No spam, just exclusive gaming goodness. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
