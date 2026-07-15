import styles from "./Loader.module.css";

function Loader() {
  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="loader-title"
      aria-describedby="loader-description"
    >
      <div className={styles.modal}>
        <span className={styles.spinner} aria-hidden="true" />

        <h2 className={styles.title} id="loader-title">
          Loading tracks...
        </h2>

        <p className={styles.description} id="loader-description">
          Please wait while we fetch the best
          <br />
          travel trucks for you
        </p>
      </div>
    </div>
  );
}

export default Loader;