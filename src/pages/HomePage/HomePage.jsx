import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>

          <p className={styles.description}>
            You can find everything you want in our catalog
          </p>

          <Link className={styles.button} to="/catalog">
            View Now
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;