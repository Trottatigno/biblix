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
    const result = await Favorite.create({ id });
    res.status(200).send(result);
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
    const result = await Favorite.find();
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    send.status(500).send({ message: error.message });
  }
});

//delete a favorite
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Favorite.deleteMany({ id: id });
    if (result.deletedCount === 0) {
      return res.status(404).send({ message: "L'ID est introuvable" });
    }
    res.status(200).send({ message: "Favori supprimé" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
