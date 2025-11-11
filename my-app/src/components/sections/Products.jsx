import { motion } from "framer-motion";
import Card from "../common/Card";

const products = [
    {
        image:
            "https://images.unsplash.com/photo-1755589614356-bf6d276f5ca5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBybyUyMHBzNSUyMCUyMGdhbW1pbmclMjBjb250cm9sbGVyfGVufDB8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
        title: "NovaArcade Pro Controller",
        price: 89.99,
        description:
            "Precision control, adaptive triggers, and RGB backlight for pro gamers.",
    },
 

    {
        image:
            "https://images.unsplash.com/photo-1747397454085-d6acb0502daf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJnYiUyMGhlYWRzZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
        title: "Spectra RGB Headset",
        price: 129.99,
        description:
            "Immersive 7.1 surround sound with noise-canceling mic and vibrant lighting.",
    },
    {
        image:
            "https://images.unsplash.com/photo-1713526211434-0b4c6c9adaa7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGdhbWluZyUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
        title: "Phantom X Mechanical Keyboard",
        price: 149.99,
        description:
            "Ultra‑responsive switches with customizable RGB and anti‑ghosting keys.",
    },

    {
        image:
            "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
        title: "AeroPulse Gaming Mouse",
        price: 79.99,
        description:
            "Lightweight precision mouse with 16,000 DPI and adjustable grip zones.",
    },

    {
        image:
            "https://images.unsplash.com/photo-1666771410003-8437c4781d49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
        title: "HyperNova 27'' 165Hz Monitor",
        price: 349.99,
        description:
            "Crisp visuals, 1ms response time, and immersive curve design.",
    },


    {
        image:
            "https://images.unsplash.com/photo-1633545486613-feaf749f7805?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbWluZyUyMGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
        title: "IonX Gaming Chair",
        price: 249.99,
        description:
            "Ergonomic comfort with adjustable lumbar, RGB accents, and sleek build.",
    },


];

export default function Products() {
    return (
        <section
            id="products"
            className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0a0a] dark:to-[#111]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-extrabold text-center mb-6"
                >
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Featured Gear
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Explore our most popular products, trusted by elite gamers worldwide.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card {...product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}