import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { useEffect } from 'react';
import { ImageItem } from '../../App.types';

Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: ImageItem | null;
}

export default function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <img
        className={css.image}
        src={image?.urls?.regular}
        alt={image?.alt_description}
      />
    </Modal>
  );
}