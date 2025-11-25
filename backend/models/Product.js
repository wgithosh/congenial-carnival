import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },

    // New fields for Add to Cart functionality
    stock: { type: Number, default: 10 },        
    category: { type: String, required: true },  
    slug: { type: String, unique: true },        
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
