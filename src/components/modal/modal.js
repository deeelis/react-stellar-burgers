import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modals");

function Modal({ closeModal, children }) {
  useEffect(() => {
    function onPressEsc(evt) {
      if (evt.key === "Escape") {
        closeModal();
      }
    }
    window.addEventListener("keydown", onPressEsc);
    return () => {
      window.removeEventListener("keydown", onPressEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay closeModal={closeModal} />
      <section className={modalStyle.modal}>
        <div className={modalStyle.button}>
          <CloseIcon type="primary" onClick={closeModal} />
        </div>
        {children}
      </section>
    </>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.element,
};
