import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../../App.types";

export default function LoadMoreBtn({ onLoadMore }: LoadMoreBtnProps) {
  return (
    <button className={css.btn} onClick={onLoadMore}>
      Load more
    </button>
  );
}