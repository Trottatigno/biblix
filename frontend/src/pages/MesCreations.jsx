import { useContext } from "react";
import CreateBookBtn from "../components/Button/CreateBookBtn";
import ContentCard from "../components/ContentCard";
import BooksContext from "../contexts/BooksContext";
import BookCard from "../components/BookCard";
import EditBookBtn from "../components/Button/ModifyBookBtn";
import SuccessBtn from "../components/Button/SuccessBtn";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import WarningBtn from "../components/Button/WarningBtn";
import { useModal } from "../contexts/ModalContext";
import Bookinfo from "../components/Bookinfo";
import StatusTextSubmit from "../components/StatusTextSubmit";
import BookFormModal from "../components/BookFormModal";
import FavoritesContext from "../contexts/FavoritesContext";
import ReviewDisplay from "../components/Reviews/ReviewDisplay";

function MesCreations() {
  const { books, deleteBook, publishBook, unPublishBook } =
    useContext(BooksContext);
  const { openModal, closeModal } = useModal();
  const { removeFavorite } = useContext(FavoritesContext);

  const createdBooks = books.filter((book) => book.creation === true);

  // Ouvre modal pour confirmer la suppression du livre
  const deleteOpenModal = (book) => {
    openModal(
      <div>
        <div className="">
          <p className="mb-5 text-xl font-bold flex justify-center">
            Voulez-vous vraiment supprimer ce livre ?
          </p>
        </div>
        <div className="flex justify-center">
          <SuccessBtn
            onClick={() => closeModal()}
            value={"Non, je ne veux pas supprimer ce livre"}
          ></SuccessBtn>
          <WarningBtn
            onClick={async () => {
              try {
                await deleteBook(book._id);
                await removeFavorite(book._id);
                closeModal();
              } catch (error) {
                console.error(
                  `Erreur lors de la suppression du livre : ${error}`
                );
              }
            }}
            value={"Supprimer"}
          ></WarningBtn>
        </div>
      </div>
    );
  };

  const showBookInfo = (book) => {
    openModal(
      <div>
        <Bookinfo book={book} />
        <ReviewDisplay />
      </div>
    );
  };

  const handleEditBtn = (book) => {
    openModal(<BookFormModal book={book} />);
  };

  // gère le switch entre publier et dépublier le livre
  const handlePublishBtn = (book) => {
    if (book.published === false) {
      publishBook(book._id);
    } else {
      unPublishBook(book._id);
    }
  };

  const handleCreateBook = () => {
    openModal(<BookFormModal />);
  };

  return (
    <div className="flex m-3">
      <ContentCard>
        <CreateBookBtn onClick={handleCreateBook} />
      </ContentCard>
      {createdBooks.map((book) => (
        <BookCard
          book={book}
          key={book._id}
          btnDisplay={"none"}
          onClick={() => showBookInfo(book)}
        >
          <div className="flex">
            <WarningBtn
              onClick={() => {
                deleteOpenModal(book);
              }}
              value={<MdDeleteOutline className="text-xl" />}
            ></WarningBtn>
            <EditBookBtn
              onClick={() => handleEditBtn(book)}
              value={<MdEdit className="className= text-xl" />}
            ></EditBookBtn>
            <SuccessBtn
              onClick={() => handlePublishBtn(book)}
              value={book.published ? "Dépublier" : "Publier"}
            ></SuccessBtn>
          </div>
          <div className="mt-2">
            {book.published ? (
              <StatusTextSubmit message={"publié"} status={"success"} />
            ) : (
              <StatusTextSubmit message={"brouillon"} status={"error"} />
            )}
          </div>
        </BookCard>
      ))}
    </div>
  );
}

export default MesCreations;
