// getting-started.js
import mongoose from "mongoose";

let isDbConnected = false;

const connectToDb = async () => {
  try {
    if (isDbConnected) {
      console.log("Db is already connected");
      return;
    }
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    isDbConnected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
