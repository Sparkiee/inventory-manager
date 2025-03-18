import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
      console.log("Database connected".green.bold.underline);
    })
    .catch((error) => {
      console.error(colors.red.underline("Database Connection Failed"));
      console.error(error);
      process.exit(1);
    });
};

export default connectDB;
