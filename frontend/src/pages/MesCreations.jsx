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

function MesCreations() {
  const { books, deleteBook, publishBook } = useContext(BooksContext);
  const { openModal, closeModal } = useModal();

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
    openModal(<Bookinfo book={book} />);
  };

  const handleModifyBtn = () => {
    console.log("Modify");
  };

  return (
    <div className="flex m-3">
      <ContentCard>
        <CreateBookBtn />
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
              onClick={handleModifyBtn}
              value={<MdEdit className="className= text-xl" />}
            ></EditBookBtn>
            <SuccessBtn
              onClick={() => publishBook(book._id)}
              value={"Publier"}
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
