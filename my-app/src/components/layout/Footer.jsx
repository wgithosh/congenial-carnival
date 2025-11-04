import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Nova<span className="text-primary">Arcade</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Built for those who play hard and never quit. Powering the future of
            gaming one device at a time.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.15 }}
                className="p-2 rounded-full bg-white/5 hover:bg-primary/30 transition"
              >
                <Icon className="w-5 h-5 text-gray-300" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "Products", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-primary transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">Email: support@novaarcade.com</p>
          <p className="text-gray-400 mb-2">Phone: +254 712 345 678</p>
          <p className="text-gray-400">Nairobi, Kenya</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NovaArcade. All rights reserved.
      </div>

      {/* Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm"></div>
    </footer>
  );
}
