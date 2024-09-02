import TextInput from "./TextInput";
import SaveBookBtn from "./Button/SaveBookBtn";
import PublishBook from "./Button/PublishBook";

function BookFormModal() {
  return (
    <form className="">
      <h2 className="font-bold text-2xl py-2">Créer un livre</h2>
      <div className="my-2">
        <label className="font-bold" htmlFor="titre">
          Titre : *
        </label>
        <TextInput
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
          id="parution"
          type="number"
          placeholder="YYYY"
          min="-3000"
          max={new Date().getFullYear()}
          className="bg-gray-200 border border-gray-400 rounded-lg py-2 px-3 w-full"
        />
      </div>
      <div className="my-2">
        <label className="font-bold" htmlFor="resume">
          Résumé : *
        </label>
        <textarea className="bg-gray-200 border border-gray-400 rounded-lg py-2 px-3 w-full min-h-40"></textarea>
      </div>
      <div className="">
        <label className="font-bold" htmlFor="couverture">
          Couverture : *
        </label>
        <TextInput id="couverture" type="file" placeholder="" className="" />
      </div>
      <div className="flex justify-end mt-2">
        <SaveBookBtn />
        <PublishBook />
      </div>
    </form>
  );
}

export default BookFormModal;
