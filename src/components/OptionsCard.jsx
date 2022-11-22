import React, { useEffect } from "react";
import "../styles/styles.css";
import useFactle from "../hooks/useFactle";

const OptionsCard = ({ fact }) => {
  const { currentGuess, clickHandler } = useFactle(fact);

  useEffect(() => {
    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, [clickHandler]);

  return (
    <div className="options-container">
      {fact &&
        Object.values(fact).map((fact, index) => (
          <div
            style={{ minWidth: "50px", minHeight: "50px" }}
            className="card"
            key={index}
          >
            {fact}
          </div>
        ))}
      <p>The current guess is: {currentGuess}</p>
      <p>Backspace</p>
    </div>
  );
};

export default OptionsCard;
