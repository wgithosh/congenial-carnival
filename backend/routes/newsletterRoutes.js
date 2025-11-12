import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// POST /api/newsletter
router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    // Check if email already exists
    const existing = await Subscriber.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Email already subscribed" });

    await Subscriber.create({ email });

    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to subscribe" });
  }
});

export default router;
