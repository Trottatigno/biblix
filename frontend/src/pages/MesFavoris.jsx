import { useContext } from "react";
import BooksContext from "../contexts/BooksContext";
import FavoritesContext from "../contexts/FavoritesContext";
import BookCard from "../components/BookCard";
import { ReviewsProvider } from "../contexts/ReviewsContext";
import Bookinfo from "../components/Bookinfo";
import ReviewsForm from "../components/Reviews/ReviewsForm";
import ReviewDisplay from "../components/Reviews/ReviewDisplay";
import { useModal } from "../contexts/ModalContext";

function MesFavoris() {
  const { books } = useContext(BooksContext);
  const { favorites } = useContext(FavoritesContext);

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

  const favoriteBooks = books.filter((book) =>
    favorites.some((favorite) => favorite._id === book._id)
  );

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {favoriteBooks.map((book) => (
        <BookCard
          book={book}
          key={book._id}
          onClick={() => handleOpenModal(book)}
        />
      ))}
    </div>
  );
}

export default MesFavoris;
