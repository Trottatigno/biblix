function SuccessBtn({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-fullborder-2 bg-emerald-500 text-white rounded-full flex px-3 py-2 ml-1 cursor-pointer"
    >
      {value}
    </button>
  );
}

export default SuccessBtn;
