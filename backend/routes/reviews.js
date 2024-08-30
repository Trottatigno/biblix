import express from "express";
const router = express.Router();
import Review from "../models/Review.js";

// Ajoute une review
router.post("/", async (req, res) => {
  try {
    const { rating, comment, relatedBook } = req.body;
    if (!rating || !comment || !relatedBook) {
      return res
        .status(400)
        .send({ message: "Veuillez remplir tous les champs" });
    }
    const result = await Review.create({ rating, comment, relatedBook });
    res.status(201).send({ result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Affiche toutes les reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Affiche les reviews d'une livre
router.get("/:relatedBook", async (req, res) => {
  try {
    const relatedBook = req.params.relatedBook;
    const reviews = await Review.find({ relatedBook });
    if (!reviews) {
      res.status(404).send({ message: "Aucune review n'a été trouvée" });
    }
    res.status(200).send(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Supprime une review
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const review = await Review.findByIdAndDelete(id);
    if (!review) {
      return res.status(404).send({ message: "l'ID est introuvable" });
    }
    res.status(200).send({ message: "La review a bien été supprimée" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Met à jour une review
router.patch("/:id", async (req, res) => {
  try {
    const reviewId = req.params.id;
    if (!reviewId) {
      return res.status(404).send({ message: "l'ID est introuvable" });
    }

    const updateFields = {};
    if (req.body.id) updateFields.id = req.body.id;
    if (req.body.rating) updateFields.rating = req.body.rating;
    if (req.body.comment) updateFields.comment = req.body.comment;

    if (Object.keys(updateFields).length === 0) {
      return res
        .status(400)
        .send({ message: "Veuillez remplir les champs obligatoires" });
    }

    const UpdatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { $set: updateFields },
      { new: true }
    );

    if (!UpdatedReview) {
      return res.status(404).send({ message: "Le livre est introuvable" });
    }

    res.status(200).send({ UpdatedReview });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
