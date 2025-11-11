import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setStatus("success");
      setEmail(""); // clear field
    } catch (error) {
      console.error("Error subscribing:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="newsletter"
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111] overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent blur-3xl opacity-70"></div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
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
          Get early access to our latest gaming gear, community tournaments,
          and special discounts straight to your inbox.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 text-gray-800 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-accent/40 transition"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.form>

        {/* Feedback */}
        {status === "success" && (
          <p className="text-green-500 mt-4">✅ Subscribed successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 mt-4">❌ Something went wrong.</p>
        )}

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 dark:text-gray-600 mt-6">
          No spam, just exclusive gaming goodness. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
