import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },

    // New fields for Add to Cart functionality
    stock: { type: Number, default: 10 },        // Available quantity
    category: { type: String, required: true },  // Product category
    slug: { type: String, unique: true },        // SEO-friendly URL
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
