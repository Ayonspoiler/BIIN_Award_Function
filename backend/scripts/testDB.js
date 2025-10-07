import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const testDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB connected successfully");
    const db = mongoose.connection;
    console.log("Collections:", await db.db.listCollections().toArray());
    process.exit();
  } catch (err) {
    console.error(" MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

testDB();
