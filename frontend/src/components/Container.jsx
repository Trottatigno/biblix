import Card from "./Card";
import PropTypes from "prop-types";

function Container({ books }) {
  return (
    <div className=" flex flex-wrap justify-center p-5">
      {books.map((book) => (
        <Card key={book._id} book={book} />
      ))}
    </div>
  );
}

Container.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string.isRequired,
      auteur: PropTypes.string.isRequired,
      parution: PropTypes.number.isRequired,
      resume: PropTypes.string,
      couverture: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Container;
