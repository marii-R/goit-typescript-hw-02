import css from './ImageCard.module.css';
import { ImageItem } from '../../App.types';

interface ImageCardProps {
  item: ImageItem;
}

export default function ImageCard({ item }: ImageCardProps) {
  return (
    <div className={css.container}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
}