import mongoose from "mongoose";
import dbconfig from "../config/db.config.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);

export default user;
