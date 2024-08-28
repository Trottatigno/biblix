import { useContext, useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import FavoritesContext from "../../contexts/FavoritesContext";

function FavoriteBtn({ id }) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    const found = favorites.some((book) => book.id === id);
    setIsFavorite(found);
  }, [favorites, id]);

  function handleClick() {
    if (!isFavorite) {
      addFavorite(id);
    } else {
      removeFavorite(id);
    }
  }

  return (
    <button
      className="border-2 border-gray-400 rounded-full flex px-3 py-2"
      onClick={handleClick}
    >
      {!isFavorite ? (
        <MdFavoriteBorder className="m-1" />
      ) : (
        <MdFavorite className="m-1" />
      )}
      {!isFavorite ? "Ajouter aux favoris" : "Supprimer des favoris"}
    </button>
  );
}

export default FavoriteBtn;
