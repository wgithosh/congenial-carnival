import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

// Routes
app.use("/api/products", productRoutes);

// MongoDB Connection (optional for now — comment out if you don't have Mongo yet)
const MONGO_URI = "mongodb://127.0.0.1:27017/gamestore"; // Change name if needed
mongoose.connect(MONGO_URI)
  .then(() => console.log("🟢 MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
