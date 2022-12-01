import React, { useEffect } from "react";
import "../styles/styles.css";
import useFactle from "../hooks/useFactle";
import Grid from "./Grid";

const OptionsCard = ({ fact: facts }) => {
  const {
    currentGuess,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    clickHandler,
    deleteGuess,
    enterGuessHandler,
  } = useFactle(facts);

  return (
    <>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <div className="options-container">
        {facts &&
          facts.map(({ id, text, correctPosition }) => {
            const color = usedKeys[text];
            return (
              <div
                className={color}
                id="card"
                key={text}
                onClick={(event) => {
                  clickHandler(event, text, id.toString(), correctPosition);
                  enterGuessHandler();
                }}
              >
                {text}
              </div>
            );
          })}
      </div>
      <div className="buttons-container">
        <button className="buttons" onClick={() => deleteGuess()}>
          Backspace
        </button>
        <button className="buttons" onClick={() => enterGuessHandler()}>
          Enter
        </button>
      </div>
    </>
  );
};

export default OptionsCard;
