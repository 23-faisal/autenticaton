import mongoose from "mongoose";
import "dotenv/config";

export const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to mongodb: ${error.message}`);
    process.exit(1);
  }
};
