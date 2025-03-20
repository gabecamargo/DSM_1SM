import { useState } from "react";
import Ball from "./ball";
import "./styles.css";

const Exercise1 = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [count, setCount] = useState<string>("");

  const generateNumbers = () => {
    let numCount = Math.min(12, parseInt(count) || 0);
    const randomNumbers = Array.from({ length: numCount }, () =>
      Math.floor(Math.random() * 100)
    ).sort((a, b) => a - b);
    setNumbers(randomNumbers);
  };

  return (
    <div className="container">
      <h3>Exercício 1</h3>
      <input
        className="input"
        type="number"
        placeholder="Quantidade de números"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        onBlur={generateNumbers}
      />
      <div className="ball-wrapper">
        {numbers.map((num, index) => (
          <Ball key={index} value={num} />
        ))}
      </div>
    </div>
  );
};

export default Exercise1;
