import { useContext } from "react";
import Card from "../components/Card";
import BooksContext from "../contexts/BooksContext";

function Librairie() {
  const { books } = useContext(BooksContext);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {books.map((book) => (
        <Card key={book._id} book={book} />
      ))}
    </div>
  );
}

export default Librairie;
