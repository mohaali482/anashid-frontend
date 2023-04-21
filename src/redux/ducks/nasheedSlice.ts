import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Nasheed, NasheedError, NasheedsState, Response } from "../../types";

const initialState: NasheedsState = {
  items: [],
  loading: false,
  error: null,
  formErrors: null,
  next: null,
  previous: null,
  limit: 10,
  nasheed: null,
};

export const nasheedsSlice = createSlice({
  name: "nasheeds",
  initialState,
  reducers: {
    addNasheed: (state, action: PayloadAction<FormData>) => {
      state.loading = true;
      state.formErrors = null;
    },
    addNasheedSuccess: (state, action: PayloadAction<Nasheed>) => {
      state.items.push(action.payload);
      state.loading = false;
      state.formErrors = null;
    },
    addNasheedError: (state, action: PayloadAction<NasheedError>) => {
      state.loading = false;
      state.formErrors = action.payload;
    },
    removeNasheed: (state, action: PayloadAction<number>) => {
      state.items.filter((nasheed) => nasheed.id !== action.payload);
    },
    updateNasheed: (state, action: PayloadAction<Nasheed>) => {
      state.items.map((nasheed) =>
        nasheed.id === action.payload.id ? action.payload : nasheed
      );
    },
    fetchNasheeds: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchNasheedsSuccess: (state, action: PayloadAction<Response>) => {
      state.items = action.payload.results;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.loading = false;
      state.error = null;
    },
    fetchNasheedsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.next = null;
      state.previous = null;
      state.items = [];
      state.loading = false;
    },
    fetchPageNasheeds: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    setPageLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    fetchNasheed: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchNasheedSuccess: (state, action: PayloadAction<Nasheed>) => {
      state.loading = false;
      state.error = null;
      state.nasheed = action.payload;
    },
    fetchNasheedError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.nasheed = null;
    },
  },
});

export const {
  addNasheed,
  addNasheedSuccess,
  addNasheedError,
  removeNasheed,
  updateNasheed,
  fetchNasheeds,
  fetchNasheedsSuccess,
  fetchNasheedsError,
  fetchPageNasheeds,
  setPageLimit,
  fetchNasheed,
  fetchNasheedSuccess,
  fetchNasheedError,
} = nasheedsSlice.actions;

export default nasheedsSlice.reducer;
