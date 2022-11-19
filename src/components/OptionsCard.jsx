import React from "react";
import "../styles/styles.css";
import useFactle from "../hooks/useFactle";

const OptionsCard = ({ fact }) => {
  const { currentGuess, clickHandler } = useFactle({});
  console.log(fact);

  // const newFacts = Object.values(fact);
  // console.log(newFacts);
  // newFactOption = Object.entries(newFactOption);
  // console.log(newFactOption);
  // console.log(typeof newFactOption);

  // const entries = Object.entries(fact);
  // console.log(entries);
  return (
    <div className="card-container">
      {!currentGuess &&
        Object.values(fact).map((fact, index) => (
          <div className="card" key={index}>
            {fact}
          </div>
        ))}
    </div>
  );
};

export default OptionsCard;
