import React, { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

function Newsletter() {
  const prefersReducedMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email.trim()) {
        setMessageType("error");
        return setMessage("Please enter an email address");
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

        const data = await res.json().catch(() => ({
          message: "Unexpected response",
        }));

        if (!res.ok) {
          setMessageType("error");
          return setMessage(data.message || "Failed to subscribe");
        }

        setMessageType("success");
        setMessage(data.message || "Subscribed successfully!");
        setEmail("");
      } catch (err) {
        setMessageType("error");
        setMessage(err.message || "Network error");
      } finally {
        setLoading(false);
      }
    },
    [email]
  );

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111]"
    >
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          id="newsletter-title"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Join the NovaArcade Squad
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={prefersReducedMotion ? false : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto"
        >
          Get early access to our latest gaming gear, tournaments, and exclusive
          discounts.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          whileInView={prefersReducedMotion ? false : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          role="form"
          aria-label="Newsletter Subscription Form"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>

          <input
            id="email-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 sm:px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            type="submit"
            aria-label="Subscribe to newsletter"
            disabled={loading}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg transition shadow-primary/30 hover:shadow-accent/40 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.form>

        {/* Response message */}
        {message && (
          <p
            role="alert"
            className={`mt-4 text-sm font-medium ${
              messageType === "success"
                ? "text-green-600 dark:text-green-400"
                : "text-red-500 dark:text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-sm text-gray-500 dark:text-gray-600 mt-6">
          No spam — unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export default React.memo(Newsletter);
