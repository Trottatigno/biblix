import PropTypes from "prop-types";

function TextAreaInput({ comment, setComment }) {
  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  return (
    <div className="pt-3">
      <textarea
        value={comment}
        onChange={(event) => handleCommentChange(event)}
        className="bg-gray-200 min-w-full min-h-28 border border-gray-400 rounded-xl py-3 px-2"
      ></textarea>
    </div>
  );
}

TextAreaInput.propTypes = {
  comment: PropTypes.string.isRequired,
  setComment: PropTypes.func.isRequired,
};

export default TextAreaInput;
