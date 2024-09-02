import { useContext } from "react";
import CreateBookBtn from "../components/Button/CreateBookBtn";
import ContentCard from "../components/ContentCard";
import BooksContext from "../contexts/BooksContext";

function MesCreations() {
  const { books } = useContext(BooksContext);

  const createdBooks = books.filter((book) => book.creation === true);

  console.log(createdBooks);

  return (
    <div className="flex m-3">
      <ContentCard>
        <CreateBookBtn />
      </ContentCard>
      {createdBooks.map((book) => (
        <ContentCard key={book._id} />
      ))}
    </div>
  );
}

export default MesCreations;
