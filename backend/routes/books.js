import express from "express";
import Book from "../models/Book.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../img/coverimages");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("couverture"), async (req, res) => {
  try {
    if (
      !req.body.titre ||
      !req.body.auteur ||
      !req.body.parution ||
      !req.body.resume ||
      !req.file
    ) {
      return res.status(400).send({
        message: "Veuillez remplir tous les champs",
      });
    }

    const couvertureUrl = req.file ? `${req.file.filename}` : null;

    const newBook = {
      titre: req.body.titre,
      auteur: req.body.auteur,
      parution: req.body.parution,
      resume: req.body.resume,
      couverture: couvertureUrl,
      published: req.body.published === "true",
      creation: req.body.creation === "true",
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

//display all books
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

//display a book
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

//delete a book
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
    const { titre, auteur, parution, resume, couverture } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        titre,
        auteur,
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

// modifie le champ "published" d'un created book
router.put("/:id/publish", async (req, res) => {
  try {
    const id = req.params.id;
    const { published } = req.body;

    if (published === undefined) {
      return res.status(400).send({
        message: "Le champ 'published' est requis.",
      });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { published },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).send({
        message: "Le livre n'a pas été trouvé dans la base de données",
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
