import React, { useEffect } from "react";
import "../styles/styles.css";
import useFactle from "../hooks/useFactle";
import Grid from "./Grid";
import EndModal from "./EndModal";
import { useState } from "react";

const OptionsCard = ({ fact: facts, theme }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    currentGuess,
    guesses,
    solution,
    isCorrect,
    turn,
    usedKeys,
    clickHandler,
    deleteGuess,
    enterGuessHandler,
  } = useFactle(facts);

  useEffect(() => {
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
    }
  }, [isCorrect, turn]);

  const closeHandler = () => {
    setShowModal(false);
  };

  return (
    <div className={`${theme}-mode`}>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <div className="options-container">
        {facts &&
          facts.options.map(({ id, text, correctPosition }) => {
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
      {showModal && (
        <EndModal
          close={closeHandler}
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
        />
      )}
    </div>
  );
};

export default OptionsCard;
