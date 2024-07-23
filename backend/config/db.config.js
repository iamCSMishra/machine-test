import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/Emaster")
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error);
  });

export default mongoose.connection;
