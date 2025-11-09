import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1598550473359-433795503a0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbW1pbmclMjByb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Gaming room console setup"
              className="rounded-3xl shadow-2xl w-[90%] lg:w-[500px] object-cover"
              loading="lazy"
            />

            {/* Soft Glow Behind Image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl opacity-40 -z-10"></div>
          </div>
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
              The Story Behind NovaArcade
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto lg:mx-0 mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Born from a love for gaming and innovation, NovaArcade brings
            world-class performance gear to every player from casual streamers
            to competitive pros. Our mission is simple: to help you dominate
            your world with technology that feels alive.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Every headset, controller, and setup we design is powered by
            creativity and engineered for victory. We believe gaming isn’t just
            play it’s identity, community, and art.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 rounded-full shadow-lg font-semibold tracking-wide transition"
          >
            Join the Squad
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
