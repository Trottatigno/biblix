import FavoriteBtn from "./Button/FavoriteBtn";
import PropTypes from "prop-types";

function Card({ book }) {
  return (
    <div className="bg-gray-200 rounded-lg p-3 m-3 w-60">
      <div className="justify-center">
        <img src="https://fakeimg.pl/220x310/ff0000" alt="filmImage" />
      </div>
      <div className="flex flex-col text-center">
        <h2 className="font-bold text-2xl py-1">{book.title}</h2>
        <p className="font-medium text-lg py-1">{book.year}</p>
        <p className="font-normal text-base py-1">{book.director}</p>
        <div className="flex justify-center py-1">
          <FavoriteBtn id={book.id} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    director: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
