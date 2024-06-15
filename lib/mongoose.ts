import mongoose from "mongoose";

let isConnected = false;

export default async function connectToDb() {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) throw new Error("Mongodb url doesnt exist");
  if (isConnected) return console.log("Already connected to db");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
  } catch (error: any) {
    throw new Error(`Something went wrong: ${error.message}`);
  }
}
