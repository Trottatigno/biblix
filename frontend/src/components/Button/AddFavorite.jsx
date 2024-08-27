import { useEffect, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

function AddFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {}, []);

  function handleFavorite() {
    setIsFavorite(!isFavorite ? true : false);
    console.log(isFavorite);
  }

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
      Ajouter aux favoris
    </button>
  );
}

export default AddFavorite;
