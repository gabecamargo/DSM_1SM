import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import HabitItem from "./HabitItem";

export default function HabitList() {
  const { habits, filter } = useSelector((state: RootState) => state.habits);

  const filteredHabits =
    filter === "all"
      ? habits
      : habits.filter(h => h.category === filter);

  return (
    <ul>
      {filteredHabits.map(habit => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </ul>
  );
}
