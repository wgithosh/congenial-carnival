import express from "express";
const router = express.Router();

// Temporary product list
const products = [
  { id: 1, title: "NovaArcade Pro Controller", price: 89.99, description: "Precision control with RGB lights" },
  { id: 2, title: "Spectra RGB Headset", price: 129.99, description: "7.1 surround sound and RGB lighting" },
];

router.get("/", (req, res) => {
  console.log("📦 Products route hit");
  res.json(products);
});

export default router;
