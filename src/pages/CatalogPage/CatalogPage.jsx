import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters";
import Loader from "../../components/Loader/Loader";
import { fetchCampers } from "../../redux/campers/campersOperations";
import { resetCampers } from "../../redux/campers/campersSlice";
import {
  selectCampers,
  selectCampersError,
  selectCampersLoading,
  selectCampersPage,
  selectCampersStatus,
  selectCampersTotal,
} from "../../redux/campers/campersSelectors";
import { selectFilters } from "../../redux/filters/filtersSelectors";
import styles from "./CatalogPage.module.css";
import CamperList from "../../components/CamperList/CamperList";

const ITEMS_PER_PAGE = 4;

function CatalogPage() {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);
  const total = useSelector(selectCampersTotal);
  const page = useSelector(selectCampersPage);
  const status = useSelector(selectCampersStatus);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (status === "idle") {
      dispatch(
        fetchCampers({
          page: 1,
          limit: ITEMS_PER_PAGE,
          filters: {},
        }),
      );
    }
  }, [dispatch, status]);

  const handleSearch = () => {
    dispatch(resetCampers());

    dispatch(
      fetchCampers({
        page: 1,
        limit: ITEMS_PER_PAGE,
        filters,
      }),
    );
  };

  const handleReset = () => {
    dispatch(resetCampers());

    dispatch(
      fetchCampers({
        page: 1,
        limit: ITEMS_PER_PAGE,
        filters: {},
      }),
    );
  };

  const handleLoadMore = () => {
    dispatch(
      fetchCampers({
        page: page + 1,
        limit: ITEMS_PER_PAGE,
        filters,
      }),
    );
  };

  const hasMoreCampers = campers.length < total;

  return (
    <main className={styles.page}>
      <h1 className={styles.visuallyHidden}>Camper catalog</h1>

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Filters
            onSearch={handleSearch}
            onReset={handleReset}
            isLoading={isLoading}
          />
        </aside>

        <section className={styles.results}>
          {isLoading && campers.length === 0 && <Loader />}

          {error && <p className={styles.error}>{error}</p>}

          {!isLoading &&
            !error &&
            status === "succeeded" &&
            campers.length === 0 && (
              <div className={styles.empty}>
                <h2>No campers found</h2>

                <p>
                  Try changing the selected filters or reset
                  them to view all campers.
                </p>

                <button
                  className={styles.emptyButton}
                  type="button"
                  onClick={handleReset}
                >
                  View all campers
                </button>
              </div>
            )}

            <CamperList campers={campers} />

          {campers.length > 0 && hasMoreCampers && (
            <button
              className={styles.loadMore}
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Load more"}
            </button>
          )}
        </section>
      </div>
    </main>
  );
}

export default CatalogPage;