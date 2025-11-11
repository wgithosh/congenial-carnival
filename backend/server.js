import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Newsletter route
app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Please enter a valid email." });
  }

  console.log("🟢 New subscriber:", email);
  return res.status(200).json({ message: "Thanks for subscribing!" });
});

// Optional test route
app.get("/", (req, res) => res.send("Server is running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
