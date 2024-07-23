import express from "express";
import dbconfig from "../config/db.config.js";
import { save, get } from "../controller/user.controller.js";

const route = express.Router();

route.post("/save", save);
route.get("/get", get);

export default route;
