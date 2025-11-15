import express from "express";
import CartItem from "../models/CartItem.js";

const router = express.Router();

// GET all cart items
router.get("/", async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add item to cart
router.post("/", async (req, res) => {
  const { productId, title, price, image } = req.body;

  try {
    let item = await CartItem.findOne({ productId });
    if (item) {
      item.quantity += 1;
      await item.save();
    } else {
      item = new CartItem({ productId, title, price, image });
      await item.save();
    }
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE remove item from cart
router.delete("/:id", async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
