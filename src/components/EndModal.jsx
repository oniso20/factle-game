import React from "react";

const EndModal = ({ isCorrect, turn, solution, close }) => {
  return (
    <div className="modal">
      {isCorrect && (
        <div className="modal-scope">
          <span className="close" onClick={close}>
            close
          </span>
          <h1>You Win!</h1>
          <p className="solution">{solution?.join(", ")}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div className="modal-scope">
          <span className="close" onClick={close}>
            close
          </span>
          <h1>Nevermind</h1>
          <p className="solution">{solution?.join(", ")}</p>
          <p>Better luck next time :)</p>
        </div>
      )}
    </div>
  );
};

export default EndModal;
