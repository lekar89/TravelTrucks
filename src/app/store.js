import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../redux/campers/campersSlice";
import favoritesReducer from "../redux/favorites/favoritesSlice";
import filtersReducer from "../redux/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});

store.subscribe(() => {
  try {
    const favoriteIds = store.getState().favorites.items;

    localStorage.setItem(
      "favoriteCampers",
      JSON.stringify(favoriteIds),
    );
  } catch {
    // Застосунок працюватиме навіть без доступу до localStorage.
  }
});