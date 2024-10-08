import FavoriteBtn from "./Button/FavoriteBtn";
import PropTypes from "prop-types";
import AverageRatings from "./Reviews/AverageRatings";
import { ReviewsProvider } from "../contexts/ReviewsContext";

function BookCard({ book, btnDisplay, children, onClick }) {
  return (
    <ReviewsProvider relatedBook={book._id}>
      <div className="flex">
        <div className="flex flex-col bg-gray-200 rounded-lg p-3 m-3 w-64 transform transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center mb-3">
            <img
              src={`http://localhost:5000/coverimages/${book.couverture}`}
              alt="Couverture"
              onClick={onClick}
              className="w-full h-72 object-cover rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex flex-col text-center">
            <h2 className="font-bold text-2xl py-1">{book.titre}</h2>
            <div className="flex justify-center">
              <AverageRatings />
            </div>
            <p className="font-medium text-lg py-1">{book.parution}</p>
            <p className="font-normal text-base py-1">{book.auteur}</p>
            <div className="flex justify-center py-1">
              <FavoriteBtn _id={book._id} btnDisplay={btnDisplay} />
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </ReviewsProvider>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    titre: PropTypes.string.isRequired,
    auteur: PropTypes.string.isRequired,
    parution: PropTypes.number.isRequired,
    resume: PropTypes.string,
    couverture: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
