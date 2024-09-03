function SubmitFormBtn({ submitReview }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={(event) => submitReview(event)}
        className="border-2 bg-yellow-500 text-white rounded-full flex px-3 py-2 cursor-pointer "
      >
        Publier
      </button>
    </div>
  );
}

export default SubmitFormBtn;
