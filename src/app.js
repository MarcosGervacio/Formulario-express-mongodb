import express from "express";
import mongoose from "mongoose";
import formRouter from "./routes/form.router.js"; 
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use("/", formRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 8080");
});


