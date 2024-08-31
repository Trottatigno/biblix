import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

function RatingDisplay({ date, rating }) {
  return (
    <div className="flex">
      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className=" text-yellow-500" />
        ))}
      </div>
      <p className="ml-3">{date}</p>
    </div>
  );
}

RatingDisplay.propTypes = {
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default RatingDisplay;
