import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit } from "../../types/Habit";

interface HabitState {
  habits: Habit[];
  filter: string;
}

const initialState: HabitState = {
  habits: [],
  filter: "all",
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload);
    },
    removeHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(h => h.id !== action.payload);
    },
    toggleHabit: (state, action: PayloadAction<string>) => {
      const habit = state.habits.find(h => h.id === action.payload);
      if (habit) habit.completed = !habit.completed;
    },
    editHabit: (state, action: PayloadAction<Habit>) => {
      const index = state.habits.findIndex(h => h.id === action.payload.id);
      if (index !== -1) state.habits[index] = action.payload;
    },
    clearCompleted: (state) => {
      state.habits = state.habits.filter(h => !h.completed);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    }
  }
});

export const {
  addHabit,
  removeHabit,
  toggleHabit,
  editHabit,
  clearCompleted,
  setFilter
} = habitSlice.actions;

export default habitSlice.reducer;
