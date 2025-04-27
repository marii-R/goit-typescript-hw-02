import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
    return (
        <div className={css.loader}>
            <ClipLoader
                size={150}
            />

        </div>
    );
}