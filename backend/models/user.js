import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { String, required: true },
  email: { String, required: true },
  password: { String, required: true },
});
