import { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";

function Librairie() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "https://freetestapi.com/api/v1/books?limit=12"
        );
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
