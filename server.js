import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import taskRoute from "./routes/task.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes

app.use("/api/tasks", taskRoute);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT} `);
  });
});
