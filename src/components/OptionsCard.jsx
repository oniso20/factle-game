import React, { useEffect } from "react";
import "../styles/styles.css";
import useFactle from "../hooks/useFactle";

const OptionsCard = ({ fact }) => {
  const { currentGuess, clickHandler } = useFactle({});

  useEffect(() => {
    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, [clickHandler]);

  return (
    <div className="options-container">
      {fact &&
        Object.values(fact).map((fact, index) => (
          <div className="card" key={index}>
            {fact}
          </div>
        ))}
    </div>
  );
};

export default OptionsCard;
