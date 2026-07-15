import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  try {
    const savedFavorites = localStorage.getItem("favoriteCampers");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch {
    return [];
  }
};

const favoritesSlice = createSlice({
  name: "favorites",

  initialState: {
    items: loadFavorites(),
  },

  reducers: {
    toggleFavorite(state, action) {
      const camperId = String(action.payload);
      const index = state.items.indexOf(camperId);

      if (index === -1) {
        state.items.push(camperId);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;