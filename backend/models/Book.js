import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    auteur: {
      type: String,
      required: true,
    },
    parution: {
      type: Number,
      required: true,
      min: -3000,
      max: new Date().getFullYear(),
    },
    resume: {
      type: String,
    },
    couverture: {
      type: String,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
