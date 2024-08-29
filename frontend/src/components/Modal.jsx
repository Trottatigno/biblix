import { Children } from "react";
import ExitBtn from "./Button/ExitBtn";

function Modal({ openModal, closeModal, children }) {
  if (openModal) {
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center p-40 z-50">
        <div className="relative flex-col columns-2 rounded-lg bg-gray-200 p-3 h-auto">
          <div className="absolute top-3 right-3">
            <ExitBtn closeModal={closeModal} />
          </div>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
