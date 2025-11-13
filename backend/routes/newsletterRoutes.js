import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// POST /api/newsletter
router.post("/", async (req, res) => {
  const { email } = req.body;

  // Check email exists
  if (!email) return res.status(400).json({ message: "Email is required" });

  // Optional: Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing)
      return res.status(409).json({ message: "Email already subscribed" });

    // Create new subscriber
    await Subscriber.create({ email });

    return res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return res.status(500).json({ message: "Failed to subscribe" });
  }
});

export default router;
