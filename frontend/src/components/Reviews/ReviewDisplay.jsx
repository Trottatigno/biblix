import CommentDisplay from "./CommentDisplay";
import RatingDisplay from "./RatingDisplay";
import ReviewsContext from "../../contexts/ReviewsContext";
import { useContext, useEffect } from "react";
import axios from "axios";

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
        <div key={review._id} className="flex">
          <RatingDisplay />
          <p className="ml-2">le 11/01/2001</p>
          <CommentDisplay />
        </div>
      ))}
    </div>
  );
}

export default ReviewDisplay;
