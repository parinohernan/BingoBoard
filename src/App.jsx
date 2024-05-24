import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./componentes/Board/Board";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>BINGO FAMILIAR - I.G.S.M.</h2>
      <Board />
    </div>
  );
}

export default App;
