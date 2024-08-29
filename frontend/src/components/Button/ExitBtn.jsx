import { RxCross1 } from "react-icons/rx";

function ExitBtn({ closeModal }) {
  return <RxCross1 onClick={closeModal} />;
}

export default ExitBtn;
