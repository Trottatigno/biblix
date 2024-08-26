import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
