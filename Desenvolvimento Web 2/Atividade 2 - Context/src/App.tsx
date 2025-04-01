import React, { useState } from "react";
import { LetterCtx } from "./context/LetterCtx";
import Input from "./components/Input";
import Display from "./components/Display";
import "./styles.css";

const Exercise1: React.FC = () => {
  const [name, setName] = useState("");
  return (
    <LetterCtx.Provider value={{ name, setName }}>
      <div className="app-container">
        <Input />
        <Display />
      </div>
    </LetterCtx.Provider>
  );
};

export default Exercise1;