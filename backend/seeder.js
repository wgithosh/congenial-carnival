import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import slugify from "slugify"; // npm i slugify

dotenv.config();

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not set in .env");
  process.exit(1);
}

const products = [
  {
    title: "NovaArcade Pro Controller",
    description: "Precision control, adaptive triggers, and RGB backlight for pro gamers.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1755589614356-bf6d276f5ca5?auto=format&fit=crop&w=600&fm=webp&q=50",
    stock: 50,
    category: "Controllers",
  },
  {
    title: "Spectra RGB Headset",
    description: "Immersive 7.1 surround sound with noise-canceling mic and vibrant lighting.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1747397454085-d6acb0502daf?auto=format&fit=crop&w=600&fm=webp&q=50",
    stock: 35,
    category: "Headsets",
  },
  {
    title: "Phantom X Mechanical Keyboard",
    description: "Ultra-responsive switches with customizable RGB and anti-ghosting keys.",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1713526211434-0b4c6c9adaa7?auto=format&fit=crop&w=600&fm=webp&q=50",
    stock: 40,
    category: "Keyboards",
  },
  {
    title: "AeroPulse Gaming Mouse",
    description: "Lightweight precision mouse with 16,000 DPI and adjustable grip zones.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?auto=format&fit=crop&w=600&fm=webp&q=50",
    stock: 60,
    category: "Mice",
  },
  {
    title: "HyperNova 27'' 165Hz Monitor",
    description: "Crisp visuals, 1ms response time, and immersive curve design.",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1666771410003-8437c4781d49?auto=format&fit=crop&w=600&fm=webp&q=50",
    stock: 25,
    category: "Monitors",
  },
  {
    title: "IonX Gaming Chair",
    description: "Ergonomic comfort with adjustable lumbar, RGB accents, and sleek build.",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1633545486613-feaf749f7805?auto=format&fit=crop&w=600&fm=webp&q=50",
    stock: 15,
    category: "Chairs",
  },
];

// Generate slug for each product
products.forEach((p) => (p.slug = slugify(p.title, { lower: true })));

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB ✅");

    await Product.deleteMany();
    console.log("Existing products cleared ❌");

    await Product.insertMany(products);
    products.forEach((p) =>
      console.log(`Inserted: ${p.title} (Category: ${p.category}, Stock: ${p.stock})`)
    );

    console.log("All products seeded successfully ✅");
  } catch (err) {
    console.error("Seeding failed ❌", err);
  } finally {
    mongoose.connection.close();
  }
};

seedProducts();
