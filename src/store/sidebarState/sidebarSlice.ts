import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.value = true;
    },
    hideSidebar: (state) => {
      state.value = false;
    },
    toggleSidebar: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showSidebar, hideSidebar, toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
