import React from "react";

const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="rows past">
        {guess.map((selectedFact, idx) => (
          <div key={idx} className={selectedFact.color}>
            {selectedFact.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let facts = currentGuess.split(",");

    return (
      <div className="rows current">
        {facts.map((fact, idx) => (
          <div
            style={{ height: "70px", lineHeight: "70px" }}
            key={idx}
            className="filled"
          >
            {fact}
          </div>
        ))}
        {[...Array(5 - facts.length)].map((_, idx) => (
          <div key={idx}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="rows">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
