import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import Filter from "./components/Filter";

export default function App() {
  return (
    <div>
      <h1>Controle de Hábitos</h1>
      <HabitForm />
      <Filter />
      <HabitList />
    </div>
  );
}
