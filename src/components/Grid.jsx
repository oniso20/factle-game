import React from "react";
import Row from "./Row";

const Grid = ({ guesses, currentGuess, turn }) => {
  return (
    <div className="grid">
      {guesses.map((guess, idx) => {
        if (turn === idx) {
          return <Row key={idx} currentGuess={currentGuess} />;
        }
        return <Row key={idx} guess={guess} />;
      })}
    </div>
  );
};

export default Grid;
