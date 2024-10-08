import { useContext, useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import PropTypes from "prop-types";
import FavoritesContext from "../../contexts/FavoritesContext";

function FavoriteBtn({ _id, btnDisplay }) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const found = favorites.some((book) => book._id === _id);
    setIsFavorite(found);
  }, [favorites, _id]);

  function handleClick(event) {
    event.stopPropagation();
    if (!isFavorite) {
      addFavorite(_id);
    } else {
      removeFavorite(_id);
    }
  }

  return (
    <button
      style={{ display: btnDisplay }}
      className="border-2 border-gray-400 rounded-full flex px-3 py-2 cursor-pointer"
      onClick={handleClick}
    >
      {!isFavorite ? (
        <MdFavoriteBorder className="m-1" />
      ) : (
        <MdFavorite className="m-1 fill-pink-500" />
      )}
      {!isFavorite ? "Ajouter aux favoris" : "Supprimer des favoris"}
    </button>
  );
}

FavoriteBtn.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default FavoriteBtn;
