import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// GET /api/admin/subscribers
router.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch subscribers" });
  }
});

export default router;
