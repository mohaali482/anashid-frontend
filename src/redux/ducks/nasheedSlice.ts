import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Nasheed,
  NasheedError,
  NasheedsState,
  Response,
} from "../../types/store";

const initialState: NasheedsState = {
  items: [],
  loading: false,
  error: null,
  formErrors: null,
  next: null,
  previous: null,
  limit: 10,
  nasheed: null,
  loadedIds: [],
  loadMoreLoading: false,
  query: "",
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
      state.loadedIds.push(action.payload.id);
    },
    addNasheedError: (state, action: PayloadAction<NasheedError>) => {
      state.loading = false;
      state.formErrors = action.payload;
    },
    removeNasheed: (state, action: PayloadAction<number>) => {
      state.items.filter((nasheed: Nasheed) => nasheed.id !== action.payload);
    },
    updateNasheed: (state, action: PayloadAction<Nasheed>) => {
      state.items.map((nasheed: Nasheed) =>
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
      state.loadedIds = state.items.map((item: Nasheed) => item.id);
    },
    fetchNasheedsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.next = null;
      state.previous = null;
      state.items = [];
      state.loading = false;
      state.loadedIds = [];
    },
    fetchPageNasheeds: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    loadMoreNasheeds: (state) => {
      state.loadMoreLoading = true;
      state.error = null;
    },
    loadMoreNasheedsSuccess: (state, action: PayloadAction<Response>) => {
      const newItems = action.payload.results.filter(
        (item: Nasheed) => !state.loadedIds.includes(item.id)
      );
      state.loadedIds.push(...state.items.map((item: Nasheed) => item.id));

      state.items.push(...newItems);
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.loadMoreLoading = false;
      state.error = null;
    },
    loadMoreNasheedsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loadMoreLoading = false;
    },
    setPageLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    fetchNasheed: (state, action: PayloadAction<number>) => {
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
    setFilterQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
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
  loadMoreNasheeds,
  loadMoreNasheedsSuccess,
  loadMoreNasheedsError,
  setFilterQuery,
} = nasheedsSlice.actions;

export default nasheedsSlice.reducer;
