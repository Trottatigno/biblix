import "dotenv/config";
import express, { json } from "express";
import mongoose from "mongoose";
import books from "./routes/books.js";

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/books", books);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connecté à la DB");
    app.listen(PORT, () => {
      console.log(`Le serveur est lancé sur le port: `, PORT);
    });
  })
  .catch((err) => {
    console.log(`PAS connecté à la DB`, { err });
  });
