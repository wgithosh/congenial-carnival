import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Monitor, Star, Trophy } from "lucide-react";

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      label: "Custom Rigs Built",
      value: 1200,
      suffix: "+",
    },
    {
      icon: <Monitor className="w-8 h-8 text-pink-400" />,
      label: "Gaming Monitors Sold",
      value: 3000,
      suffix: "+",
    },
    {
      icon: <Star className="w-8 h-8 text-purple-400" />,
      label: "Positive Reviews",
      value: 4800,
      suffix: "+",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      label: "Awards Won",
      value: 15,
      suffix: "",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-r from-[#0A0A0F] via-[#111122] to-[#0A0A0F] py-16 border-y border-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00fff510,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 text-center text-white">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            className="p-6 bg-[#1a1a25]/60 rounded-2xl border border-white/10 backdrop-blur-md hover:shadow-[0_0_25px_#00fff533] transition-all duration-500 hover:scale-105"
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <motion.h3
              className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_6px_#00fff5]"
              animate={inView ? { scale: [1, 1.2, 1] } : {}}
              transition={{
                duration: 1,
                delay: 0.5 + i * 0.2,
                repeat: 1,
              }}
            >
              {stat.value}
              {stat.suffix}
            </motion.h3>
            <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
