import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { useEffect } from "react";


Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
    >
          <img className={css.image}
        src={image?.urls?.regular}
        alt={image?.alt_description} />
    </Modal>
  );
}