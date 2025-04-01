import React from "react";
import { useLetterCtx } from "../context/LetterCtx";
import "../styles.css";

const Input: React.FC = () => {
  const { setName } = useLetterCtx();
  return (
    <input
      type="text"
      className="input"
      placeholder="Entre com o nome"
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default Input;