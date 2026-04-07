import { createSlice } from '@reduxjs/toolkit';

const habitSlice = createSlice({
  name: 'habits',
  initialState: { habits: [], filtered: [] },
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(h => h.id !== action.payload);
    },
    filterHabits: (state, action) => {
      state.filtered = state.habits.filter(h => h.category === action.payload);
    },
  },
});

export const { addHabit, removeHabit, filterHabits } = habitSlice.actions;
export default habitSlice.reducer;
