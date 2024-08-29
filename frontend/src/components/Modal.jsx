import ExitBtn from "./Button/ExitBtn";
import FavoriteBtn from "./Button/FavoriteBtn";

function Modal({ openModal, closeModal, book }) {
  if (openModal) {
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center p-40 z-50">
        <div className="flex rounded-lg bg-gray-200 p-3 h-auto">
          <div className="flex">
            <img
              className="w-80 pr-3 border-r border-x-gray-400"
              src={`../public/${book.couverture}`}
            ></img>
            <div className="flex-col justify-center pl-3">
              <div className="flex justify-end">
                <ExitBtn closeModal={closeModal} />
              </div>
              <h2 className="font-bold text-2xl py-1">{book.titre}</h2>
              <p className="font-medium text-lg py-1">{book.parution}</p>
              <p className="font-normal text-base py-1">{book.resume}</p>
              <p className="font-normal text-base py-1">{book.auteur}</p>
              <div className="mt-4">
                <FavoriteBtn _id={book._id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
