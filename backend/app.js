import route from "./routes/user.routes.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", route);

app.listen(4000, () => {
  console.log("server started...");
});
