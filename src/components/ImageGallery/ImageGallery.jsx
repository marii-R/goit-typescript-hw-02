import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ openModal, items }) {
    return (
        <ul className={css.list}>
            {items.map((item) => (
                <li className={css.img}
                    key={item.id}
                    onClick={() => {
                        openModal(item);
                }}>
                  <ImageCard item={item} />  

                </li>

            ))}
            
        </ul>
    )
}