import express from "express";
import mongoose from "mongoose";
import formRouter from "./routes/form.router.js"; 

const app = express();
const MONGO_URI = "mongodb+srv://marger96vm:pe3EjAWYu1pdpG0a@cluster0.jaoerii.mongodb.net/seguros?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 8080;

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


