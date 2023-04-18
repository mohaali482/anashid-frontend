import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Nasheed {
  id: number;
  owner: string;
  name: string;
  poster: string;
  audio: string;
  created_at: Date;
  updated_at: Date;
}

interface NasheedError {
  name: Array<string>;
  poster: Array<string>;
  audio: Array<string>;
}

export interface NasheedsState {
  items: Array<Nasheed>;
  loading: boolean;
  formErrors: NasheedError | null;
  error: string | null;
}

const initialState: NasheedsState = {
  items: [],
  loading: false,
  error: null,
  formErrors: null,
};

export const nasheedsSlice = createSlice({
  name: "nasheeds",
  initialState,
  reducers: {
    addNasheed: (state, action: PayloadAction<Nasheed>) => {
      state.items.push(action.payload);
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
    fetchNasheedsSuccess: (state, action: PayloadAction<Nasheed[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchNasheedsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  addNasheed,
  removeNasheed,
  updateNasheed,
  fetchNasheeds,
  fetchNasheedsSuccess,
  fetchNasheedsError,
} = nasheedsSlice.actions;

export default nasheedsSlice.reducer;
