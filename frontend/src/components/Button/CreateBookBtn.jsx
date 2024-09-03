function CreateBookBtn({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="rounded-fullborder-2 bg-yellow-500 text-white rounded-full flex px-3 py-2 cursor-pointer"
      >
        {" "}
        + Créer un livre
      </button>
    </div>
  );
}

export default CreateBookBtn;
