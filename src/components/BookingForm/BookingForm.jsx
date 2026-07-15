import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./BookingForm.module.css";

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

function BookingForm({ camperName }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;

    setValues(previousValues => ({
      ...previousValues,
      [name]: value,
    }));

    setErrors(previousErrors => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!values.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!values.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      validationErrors.email =
        "Enter a valid email address";
    }

    if (!values.date) {
      validationErrors.date =
        "Booking date is required";
    }

    return validationErrors;
  };

  const handleSubmit = event => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    toast.success(
      `${camperName} has been successfully booked!`,
    );

    setValues(initialValues);
    setErrors({});
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <h2 className={styles.title}>
        Book your campervan now
      </h2>

      <p className={styles.description}>
        Stay connected! We are always ready to help you.
      </p>

      <div className={styles.field}>
        <input
          className={`${styles.input} ${
            errors.name ? styles.invalid : ""
          }`}
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name*"
        />

        {errors.name && (
          <p className={styles.error}>{errors.name}</p>
        )}
      </div>

      <div className={styles.field}>
        <input
          className={`${styles.input} ${
            errors.email ? styles.invalid : ""
          }`}
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email*"
        />

        {errors.email && (
          <p className={styles.error}>{errors.email}</p>
        )}
      </div>

      <div className={styles.field}>
        <input
          className={`${styles.input} ${
            errors.date ? styles.invalid : ""
          }`}
          type="date"
          name="date"
          value={values.date}
          min={today}
          onChange={handleChange}
        />

        {errors.date && (
          <p className={styles.error}>{errors.date}</p>
        )}
      </div>

      <textarea
        className={`${styles.input} ${styles.textarea}`}
        name="comment"
        value={values.comment}
        onChange={handleChange}
        placeholder="Comment"
      />

      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
}

export default BookingForm;