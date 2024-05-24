import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./componentes/Board/Board";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>BINGO BOARD - Hernananannan</h1>
      <Board />
    </div>
  );
}

export default App;
