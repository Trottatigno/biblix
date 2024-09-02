import { useContext } from "react";
import BookCard from "../components/BookCard";
import BooksContext from "../contexts/BooksContext";
import { useModal } from "../contexts/ModalContext";
import { ReviewsProvider } from "../contexts/ReviewsContext";
import Bookinfo from "../components/Bookinfo";
import ReviewsForm from "../components/Reviews/ReviewsForm";
import ReviewDisplay from "../components/Reviews/ReviewDisplay";

function Librairie() {
  const { books } = useContext(BooksContext);
  const { openModal } = useModal();

  const handleOpenModal = (book) => {
    openModal(
      <div>
        <ReviewsProvider relatedBook={book._id}>
          <Bookinfo book={book} />
          <ReviewsForm relatedBook={book._id} />
          <ReviewDisplay relatedBook={book._id} />
        </ReviewsProvider>
      </div>
    );
  };

  const publishedBooks = books.filter((book) => book.published === true);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {publishedBooks.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          onClick={() => handleOpenModal(book)}
        />
      ))}
    </div>
  );
}

export default Librairie;
