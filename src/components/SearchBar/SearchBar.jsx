import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";
import { Formik, Field, Form } from "formik"

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    const searchImage = values.image.trim();
    if (!searchImage) {
      toast.error("Please enter a search term.");
      actions.setSubmitting(false);
      return;
    }
    onSearch(searchImage);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik
        className={css.formik}
        initialValues={{ image: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="image"
            autoComplete="on"
            autoFocus
            placeholder="Search images"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}