import CommentDisplay from "./CommentDisplay";
import RatingDisplay from "./RatingDisplay";
import ReviewsContext from "../../contexts/ReviewsContext";
import { useContext, useEffect } from "react";

function ReviewDisplay({ relatedBook }) {
  const { reviews, fetchReviews } = useContext(ReviewsContext);

  useEffect(() => {
    if (relatedBook) {
      fetchReviews(relatedBook);
    }
  }, [relatedBook, fetchReviews]);

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
