import Card from "./Card";
import PropTypes from "prop-types";

function Container({ books }) {
  return (
    <div className=" flex flex-wrap space-x-10 justify-center m-2 p-10">
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
}

Container.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      director: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Container;
