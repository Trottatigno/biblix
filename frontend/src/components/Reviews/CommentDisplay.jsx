import PropTypes from "prop-types";

function CommentDisplay({ comment }) {
  return (
    <div className="">
      <p>{comment}</p>
    </div>
  );
}

CommentDisplay.propTypes = {
  comment: PropTypes.string.isRequired,
};

export default CommentDisplay;
