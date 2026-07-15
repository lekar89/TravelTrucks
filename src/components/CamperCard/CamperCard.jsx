import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/icons/location.svg";
import starIcon from "../../assets/icons/star.svg";
import { selectFavoriteIds } from "../../redux/favorites/favoritesSelectors";
import { toggleFavorite } from "../../redux/favorites/favoritesSlice";
import { formatPrice } from "../../utils/formatPrice";
import HeartIcon from "../HeartIcon/HeartIcon";
import styles from "./CamperCard.module.css";

const capitalize = value => {
    if (!value) {
        return "";
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
};

const getCamperImage = camper => {
    const firstImage = camper.gallery?.[0];

    if (typeof firstImage === "string") {
        return firstImage;
    }

    return firstImage?.thumb || firstImage?.original || "";
};

function CamperCard({ camper }) {
    const dispatch = useDispatch();
    const favoriteIds = useSelector(selectFavoriteIds);

    const camperId = String(camper.id);
    const isFavorite = favoriteIds.includes(camperId);
    const imageUrl = getCamperImage(camper);

    const features = [
        camper.transmission && capitalize(camper.transmission),
        camper.engine && capitalize(camper.engine),
        camper.AC && "AC",
        camper.kitchen && "Kitchen",
        camper.bathroom && "Bathroom",
    ].filter(Boolean);

    const handleFavoriteClick = () => {
        dispatch(toggleFavorite(camperId));
    };

    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                {imageUrl ? (
                    <img
                        className={styles.image}
                        src={imageUrl}
                        alt={camper.name}
                    />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        No image
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.name}>{camper.name}</h2>

                    <div className={styles.priceWrapper}>
                        <p className={styles.price}>
                            €{formatPrice(camper.price)}
                        </p>

                        <button
                            className={`${styles.favoriteButton} ${isFavorite ? styles.favoriteActive : ""
                                }`}
                            type="button"
                            onClick={handleFavoriteClick}
                            aria-label={
                                isFavorite
                                    ? `Remove ${camper.name} from favorites`
                                    : `Add ${camper.name} to favorites`
                            }
                        >
                            <HeartIcon
                                className={styles.heartIcon}
                                filled={isFavorite}
                            />
                        </button>
                    </div>
                </div>

                <div className={styles.meta}>
                    <span className={styles.rating}>
                        <img
                            className={styles.metaIcon}
                            src={starIcon}
                            alt=""
                            width="16"
                            height="16"
                        />

                        <span>{camper.rating ?? 0}</span>
                    </span>

                    <span className={styles.reviews}>
                        ({camper.reviews?.length ?? 0} Reviews)
                    </span>

                    <span className={styles.location}>
                        <img
                            className={styles.metaIcon}
                            src={locationIcon}
                            alt=""
                            width="16"
                            height="16"
                        />

                        <span>{camper.location}</span>
                    </span>
                </div>

                <p className={styles.description}>
                    {camper.description}
                </p>

                <ul className={styles.features}>
                    {features.map(feature => (
                        <li className={styles.feature} key={feature}>
                            {feature}
                        </li>
                    ))}
                </ul>

                <Link
                    className={styles.showMore}
                    to={`/catalog/${camper.id}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Show more
                </Link>
            </div>
        </article>
    );
}

export default CamperCard;