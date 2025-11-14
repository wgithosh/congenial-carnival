import React, { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

function Newsletter() {
  const prefersReducedMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // status
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Email regex (mild validation)
  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!email.trim()) {
        setMessageType("error");
        return setMessage("Please enter an email address.");
      }

      if (!isValidEmail(email)) {
        setMessageType("error");
        return setMessage("Please enter a valid email address.");
      }

      setLoading(true);
      setMessage("");

      try {
        const API_BASE = import.meta.env.VITE_API_URL ?? "";
        const url = `${API_BASE}/api/newsletter`;

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        // Safe JSON parser
        let data = {};
        try {
          data = await res.json();
        } catch {
          data.message = "Unexpected server response";
        }

        if (!res.ok) {
          setMessageType("error");
          return setMessage(data.message || "Failed to subscribe.");
        }

        // success
        setMessageType("success");
        setMessage(data.message || "Subscribed successfully!");
        setEmail("");
      } catch (err) {
        setMessageType("error");
        setMessage("Network error — please try again.");
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

        {/* FORM */}
        <motion.form
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          whileInView={prefersReducedMotion ? false : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <label htmlFor="email-input" className="sr-only">
            Email Address
          </label>

          <input
            id="email-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            aria-required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 sm:px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            type="submit"
            disabled={loading}
            aria-disabled={loading}
            aria-busy={loading}
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg transition hover:shadow-accent/40 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {loading ? (
              <span role="status" aria-live="polite">
                Subscribing…
              </span>
            ) : (
              "Subscribe"
            )}
          </motion.button>
        </motion.form>

        {/* FEEDBACK MESSAGE */}
        <div aria-live="polite" className="min-h-[24px] mt-4">
          {message && (
            <p
              role="alert"
              className={`text-sm font-medium ${
                messageType === "success"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-500 dark:text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-600 mt-6">
          No spam — unsubscribe anytime.
        </p>

        {/* SEO Fallback */}
        <noscript>
          <p className="text-gray-700">
            JavaScript is required to subscribe to our newsletter.
          </p>
        </noscript>
      </div>
    </section>
  );
}

export default React.memo(Newsletter);
