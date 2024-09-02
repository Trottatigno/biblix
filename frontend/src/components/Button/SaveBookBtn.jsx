function SaveBookBtn({ value, saveBook }) {
  return (
    <button
      onClick={saveBook}
      className="rounded-fullborder-2 bg-yellow-500 text-white rounded-full flex px-3 py-2"
    >
      {value}
    </button>
  );
}

export default SaveBookBtn;
