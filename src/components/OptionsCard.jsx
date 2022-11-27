import React, { useEffect } from "react";
import "../styles/styles.css";
import useFactle from "../hooks/useFactle";

const OptionsCard = ({ fact: facts }) => {
  const { currentGuess, clickHandler, deleteGuess, enterGuessHandler } =
    useFactle(facts);

  return (
    <>
      <div className="options-container">
        {facts &&
          facts.map(({ id, text, correctPosition }) => (
            <div
              style={{ minWidth: "50px", minHeight: "50px" }}
              className="card"
              onClick={(event) =>
                clickHandler(event, text, id.toString(), correctPosition)
              }
              onLoad={(event) => enterGuessHandler(event, text, id.toString())}
              key={id.toString()}
            >
              {text}
            </div>
          ))}
      </div>
      <p>The current guess is: {currentGuess}</p>
      <p onClick={() => deleteGuess()}>Backspace</p>
      <p onClick={() => enterGuessHandler()}>Enter</p>
    </>
  );
};

export default OptionsCard;
