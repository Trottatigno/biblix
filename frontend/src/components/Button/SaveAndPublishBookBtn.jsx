function SaveAndPublishBtn({ value, saveAndPublish }) {
  return (
    <button
      onClick={saveAndPublish}
      className="rounded-fullborder-2 bg-emerald-500 text-white rounded-full flex px-3 py-2 ml-3"
    >
      {value}
    </button>
  );
}

export default SaveAndPublishBtn;
