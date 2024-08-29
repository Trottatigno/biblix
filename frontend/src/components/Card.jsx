import FavoriteBtn from "./Button/FavoriteBtn";
import PropTypes from "prop-types";

function Card({ book }) {
  return (
    <div className="bg-gray-200 rounded-lg p-3 m-3 w-60">
      <div className="justify-center">
        <img src={`../public/${book.couverture}`} alt="Couverture" />
      </div>
      <div className="flex flex-col text-center">
        <h2 className="font-bold text-2xl py-1">{book.titre}</h2>
        <p className="font-medium text-lg py-1">{book.parution}</p>
        <p className="font-normal text-base py-1">{book.auteur}</p>
        <div className="flex justify-center py-1">
          <FavoriteBtn _id={book._id} />
        </div>
      </div>
    </div>
  );
}

export default Card;
