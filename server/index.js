import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Route from "./Routes/userRoute.js";
import Authroute from "./Routes/authRoute.js";
import Adminroute from "./Routes/AdminRoute.js";
import PostRoute from "./Routes/PostRoute.js";
const app = express();

// make middleware Route middleware
app.use(cors());
dotenv.config();
app.use(express.json());
app.use("/api", Route);
app.use("/api", Authroute);
app.use("/admin", Adminroute);
app.use("/admin", PostRoute);


// end
// connect to mongoose
const url = process.env.database;
mongoose
  .connect(url)
  .then(() => {
    console.log("database connection done");
    app.listen(4000, () => {
      console.log("server is running on port 8000");
    });
  })
  .catch(() => console.log("database not connected"));
