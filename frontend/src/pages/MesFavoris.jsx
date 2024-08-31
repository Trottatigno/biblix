import { useContext } from "react";
import BooksContext from "../contexts/BooksContext";
import FavoritesContext from "../contexts/FavoritesContext";
import Card from "../components/Card";

function MesFavoris() {
  const { books } = useContext(BooksContext);
  const { favorites } = useContext(FavoritesContext);

  const favoriteBooks = books.filter((book) =>
    favorites.some((favorite) => favorite._id === book._id)
  );

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {favoriteBooks.map((book) => (
        <Card book={book} key={book._id} />
      ))}
    </div>
  );
}

export default MesFavoris;
