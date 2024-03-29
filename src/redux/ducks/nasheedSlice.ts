import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  Nasheed,
  NasheedError,
  NasheedsState,
  Response,
} from "../../types/nasheed-store";

const initialState: NasheedsState = {
  items: [],
  loading: false,
  error: null,
  formErrors: {},
  next: null,
  previous: null,
  limit: 10,
  nasheed: null,
  loadedIds: [],
  loadMoreLoading: false,
  query: "",
  currentPlaying: null,
  currentPlayingQueue: [],
  currentPlayingPaused: false,
  message: null,
};

export interface NasheedUpdatePayload {
  formData: FormData;
  id: number;
}

export const nasheedsSlice = createSlice({
  name: "nasheeds",
  initialState,
  reducers: {
    addNasheed: (state, action: PayloadAction<FormData>) => {
      state.loading = true;
      state.formErrors = {};
    },
    addNasheedSuccess: (state, action: PayloadAction<Nasheed>) => {
      state.items.push(action.payload);
      state.loading = false;
      state.formErrors = {};
      state.loadedIds.push(action.payload.id);
      state.message = "Added successfully";
    },
    addNasheedError: (state, action: PayloadAction<NasheedError>) => {
      state.loading = false;
      state.formErrors = action.payload;
    },
    removeNasheed: (state, action: PayloadAction<number>) => {},
    removeNasheedSuccess: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (nasheed: Nasheed) => nasheed.id !== action.payload
      );
      state.message = "Removed successfully";
    },
    updateNasheed: (state, action: PayloadAction<NasheedUpdatePayload>) => {},
    updateNasheedSuccess: (state, action: PayloadAction<Nasheed>) => {
      state.items.map((nasheed: Nasheed) =>
        nasheed.id === action.payload.id ? action.payload : nasheed
      );
      state.loading = false;
      state.formErrors = {};
      state.message = "Updated successfully";
      state.nasheed = action.payload;
    },
    updateNasheedError: (state, action: PayloadAction<NasheedError>) => {
      state.loading = false;
      state.formErrors = action.payload;
    },
    fetchNasheeds: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMyNasheeds: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSavedNasheeds: (state) => {
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
    setCurrentPlaying: (state, action: PayloadAction<Nasheed | null>) => {
      if (action.payload === null) {
        state.currentPlayingQueue = [];
      }
      state.currentPlaying = action.payload;
      state.currentPlayingPaused = false;
    },
    pushToPlayerQueue: (state, action: PayloadAction<Nasheed>) => {
      if (state.currentPlaying === null) {
        state.currentPlaying = action.payload;
      } else {
        state.currentPlayingQueue.push(action.payload);
        state.message = "Added successfully";
      }
    },
    popFromPlayerQueue: (state) => {
      state.currentPlayingQueue.shift();
    },
    removeFromPlayerQueue: (state, action: PayloadAction<number>) => {
      state.currentPlayingQueue = state.currentPlayingQueue.filter(
        (_, index) => index !== action.payload
      );
      state.message = "Removed Successfully";
    },
    clearPlayerQueue: (state) => {
      state.currentPlayingQueue = [];
      state.message = "Cleared Successfully";
    },
    pauseCurrentPlaying: (state, action: PayloadAction<boolean>) => {
      state.currentPlayingPaused = action.payload;
    },
    saveNasheedRequest: (state, action: PayloadAction<number>) => {
      state.error = null;
    },
    saveNasheedError: (state, action) => {
      state.error = action.payload;
    },
    saveNasheedSuccess: (state, action: PayloadAction<Nasheed>) => {
      state.error = null;
      const nasheed = state.items.find(
        (nasheed) => nasheed.id === action.payload.id
      );
      nasheed!.saved_id = action.payload.saved_id;
      nasheed!.saved = action.payload.saved;
      if (state.nasheed?.id === action.payload.id) {
        state.nasheed.saved = true;
        state.nasheed.saved_id = action.payload.saved_id;
      }
      if (state.currentPlaying?.id === action.payload.id) {
        state.currentPlaying.saved = true;
        state.currentPlaying.saved_id = action.payload.saved_id;
      }
      state.message = "Saved successfully";
    },
    removeSavedNasheedRequest: (state, action: PayloadAction<number>) => {
      state.error = null;
    },
    removeSavedNasheedError: (state, action) => {
      state.error = action.payload;
    },
    removeSavedNasheedSuccess: (state, action: PayloadAction<number>) => {
      state.error = null;
      state.message = "Removed successfully";
      const nasheed = state.items.find(
        (nasheed) => nasheed.saved_id === action.payload
      );
      if (nasheed) {
        nasheed.saved = false;
        nasheed.saved_id = undefined;
      }
      if (state.nasheed?.saved_id === action.payload) {
        state.nasheed.saved = false;
        state.nasheed.saved_id = undefined;
      }
      if (state.currentPlaying?.saved_id === action.payload) {
        state.currentPlaying.saved = false;
        state.currentPlaying.saved_id = undefined;
      }
    },
    clearMessage: (state) => {
      state.message = null;
    },
    resetErrors: (state) => {
      state.formErrors = {};
    },
  },
});

export const {
  addNasheed,
  addNasheedSuccess,
  addNasheedError,
  removeNasheed,
  removeNasheedSuccess,

  updateNasheed,
  updateNasheedError,
  updateNasheedSuccess,

  fetchNasheeds,
  fetchNasheedsSuccess,
  fetchNasheedsError,

  fetchMyNasheeds,

  fetchSavedNasheeds,

  fetchPageNasheeds,

  setPageLimit,

  fetchNasheed,
  fetchNasheedSuccess,
  fetchNasheedError,

  loadMoreNasheeds,
  loadMoreNasheedsSuccess,
  loadMoreNasheedsError,

  setFilterQuery,
  setCurrentPlaying,
  pauseCurrentPlaying,
  popFromPlayerQueue,
  pushToPlayerQueue,
  removeFromPlayerQueue,
  clearPlayerQueue,

  saveNasheedRequest,
  saveNasheedSuccess,
  saveNasheedError,

  removeSavedNasheedRequest,
  removeSavedNasheedSuccess,
  removeSavedNasheedError,

  clearMessage,
  resetErrors,
} = nasheedsSlice.actions;

export default nasheedsSlice.reducer;
