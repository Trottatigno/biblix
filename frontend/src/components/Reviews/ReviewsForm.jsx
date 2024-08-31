import { useState } from "react";
import SubmitFormBtn from "../Button/SubmitFormBtn";
import TextAreaInput from "../TextAreaInput";
import RatingSelector from "./RatingSelector";
import axios from "axios";
import StatusTextSubmit from "../StatusTextSubmit";
import PropTypes from "prop-types";

function ReviewsForm({ relatedBook }) {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const submitReview = async (event) => {
    try {
      event.preventDefault();
      const req = { rating, comment, relatedBook };
      if (comment.length <= 25) {
        setStatus("error");
        setMessage(
          "Votre commentaire doit contenir un minimum de 25 caractères."
        );
        return;
      }
      await axios.post("http://localhost:5000/reviews/", req);
      setRating(1);
      setComment("");
      setStatus("success");
      setMessage("Votre commentaire a bien été publié.");
    } catch (error) {
      setStatus("error");
      setMessage(
        "Il y a eu un problème avec la publication de votre commentaire."
      );
      console.log(`Erreur lors de la publication de l'avis : `, { error });
    }
  };

  return (
    <form>
      <div>
        <h1 className="font-bold text-2xl mt-3 first-letter:capitalize">
          Rédiger un avis
        </h1>
      </div>
      <RatingSelector rating={rating} setRating={setRating} />
      <TextAreaInput comment={comment} setComment={setComment} />
      <StatusTextSubmit message={message} status={status} />
      <SubmitFormBtn submitReview={submitReview} />
    </form>
  );
}

ReviewsForm.propTypes = {
  relatedBook: PropTypes.string.isRequired,
};

export default ReviewsForm;
