import modalOverlayStyle from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ closeModal }) {
  return (
    <section
      className={modalOverlayStyle.overlay}
      onClick={closeModal}
    ></section>
  );
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  closeModal: PropTypes.func,
};
