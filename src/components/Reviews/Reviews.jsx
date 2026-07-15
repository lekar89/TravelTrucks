import styles from "./Reviews.module.css";
import starIcon from "../../assets/icons/star.svg";

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
                                        <img
                                            className={
                                                star <= rating
                                                    ? styles.activeStar
                                                    : styles.inactiveStar
                                            }
                                            key={star}
                                            src={starIcon}
                                            alt=""
                                            width="16"
                                            height="16"
                                        />
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