import { useModal } from "../../contexts/ModalContext";
import BookFormModal from "../BookFormModal";

function CreateBookBtn() {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal(<BookFormModal />);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="rounded-fullborder-2 bg-yellow-500 text-white rounded-full flex px-3 py-2"
      >
        {" "}
        + Créer un livre
      </button>
    </div>
  );
}

export default CreateBookBtn;
