import { useContext } from "react";
import ReviewsContext from "../../contexts/ReviewsContext";
import { FaStar } from "react-icons/fa";

function AverageRatings() {
  const { average, reviews } = useContext(ReviewsContext);

  return (
    <div className="flex">
      {!average ? null : <p className="pr-2">{average}/5</p>}
      {[...Array(Math.floor(average))].map((_, i) => (
        <FaStar key={i} className=" text-yellow-500" />
      ))}
      <p className="pl-2">({reviews.length} avis)</p>
    </div>
  );
}

export default AverageRatings;
