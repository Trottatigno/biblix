import { useState } from "react";
import FavoriteBtn from "./Button/FavoriteBtn";
import Bookinfo from "./Bookinfo";
import ReviewForm from "./Reviews/ReviewsForm";
import PropTypes from "prop-types";
import Modal from "./Modal";
import ReviewDisplay from "./Reviews/ReviewDisplay";
import AverageRatings from "./Reviews/AverageRatings";

function Card({ book }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="bg-gray-200 rounded-lg p-3 m-3 w-60 transform transition-transform duration-300 hover:scale-105">
        <div className="justify-center">
          <img
            src={`${book.couverture}`}
            alt="Couverture"
            onClick={openModal}
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
            <FavoriteBtn _id={book._id} />
          </div>
        </div>
      </div>
      <Modal openModal={isModalOpen} closeModal={closeModal}>
        <Bookinfo book={book} />
        <ReviewForm relatedBook={book._id} />
        <ReviewDisplay relatedBook={book._id} />
      </Modal>
    </div>
  );
}

Card.propTypes = {
  book: PropTypes.shape({
    titre: PropTypes.string.isRequired,
    auteur: PropTypes.string.isRequired,
    parution: PropTypes.number.isRequired,
    resume: PropTypes.string,
    couverture: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
