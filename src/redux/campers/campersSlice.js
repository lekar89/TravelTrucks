import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCamperById,
  fetchCampers,
} from "./campersOperations";

const initialState = {
  items: [],
  selectedCamper: null,
  total: 0,
  page: 1,
  status: "idle",
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,

  reducers: {
    resetCampers(state) {
      state.items = [];
      state.total = 0;
      state.page = 1;
      state.error = null;
    },

    clearSelectedCamper(state) {
      state.selectedCamper = null;
      state.error = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const { items, total, page } = action.payload;

        if (page === 1) {
          state.items = items;
        } else {
          const existingIds = new Set(
            state.items.map(camper => camper.id),
          );

          const newItems = items.filter(
            camper => !existingIds.has(camper.id),
          );

          state.items.push(...newItems);
        }

        state.total = total;
        state.page = page;
        state.isLoading = false;
        state.status = "succeeded";
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers, clearSelectedCamper } =
  campersSlice.actions;

export default campersSlice.reducer;