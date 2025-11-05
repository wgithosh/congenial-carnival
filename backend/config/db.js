import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/ecommerce"
    );
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // stop the server if Mongo fails
  }
};

export default connectDB;
