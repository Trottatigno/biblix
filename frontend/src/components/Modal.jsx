import PropTypes from "prop-types";
import { useEffect } from "react";
import ExitBtn from "./Button/ExitBtn";

function Modal({ openModal, closeModal, children }) {
  // gère le scroll dans arrière plan
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  if (openModal) {
    return (
      <div
        className="flex fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity justify-center items-center p-30 z-50"
        onClick={closeModal}
      >
        <div className="relative rounded-lg bg-gray-200 p-6 max-h-[80vh] overflow-y-auto w-full m-3 sm:m-10 lg:m-52">
          <div className="absolute top-3 right-3">
            <ExitBtn closeModal={closeModal} />
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

Modal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
