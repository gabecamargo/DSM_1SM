import { useState } from "react";
import Ball from "./ball";
import "./styles.css";

const Exercise2 = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addNumber = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setNumbers((prevNumbers) => {
        const updatedNumbers = [...prevNumbers, num];
        return updatedNumbers.length > 12 ? updatedNumbers.slice(1) : updatedNumbers;
      });
      setInputValue(""); // Limpa o campo após adicionar um número
    }
  };

  const removeNumber = (num: number) => {
    setNumbers((prevNumbers) => prevNumbers.filter((n) => n !== num));
  };

  return (
    <div className="container">
      <h3>Exercício 2</h3>
      <input
        className="input"
        type="number"
        placeholder="Digite um número"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addNumber()}
      />
      <div className="ball-wrapper">
        {numbers.map((num, index) => (
          <Ball key={index} value={num} color="red" onRightClick={removeNumber} />
        ))}
      </div>
    </div>
  );
};

export default Exercise2;
