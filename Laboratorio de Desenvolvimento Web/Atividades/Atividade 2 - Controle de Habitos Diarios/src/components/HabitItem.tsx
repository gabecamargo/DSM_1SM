import { useDispatch } from "react-redux";
import { toggleHabit, removeHabit } from "../redux/slices/habitSlice";
import { Habit } from "../types/Habit";

export default function HabitItem({ habit }: { habit: Habit }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span style={{ textDecoration: habit.completed ? "line-through" : "" }}>
        {habit.name} ({habit.category})
      </span>

      <button onClick={() => dispatch(toggleHabit(habit.id))}>✔</button>
      <button onClick={() => dispatch(removeHabit(habit.id))}>❌</button>
    </li>
  );
}
