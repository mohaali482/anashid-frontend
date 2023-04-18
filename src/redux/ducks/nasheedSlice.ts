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
  value: Array<Nasheed>;
}

const initialState: NasheedsState = {
  value: [],
};

export const nasheedsSlice = createSlice({
  name: "nasheeds",
  initialState,
  reducers: {
    addNasheed: (state, action: PayloadAction<Nasheed>) => {
      state.value.push(action.payload);
    },
    removeNasheed: (state, action: PayloadAction<number>) => {
      state.value.filter((nasheed) => nasheed.id !== action.payload);
    },
    updateNasheed: (state, action: PayloadAction<Nasheed>) => {
      state.value.map((nasheed) =>
        nasheed.id === action.payload.id ? action.payload : nasheed
      );
    },
  },
});

export const { addNasheed, removeNasheed, updateNasheed } =
  nasheedsSlice.actions;

export default nasheedsSlice.reducer;
