import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

const cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "football_ai",
      bufferCommands: false,
    }).then(m => m);
  }

  cached.conn = await cached.promise;
  (global as any).mongoose = cached;

  return cached.conn;
}
