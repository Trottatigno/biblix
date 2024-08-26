import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    autheur: {
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
      required: true,
    },
    couverture: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
