import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCamperById, getCampers } from "../../services/campersApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      const params = {
        page,
        limit,
      };

      if (filters.location?.trim()) {
        params.location = filters.location.trim();
      }

      if (filters.form) {
        params.form = filters.form;
      }

      if (filters.transmission) {
        params.transmission = filters.transmission;
      }

      if (filters.engine) {
        params.engine = filters.engine;
      }

      if (filters.AC) {
        params.AC = true;
      }

      if (filters.kitchen) {
        params.kitchen = true;
      }

      if (filters.bathroom) {
        params.bathroom = true;
      }

      if (filters.TV) {
        params.TV = true;
      }

      const data = await getCampers(params);

      return {
        items: data.items ?? data,
        total: data.total ?? data.length,
        page,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load campers",
      );
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      return await getCamperById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load camper",
      );
    }
  },
);