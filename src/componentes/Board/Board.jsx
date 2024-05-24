import React, { useState, useEffect } from "react";
import styles from "./Board.module.css";
import Number from "../Number/Number";

const Board = () => {
  const cantidadDeNumeros = 100; // Ajusta la cantidad de números según sea necesario
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const numerosAux = [];
    for (let i = 0; i < cantidadDeNumeros; i++) {
      numerosAux.push({ numero: i, salio: false });
    }
    setNumbers(numerosAux);
  }, [cantidadDeNumeros]);

  const handleNumberClick = (n) => {
    const updatedNumbers = numbers.map((num) =>
      num.numero === n.numero ? { ...num, salio: !num.salio } : num
    );
    setNumbers(updatedNumbers);
  };

  // Divide los números en filas de 10
  const boardLines = [];
  for (let i = 0; i < numbers.length; i += 10) {
    boardLines.push(numbers.slice(i, i + 10));
  }

  return (
    <div className={styles.page}>
      <div className={styles.bingoBoard}>
        {boardLines.map((line, lineIndex) => (
          <div key={lineIndex} className={styles.line}>
            {line.map((n, index) => (
              <Number
                key={index}
                number={n}
                handleNumberClick={() => handleNumberClick(n)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
