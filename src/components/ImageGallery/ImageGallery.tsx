import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageItem } from '../../App.types';

interface ImageGalleryProps {
  openModal: (photo: ImageItem) => void;
  items: ImageItem[];
}

export default function ImageGallery({ openModal, items }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li
          className={css.img}
          key={item.id}
          onClick={() => openModal(item)}
        >
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}