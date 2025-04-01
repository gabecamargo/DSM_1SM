import React from "react";
import { useLetterCtx } from "../context/LetterCtx";
import Ball from "./Ball";
import "../styles.css";

const Display: React.FC = () => {
  const { name } = useLetterCtx();
  return (
    <div className="display-container">
      {name ? (
        name.split("").map((char, index) => <Ball key={index} letter={char} />)
      ) : (
        <p className="no-input">Sem entrada</p>
      )}
    </div>
  );
};

export default Display;