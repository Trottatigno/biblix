import "dotenv/config";
import express, { json } from "express";
import mongoose from "mongoose";
import books from "./routes/books.js";
import favorites from "./routes/favorites.js";
import reviews from "./routes/reviews.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(
  "/coverimages",
  express.static(path.join(__dirname, "img/coverimages"))
);

app.use(express.json());

app.use("/books", books);
app.use("/favorites", favorites);
app.use("/reviews", reviews);

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
