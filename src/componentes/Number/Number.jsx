import React from "react";
import styles from "./Number.module.css";

const Number = ({ number, handleNumberClick }) => {
  console.log("numero ", number);
  let salio = "";
  number.salio ? (salio = "YES") : (salio = "NO");
  if (number.salio) {
    return (
      <div className={styles.cel}>
        <button className={styles.selected} onClick={handleNumberClick}>
          {number.numero}
        </button>
        {/* <span> SI</span> */}
      </div>
    );
  }
  return (
    <div className={styles.cel}>
      <button className={styles.noSelected} onClick={handleNumberClick}>
        {number.numero}
      </button>
      {/* <span> NO</span> */}
    </div>
  );
};
export default Number;
