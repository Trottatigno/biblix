import axios from "axios";
import { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

function AddFavorite({ id }) {
  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {}, []);

  function handleFavorite() {}

  return (
    <button
      className="border-2 border-gray-400 rounded-full flex px-3 py-2"
      onClick={handleFavorite}
    >
      {!isFavorite ? (
        <MdFavoriteBorder className="m-1" />
      ) : (
        <MdFavorite className="m-1" color="#FF69B4" />
      )}
      {!isFavorite ? "Ajouter aux favoris" : "Retirer des favoris"}
    </button>
  );
}

export default AddFavorite;
