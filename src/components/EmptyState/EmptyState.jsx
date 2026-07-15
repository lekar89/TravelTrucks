import emptyImage from "../../assets/images/no-campers.svg";
import styles from "./EmptyState.module.css";

function EmptyState({ onClear }) {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={emptyImage}
        alt="Camper was not found"
      />

      <h2 className={styles.title}>No campers found</h2>

      <p className={styles.description}>
        We couldn&apos;t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={styles.actions}>
        <button
          className={styles.clearButton}
          type="button"
          onClick={onClear}
        >
          <svg
            className={styles.closeIcon}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          Clear filters
        </button>

        <button
          className={styles.viewButton}
          type="button"
          onClick={onClear}
        >
          View all campers
        </button>
      </div>
    </div>
  );
}

export default EmptyState;