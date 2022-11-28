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

  useEffect(() => {
    console.log(isCorrect, turn, usedKeys);
  }, [currentGuess, guesses, isCorrect, turn]);

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
                onClick={function (event) {
                  clickHandler(event, text, id.toString(), correctPosition);
                  enterGuessHandler();
                }}
              >
                {text}
              </div>
            );
          })}
      </div>
      <p>The current guess is: {currentGuess}</p>
      <p onClick={() => deleteGuess()}>Backspace</p>
      <p onClick={() => enterGuessHandler()}>Enter</p>
    </>
  );
};

export default OptionsCard;
