import axios from "axios";
import { createContext, useState } from "react";

const ReviewsContext = createContext({
  reviews: [],
  setReviews: () => {},
  fetchReviews: () => {},
});

export function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState([]);

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

  return (
    <ReviewsContext.Provider value={{ reviews, setReviews, fetchReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export default ReviewsContext;
