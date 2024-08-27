import express from "express";
const router = express.Router();
import Favorite from "../models/Favorite.js";

//add favorite
router.post("/", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).send({
        message: "l'ID est introuvable",
      });
    }
    const favorite = await Favorite.create({ id });
    res.status(200).send(favorite);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

//get all favorites
router.get("/", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.status(200).send(favorites);
  } catch (error) {
    console.log(error.message);
    send.status(500).send({ message: error.message });
  }
});

//delete a favorite
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const favorite = await Favorite.findOneAndDelete(id);
    if (!favorite) {
      return res.status(404).send({ message: "L'ID est introuvable" });
    }
    res.status(200).send(favorite);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
