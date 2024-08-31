import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ReviewsContext = createContext({
  reviews: [],
  setReviews: () => {},
  fetchReviews: () => {},
  average: 0,
});

export function ReviewsProvider({ children, relatedBook }) {
  const [reviews, setReviews] = useState([]);
  const [average, setAverage] = useState(0);

  const fetchReviews = async (relatedBook) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/reviews/${relatedBook}`
      );
      setReviews(res.data);
    } catch (error) {
      console.log("Impossible de récupérer les reviews :", error);
    }
  };

  const calculateRatingAverage = () => {
    const ratings = reviews.map((review) => review.rating);
    const sum = ratings.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const averageRating = ratings.length ? sum / ratings.length : 0;
    return parseFloat(averageRating.toFixed(1));
  };

  useEffect(() => {
    if (relatedBook) {
      fetchReviews(relatedBook);
    }
  }, [relatedBook, reviews]);

  useEffect(() => {
    const avg = calculateRatingAverage();
    setAverage(avg);
  }, [reviews]);

  return (
    <ReviewsContext.Provider
      value={{ reviews, setReviews, fetchReviews, average }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}

ReviewsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  relatedBook: PropTypes.string.isRequired,
};

export default ReviewsContext;
