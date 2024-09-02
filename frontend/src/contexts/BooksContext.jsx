import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BooksContext = createContext({
  books: [],
  fetchBooks: () => {},
  createBook: () => {},
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

  return (
    <BooksContext.Provider value={{ books, createBook }}>
      {children}
    </BooksContext.Provider>
  );
}

BooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BooksContext;
