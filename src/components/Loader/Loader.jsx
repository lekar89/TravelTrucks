import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.wrapper} role="status">
      <span className={styles.loader} />
      <p>Loading...</p>
    </div>
  );
}

export default Loader;