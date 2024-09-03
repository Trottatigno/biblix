function WarningBtn({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-fullborder-2 bg-red-500 text-white rounded-full flex px-3 py-2 ml-3 cursor-pointer"
    >
      {value}
    </button>
  );
}

export default WarningBtn;
