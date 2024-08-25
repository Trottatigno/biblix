import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    bookId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
