import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm";
import Loader from "../../components/Loader/Loader";
import Reviews from "../../components/Reviews/Reviews";
import { fetchCamperById } from "../../redux/campers/campersOperations";
import {
    clearSelectedCamper,
} from "../../redux/campers/campersSlice";
import {
    selectCampersError,
    selectCampersLoading,
    selectSelectedCamper,
} from "../../redux/campers/campersSelectors";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./CamperDetailsPage.module.css";
import locationIcon from "../../assets/icons/location.svg";
import starIcon from "../../assets/icons/star.svg";

const featureLabels = {
    transmission: "Transmission",
    engine: "Engine",
    AC: "AC",
    bathroom: "Bathroom",
    kitchen: "Kitchen",
    TV: "TV",
    radio: "Radio",
    refrigerator: "Refrigerator",
    microwave: "Microwave",
    gas: "Gas",
    water: "Water",
};

const detailLabels = {
    form: "Form",
    length: "Length",
    width: "Width",
    height: "Height",
    tank: "Tank",
    consumption: "Consumption",
};

const capitalize = value => {
    if (typeof value !== "string") {
        return value;
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
};

const getImageUrl = image => {
    if (typeof image === "string") {
        return image;
    }

    return image?.original || image?.thumb || "";
};

function CamperDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const camper = useSelector(selectSelectedCamper);
    const isLoading = useSelector(selectCampersLoading);
    const error = useSelector(selectCampersError);

    const [activeTab, setActiveTab] = useState("features");

    useEffect(() => {
        dispatch(fetchCamperById(id));

        return () => {
            dispatch(clearSelectedCamper());
        };
    }, [dispatch, id]);

    if (isLoading && !camper) {
        return (
            <main className={styles.page}>
                <Loader />
            </main>
        );
    }

    if (error && !camper) {
        return (
            <main className={styles.page}>
                <div className={styles.errorBlock}>
                    <h1>Camper not found</h1>
                    <p>{error}</p>
                </div>
            </main>
        );
    }

    if (!camper) {
        return null;
    }

    const gallery = camper.gallery || [];

    const features = Object.entries(featureLabels)
        .filter(([key]) => {
            const value = camper[key];

            return value === true || typeof value === "string";
        })
        .map(([key, label]) => {
            const value = camper[key];

            if (value === true) {
                return label;
            }

            return capitalize(value);
        });

    const details = Object.entries(detailLabels).filter(
        ([key]) =>
            camper[key] !== undefined &&
            camper[key] !== null &&
            camper[key] !== "",
    );

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <section className={styles.summary}>
                    <h1 className={styles.title}>{camper.name}</h1>

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

                        <span className={styles.reviewsCount}>
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

                    <p className={styles.price}>
                        €{formatPrice(camper.price)}
                    </p>
                </section>

                <ul className={styles.gallery}>
                    {gallery.map((image, index) => (
                        <li
                            className={styles.galleryItem}
                            key={`${camper.id}-${index}`}
                        >
                            <img
                                className={styles.galleryImage}
                                src={getImageUrl(image)}
                                alt={`${camper.name} view ${index + 1}`}
                            />
                        </li>
                    ))}
                </ul>

                <p className={styles.description}>
                    {camper.description}
                </p>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tabButton} ${activeTab === "features"
                                ? styles.activeTab
                                : ""
                            }`}
                        type="button"
                        onClick={() => setActiveTab("features")}
                    >
                        Features
                    </button>

                    <button
                        className={`${styles.tabButton} ${activeTab === "reviews"
                                ? styles.activeTab
                                : ""
                            }`}
                        type="button"
                        onClick={() => setActiveTab("reviews")}
                    >
                        Reviews
                    </button>
                </div>

                <div className={styles.contentGrid}>
                    <section className={styles.tabContent}>
                        {activeTab === "features" ? (
                            <div className={styles.featuresBlock}>
                                <ul className={styles.features}>
                                    {features.map(feature => (
                                        <li
                                            className={styles.feature}
                                            key={feature}
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div>
                                    <h2 className={styles.sectionTitle}>
                                        Vehicle details
                                    </h2>

                                    <dl className={styles.details}>
                                        {details.map(([key, label]) => (
                                            <div
                                                className={styles.detailRow}
                                                key={key}
                                            >
                                                <dt>{label}</dt>
                                                <dd>{capitalize(camper[key])}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        ) : (
                            <Reviews reviews={camper.reviews} />
                        )}
                    </section>

                    <BookingForm camperName={camper.name} />
                </div>
            </div>
        </main>
    );
}

export default CamperDetailsPage;