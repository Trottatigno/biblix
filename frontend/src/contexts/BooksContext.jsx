import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BooksContext = createContext({
  books: [],
  fetchBooks: () => {},
});

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

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

  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
}

BooksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BooksContext;
