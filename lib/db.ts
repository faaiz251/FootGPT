import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

// Define proper types for the global mongoose cache
interface GlobalWithMongoose {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

// Type assertion for global object
declare const global: GlobalWithMongoose;

const cached = global.mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "football_ai",
      bufferCommands: false,
    }).then(m => m);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;

  return cached.conn;
}