import FavoriteBtn from "./Button/FavoriteBtn";
import AverageRatings from "./Reviews/AverageRatings";

function Bookinfo({ book }) {
  return (
    <div className="flex">
      <div className="flex-2 pr-3 border-r border-x-gray-400">
        <img className="min-w-52" src={`../public/${book.couverture}`}></img>
      </div>
      <div className="pl-3">
        <h2 className="font-bold text-2xl py-1">{book.titre}</h2>
        <AverageRatings />
        <p className="font-medium text-lg py-1">{book.parution}</p>
        <p className="font-normal text-base py-1">{book.resume}</p>
        <p className="font-normal text-base py-1 pb-5">{book.auteur}</p>
        <FavoriteBtn _id={book._id} />
      </div>
    </div>
  );
}

export default Bookinfo;
