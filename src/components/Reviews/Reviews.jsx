import styles from "./Reviews.module.css";

function Reviews({ reviews = [] }) {
  if (reviews.length === 0) {
    return <p className={styles.empty}>No reviews yet.</p>;
  }

  return (
    <ul className={styles.list}>
      {reviews.map((review, index) => {
        const reviewerName =
          review.reviewer_name || "Anonymous";

        const rating = Number(
          review.reviewer_rating || 0,
        );

        return (
          <li
            className={styles.review}
            key={`${reviewerName}-${index}`}
          >
            <div className={styles.header}>
              <div className={styles.avatar}>
                {reviewerName.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3 className={styles.name}>
                  {reviewerName}
                </h3>

                <div
                  className={styles.rating}
                  aria-label={`${rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map(star => (
                    <span
                      className={
                        star <= rating
                          ? styles.activeStar
                          : styles.inactiveStar
                      }
                      key={star}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className={styles.comment}>
              {review.comment}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default Reviews;