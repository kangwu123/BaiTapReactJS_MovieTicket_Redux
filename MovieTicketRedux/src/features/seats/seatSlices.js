import { createSlice } from "@reduxjs/toolkit";
import seatData from "../../data/danhSachGhe.json";

const disabledSeats = []
seatData.forEach(row => {
  if (!row.hang) return
  row.danhSachGhe.forEach(g => {
    if (g.daDat) disabledSeats.push(g.soGhe)
  })
})

const initialState = {
  selected: [],
  disabled: disabledSeats,
  data: seatData,
};

const seatSlices = createSlice({
  name: "seats",
  initialState,
  reducers: {
    toggleSeat(state, action) {
      const seat = action.payload;
      if (state.disabled.includes(seat)) return;
      if (state.selected.includes(seat)) {
        state.selected = state.selected.filter((s) => s !== seat);
      } else state.selected.push(seat);
    },
    clearSection(state) { state.selected = [] },
    markBooked(state) {
      state.disabled = [...new Set([...state.disabled, ...state.selected])]
      state.selected = []
    }
  }
})

export const { toggleSeat, clearSection, markBooked } = seatSlices.actions
export default seatSlices.reducer