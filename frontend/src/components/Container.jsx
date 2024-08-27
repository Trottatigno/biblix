import Card from "./Card";

function Container({ books }) {
  return (
    <div className=" flex flex-wrap space-x-10 justify-center m-2 p-10">
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
}
export default Container;
