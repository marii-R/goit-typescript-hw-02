import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return (
        <>
            <b className={css.error}>
               Uh-oh! Something's wrong. Please check your internet connection and try again.
            </b>
        </>
    )
}