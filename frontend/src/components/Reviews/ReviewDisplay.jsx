import CommentDisplay from "./CommentDisplay";
import RatingDisplay from "./RatingDisplay";
import ReviewsContext from "../../contexts/ReviewsContext";
import { useContext } from "react";

function ReviewDisplay() {
  const { reviews } = useContext(ReviewsContext);

  return (
    <div className="my-3">
      {reviews.map((review) => (
        <div key={review._id} className="my-5 border-t border-gray-400 pt-5">
          <RatingDisplay
            rating={review.rating}
            date={new Date(review.createdAt).toLocaleDateString()}
          />
          <CommentDisplay comment={review.comment} />
        </div>
      ))}
    </div>
  );
}

export default ReviewDisplay;
