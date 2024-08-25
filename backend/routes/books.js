import express from "express";
const router = express.Router();
import Book from "../models/book.js";

// create a new book
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.titre ||
      !req.body.autheur ||
      !req.body.parution ||
      !req.body.resume ||
      !req.body.couverture
    ) {
      return res.status(400).send({
        message: "Veuillez remplir tous les champs",
      });
    }

    const newBook = {
      titre: req.body.titre,
      autheur: req.body.autheur,
      parution: req.body.parution,
      resume: req.body.resume,
      couverture: req.body.couverture,
    };

    const book = await Book.create(newBook);
    res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

//display all created books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

//display a created book
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send({
        message: "Le livre n'a pas été trouvé",
      });
    }
    res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

//delete a created book
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).send({
        message: "Le livre n'a pu être supprimé car il n'a pas été trouvé",
      });
    }

    res.status(200).send({
      message: "Le livre a bien été supprimé",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

//update a created book
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { titre, autheur, parution, resume, couverture } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        titre,
        autheur,
        parution,
        resume,
        couverture,
      },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).send({
        message: "Le livre n'a pas été trouvé dans la base de donnée",
      });
    }

    res.status(200).send(updatedBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message,
    });
  }
});

export default router;
