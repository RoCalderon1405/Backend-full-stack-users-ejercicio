import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config()

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected`.cyan.underline);

  } catch (error) {
    return console.log(`Something went wrong!!`.red.underline)
  }
}
