import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/newsletter", newsletterRoutes); // ✅ Newsletter route added
app.use("/api/admin", adminRoutes);
// Root route
app.get("/", (req, res) => {
  res.send("NovaArcade API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
