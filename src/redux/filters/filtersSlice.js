import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  transmission: "",
  engine: "",
  AC: false,
  kitchen: false,
  bathroom: false,
  TV: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,

  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },

    setForm(state, action) {
      state.form = action.payload;
    },

    setTransmission(state, action) {
      state.transmission = action.payload;
    },

    setEngine(state, action) {
      state.engine = action.payload;
    },

    toggleEquipment(state, action) {
      const equipmentName = action.payload;

      state[equipmentName] = !state[equipmentName];
    },

    resetFilters() {
      return { ...initialState };
    },
  },
});

export const {
  setLocation,
  setForm,
  setTransmission,
  setEngine,
  toggleEquipment,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;