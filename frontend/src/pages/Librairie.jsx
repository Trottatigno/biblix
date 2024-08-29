import { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";

function Librairie() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  return <Container books={books} />;
}

export default Librairie;
