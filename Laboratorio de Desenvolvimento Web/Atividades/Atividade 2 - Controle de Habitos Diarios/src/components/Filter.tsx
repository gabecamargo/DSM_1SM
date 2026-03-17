import { useDispatch } from "react-redux";
import { setFilter, clearCompleted } from "../redux/slices/habitSlice";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter("all"))}>Todos</button>
      <button onClick={() => dispatch(setFilter("saude"))}>Saúde</button>
      <button onClick={() => dispatch(setFilter("estudo"))}>Estudo</button>

      <button onClick={() => dispatch(clearCompleted())}>
        Limpar Concluídos
      </button>
    </div>
  );
}
