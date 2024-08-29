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

export default Container;
