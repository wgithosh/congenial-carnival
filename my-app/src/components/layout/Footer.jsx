import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import React from "react";

export default function Footer() {
  const socialLinks = [
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Twitter, label: "Twitter", href: "#" },
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Youtube, label: "YouTube", href: "#" },
  ];

  const quickLinks = ["Home", "Products", "About", "Contact"];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-[#0a0a0a] text-gray-300 py-16 border-t border-gray-800"
    >
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
          <div className="flex space-x-4 mb-4">
            {socialLinks.map(({ Icon, label, href }, index) => (
              <motion.a
                key={index}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                whileFocus={{ scale: 1.15 }}
                className="p-2 rounded-full bg-white/5 hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-primary transition"
              >
                <Icon className="w-5 h-5 text-gray-300" />
              </motion.a>
            ))}
          </div>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/254707556061?text=Hi%20NovaArcade!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg transition"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </motion.a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-primary focus:text-primary transition focus:outline-none focus:ring-1 focus:ring-primary rounded"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">
            Email:{" "}
            <a
              href="mailto:support@novaarcade.com"
              className="hover:text-primary focus:text-primary transition"
            >
              support@novaarcade.com
            </a>
          </p>
          <p className="text-gray-400 mb-2">
            Phone:{" "}
            <a
              href="tel:+254707556061"
              className="hover:text-primary focus:text-primary transition"
            >
              +254 707556061
            </a>
          </p>
          <p className="text-gray-400">Nairobi, Kenya</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NovaArcade. All rights reserved.
      </div>

      {/* Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm pointer-events-none" />
    </motion.footer>
  );
}
