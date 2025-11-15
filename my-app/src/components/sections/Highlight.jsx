import { motion } from "framer-motion";

export default function Highlight() {
  return (
    <section
      id="highlight"
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#111] dark:to-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
              Designed for Gamers,
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              Built for Victory
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto lg:mx-0 mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            At NovaArcade, we don’t just create gaming hardware — we craft
            immersive experiences. Our devices are engineered to respond faster,
            last longer, and perform better under pressure.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Every pixel, button, and light pulse is designed with precision and
            passion. Because when milliseconds matter, you deserve technology
            that keeps up with your reflexes.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#products"
            className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 rounded-full shadow-lg font-semibold tracking-wide transition"
          >
            Discover More
          </motion.a>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1682141882061-c7676602e111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdhbWluZyUyMHNldHVwfGVufDB8fDB8fHww"
              alt="NovaArcade product highlight"
              className="rounded-3xl shadow-2xl w-[90%] lg:w-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl opacity-40 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
