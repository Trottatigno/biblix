import TextInput from "./TextInput";
import SaveBookBtn from "./Button/SaveBookBtn";
import { useContext, useState } from "react";
import BooksContext from "../contexts/BooksContext";
import StatusTextSubmit from "./StatusTextSubmit";
import SuccessBtn from "./Button/SuccessBtn";
import { useModal } from "../contexts/ModalContext";

function BookFormModal({ book }) {
  const [titre, setTitre] = useState(book ? book.titre : "");
  const [auteur, setAuteur] = useState(book ? book.auteur : "");
  const [parution, setParution] = useState(book ? book.parution : "");
  const [resume, setResume] = useState(book ? book.resume : "");
  const [couverture, setCouverture] = useState(book ? book.couverture : null);

  //hook modal
  const { closeModal } = useModal();

  //message status info
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  //récupération du .POST et .PUT pour créer/modifier le livre
  const { createBook, updateBook } = useContext(BooksContext);

  //input file (couverture livre)
  const handleFileChange = (e) => {
    setCouverture(e.target.files[0]);
  };

  // enregistre OU modifie le livre dans la DB (published = true/false)
  const handleSaveBook = async (event, published) => {
    event.preventDefault();
    if (!titre || !auteur || !parution || !resume || !couverture) {
      setStatus("error");
      setMessage("Veuillez remplir tous les champs");
      return;
    }
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("auteur", auteur);
    formData.append("parution", parution);
    formData.append("resume", resume);
    if (couverture) {
      formData.append("couverture", couverture);
    }
    formData.append("published", published);
    formData.append("creation", "true");
    try {
      if (book) {
        await updateBook(book._id, formData);
      } else {
        await createBook(formData);
      }
      closeModal();
    } catch (error) {
      console.log(error);
      setStatus("error");
      setMessage("il y a eu un problème avec le soumission du formulaire");
    }
  };

  return (
    <form className="">
      <h2 className="font-bold text-2xl py-2">Créer un livre</h2>
      <div className="my-2">
        <label className="font-bold" htmlFor="titre">
          Titre : *
        </label>
        <TextInput
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          placeholder="Entrez le titre"
          type="text"
          id="titre"
          className={"bg-gray-200 border border-gray-400 rounded-xl py-2 px-2"}
        />
      </div>
      <div className="my-2">
        <label className="font-bold" htmlFor="auteur">
          Auteur : *
        </label>
        <TextInput
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
          placeholder="Entrez l'auteur"
          type="text"
          id="auteur"
          className={"bg-gray-200 border border-gray-400 rounded-xl py-2 px-2"}
        />
      </div>
      <div className="my-2">
        <label className="font-bold" htmlFor="parution">
          Parution : *
        </label>
        <TextInput
          value={parution}
          onChange={(e) => setParution(e.target.value)}
          id="parution"
          type="number"
          placeholder="YYYY"
          className="bg-gray-200 border border-gray-400 rounded-lg py-2 px-3 "
        />
      </div>
      <div className="my-2">
        <label className="font-bold" htmlFor="resume">
          Résumé : *
        </label>
        <textarea
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          id="resume"
          placeholder="Entrez le résumé du livre"
          className="bg-gray-200 border border-gray-400 rounded-lg py-2 px-3 w-full min-h-40"
        ></textarea>
      </div>
      <div className="">
        <label className="font-bold" htmlFor="couverture">
          Couverture : *
        </label>
        <TextInput id="couverture" type="file" onChange={handleFileChange} />
      </div>
      <div className="flex justify-end">
        <StatusTextSubmit status={status} message={message} />
      </div>
      <div className="flex justify-end mt-2">
        <SaveBookBtn
          value={"Enregistrer"}
          saveBook={(event) => handleSaveBook(event)}
        />
        <SuccessBtn
          value={"Enregistrer et publier"}
          onClick={(event) => handleSaveBook(event, "true")}
        />
      </div>
    </form>
  );
}

export default BookFormModal;
