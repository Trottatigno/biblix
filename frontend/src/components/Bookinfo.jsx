import FavoriteBtn from "./Button/FavoriteBtn";

function Bookinfo({ book }) {
  return (
    <>
      <div>
        <img
          className="pr-3 border-r border-x-gray-400"
          src={`../public/${book.couverture}`}
        ></img>
      </div>
      <div className="flex-col justify-center pl-3">
        <h2 className="font-bold text-2xl py-1">{book.titre}</h2>
        <p className="font-medium text-lg py-1">{book.parution}</p>
        <p className="font-normal text-base py-1">{book.resume}</p>
        <p className="font-normal text-base py-1 pb-5">{book.auteur}</p>
      </div>
    </>
  );
}

export default Bookinfo;
