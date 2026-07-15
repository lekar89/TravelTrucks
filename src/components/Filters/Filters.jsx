import { useDispatch, useSelector } from "react-redux";
import {
    resetFilters,
    setEngine,
    setForm,
    setLocation,
    setTransmission,
    toggleEquipment,
} from "../../redux/filters/filtersSlice";
import { selectFilters } from "../../redux/filters/filtersSelectors";
import styles from "./Filters.module.css";
import locationIcon from "../../assets/icons/location.svg";

const equipmentOptions = [
    {
        value: "AC",
        label: "AC",
    },
    {
        value: "kitchen",
        label: "Kitchen",
    },
    {
        value: "bathroom",
        label: "Bathroom",
    },
    {
        value: "TV",
        label: "TV",
    },
];

const vehicleTypes = [
    {
        value: "panelTruck",
        label: "Van",
    },
    {
        value: "fullyIntegrated",
        label: "Fully Integrated",
    },
    {
        value: "alcove",
        label: "Alcove",
    },
];

const transmissionTypes = [
    {
        value: "automatic",
        label: "Automatic",
    },
    {
        value: "manual",
        label: "Manual",
    },
];

const engineTypes = [
    {
        value: "petrol",
        label: "Petrol",
    },
    {
        value: "diesel",
        label: "Diesel",
    },
];

function Filters({ onSearch, onReset, isLoading }) {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    const handleSubmit = event => {
        event.preventDefault();
        onSearch();
    };

    const handleReset = () => {
        dispatch(resetFilters());
        onReset();
    };

    return (
        <form className={styles.filters} onSubmit={handleSubmit}>
            <label className={styles.locationLabel}>
                Location

                <span className={styles.locationField}>

                    <img
                        className={styles.locationIcon}
                        src={locationIcon}
                        alt=""
                        width="20"
                        height="20"
                    />

                    <input
                        className={styles.locationInput}
                        type="text"
                        value={filters.location}
                        onChange={event =>
                            dispatch(setLocation(event.target.value))
                        }
                        placeholder="City"
                    />
                </span>
            </label>

            <p className={styles.filtersLabel}>Filters</p>

            <fieldset className={styles.section}>
                <legend className={styles.sectionTitle}>
                    Vehicle equipment
                </legend>

                <div className={styles.optionsGrid}>
                    {equipmentOptions.map(option => (
                        <button
                            className={`${styles.optionButton} ${filters[option.value] ? styles.activeOption : ""
                                }`}
                            key={option.value}
                            type="button"
                            onClick={() =>
                                dispatch(toggleEquipment(option.value))
                            }
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            <fieldset className={styles.section}>
                <legend className={styles.sectionTitle}>
                    Vehicle type
                </legend>

                <div className={styles.optionsGrid}>
                    {vehicleTypes.map(option => (
                        <button
                            className={`${styles.optionButton} ${filters.form === option.value
                                    ? styles.activeOption
                                    : ""
                                }`}
                            key={option.value}
                            type="button"
                            onClick={() =>
                                dispatch(
                                    setForm(
                                        filters.form === option.value
                                            ? ""
                                            : option.value,
                                    ),
                                )
                            }
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            <fieldset className={styles.section}>
                <legend className={styles.sectionTitle}>
                    Transmission
                </legend>

                <div className={styles.optionsGrid}>
                    {transmissionTypes.map(option => (
                        <button
                            className={`${styles.optionButton} ${filters.transmission === option.value
                                    ? styles.activeOption
                                    : ""
                                }`}
                            key={option.value}
                            type="button"
                            onClick={() =>
                                dispatch(
                                    setTransmission(
                                        filters.transmission === option.value
                                            ? ""
                                            : option.value,
                                    ),
                                )
                            }
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            <fieldset className={styles.section}>
                <legend className={styles.sectionTitle}>
                    Engine
                </legend>

                <div className={styles.optionsGrid}>
                    {engineTypes.map(option => (
                        <button
                            className={`${styles.optionButton} ${filters.engine === option.value
                                    ? styles.activeOption
                                    : ""
                                }`}
                            key={option.value}
                            type="button"
                            onClick={() =>
                                dispatch(
                                    setEngine(
                                        filters.engine === option.value
                                            ? ""
                                            : option.value,
                                    ),
                                )
                            }
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            <div className={styles.actions}>
                <button
                    className={styles.searchButton}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Searching..." : "Search"}
                </button>

                <button
                    className={styles.resetButton}
                    type="button"
                    onClick={handleReset}
                    disabled={isLoading}
                >
                    Reset
                </button>
            </div>
        </form>
    );
}

export default Filters;