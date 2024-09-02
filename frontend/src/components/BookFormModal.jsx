import TextInput from "./TextInput";
import SaveBookBtn from "./Button/SaveBookBtn";
import SaveAndPublishBtn from "./Button/SaveAndPublishBookBtn";
import { useContext, useState } from "react";
import BooksContext from "../contexts/BooksContext";
import StatusTextSubmit from "./StatusTextSubmit";

function BookFormModal() {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [parution, setParution] = useState("");
  const [resume, setResume] = useState("");
  const [couverture, setCouverture] = useState(null);

  //message status info
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const { createBook } = useContext(BooksContext);

  const handleFileChange = (e) => {
    setCouverture(e.target.files[0]);
  };

  const handleSaveBook = async (event) => {
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
    formData.append("couverture", couverture);
    try {
      await createBook(formData);
      setStatus("success");
      setMessage("Votre livre a bien été créé");
    } catch (error) {
      console.log(error);
      setStatus("error");
      setMessage("il y a eu un problème avec le soumission du formulaire");
    }
  };

  const saveAndPublish = (event) => {
    event.preventDefault();
    //ici le context pour post et published = true
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
          *Parution : *
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
        <SaveBookBtn saveBook={handleSaveBook} />
        <SaveAndPublishBtn saveAndPublish={saveAndPublish} />
      </div>
    </form>
  );
}

export default BookFormModal;
