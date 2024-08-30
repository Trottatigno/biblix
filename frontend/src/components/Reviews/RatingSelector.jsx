import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function RatingSelector({ rating, setRating }) {
  return (
    <div className="flex my-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              defaultChecked={ratingValue === rating}
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            {ratingValue <= rating ? (
              <FaStar className="cursor-pointer text-yellow-500 transition duration-200 transform hover:scale-125" />
            ) : (
              <FaRegStar className="cursor-pointer text-yellow-500 transition duration-200 transform hover:scale-125" />
            )}
          </label>
        );
      })}
    </div>
  );
}

export default RatingSelector;
