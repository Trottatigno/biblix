import { useContext } from "react";
import BookCard from "../components/BookCard";
import BooksContext from "../contexts/BooksContext";

function Librairie() {
  const { books } = useContext(BooksContext);

  const publishedBooks = books.filter((book) => book.published === true);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {publishedBooks.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}

export default Librairie;
