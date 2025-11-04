import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Liam K.",
        role: "Esports Pro Player",
        image:
            "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80",
        quote:
            "NovaArcade gear took my game to the next level — lightning-fast response times and pure comfort. I can’t imagine competing without it.",
    },
    {
        name: "Sasha M.",
        role: "Streamer & Content Creator",
        image:
            "https://images.unsplash.com/photo-1628501899963-43bb8e2423e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlJTIwb2YlMjBhJTIwbGFkeSUyMGdhbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
        quote:
            "The RGB setup is insane, and my viewers love it! Quality meets aesthetics — 10/10 for design and performance.",
    },
    {
        name: "Ethan R.",
        role: "Game Developer",
        image:
            "https://images.unsplash.com/photo-1630441446262-55e54788fa49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGltYWdlJTIwb2YlMjBhJTIwZ3V5JTIwZ2FtZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
        quote:
            "What I love about NovaArcade is their build quality. Their peripherals feel custom-built for serious gamers and developers alike.",
    },
];


export default function Testimonials() {
    const [index, setIndex] = useState(0);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () =>
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section
            id="testimonials"
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#111] dark:to-[#0a0a0a] overflow-hidden relative"
        >
            <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-10">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        What Gamers Say
                    </span>
                </h2>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/10 dark:bg-white/5 border border-gray-200/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl max-w-3xl mx-auto"
                        >
                            <img
                                src={testimonials[index].image}
                                alt={testimonials[index].name}
                                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-primary/50"
                                loading="lazy"
                            />
                            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                                “{testimonials[index].quote}”
                            </p>
                            <h4 className="text-xl font-bold text-primary">
                                {testimonials[index].name}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {testimonials[index].role}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 dark:bg-black/30 hover:bg-primary/40 transition"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 dark:bg-black/30 hover:bg-accent/40 transition"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all ${i === index
                                    ? "bg-gradient-to-r from-primary to-accent w-6"
                                    : "bg-gray-400/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
