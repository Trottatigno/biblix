import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BooksContext = createContext({
  books: [],
  fetchBooks: () => {},
  createBook: () => {},
  deleteBook: () => {},
  publishBook: () => {},
});

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  //fetch tous les livres
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/books");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //crée un nouveau livre
  const createBook = async (formData) => {
    try {
      const res = await axios.post("http://localhost:5000/books", formData);
      setBooks([...books, res.data]);
    } catch (error) {
      console.log("Erreur lors de la création du livre : ", error);
    }
  };

  //supprime un livre
  const deleteBook = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${_id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== _id));
    } catch (error) {
      console.log(`Erreur lors de la suppression du livre ${error}`);
    }
  };

  //publie un created book (published === true)
  const publishBook = async (_id) => {
    try {
      await axios.put(`http://localhost:5000/books/${_id}/publish`, {
        published: true,
      });
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === _id ? { ...book, published: true } : book
        )
      );
    } catch (error) {
      console.log(
        `Il y a eu un problème lors de la publication du livre : ${error}`
      );
    }
  };

  return (
    <BooksContext.Provider
      value={{ books, createBook, deleteBook, publishBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

BooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BooksContext;
