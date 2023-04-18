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

export interface NasheedsState {
  items: Array<Nasheed>;
}

const initialState: NasheedsState = {
  items: [],
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
  },
});

export const { addNasheed, removeNasheed, updateNasheed } =
  nasheedsSlice.actions;

export default nasheedsSlice.reducer;
