import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/slices/habitSlice";
import { v4 as uuidv4 } from "uuid";

export default function HabitForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    dispatch(addHabit({
      id: uuidv4(),
      name,
      category,
      completed: false
    }));

    setName("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categoria" />
      <button type="submit">Adicionar</button>
    </form>
  );
}
