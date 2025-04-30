import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { Megasena } from "./pages/Megasena";
import { LotteryProvider } from "./contexts/LotteryContext";
import styled from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: sans-serif;
  }
`;

const ThemeToggleButton = styled.button`
  position: fixed;
  bottom: 16px;
  left: 16px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #209869;
  color: white;
  cursor: pointer;
`;

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <LotteryProvider>
        <GlobalStyle />
        <Megasena />
        <ThemeToggleButton onClick={toggleTheme}>
          {dark ? "Claro" : "Escuro"}
        </ThemeToggleButton>
      </LotteryProvider>
    </ThemeProvider>
  );
}

export default App;
