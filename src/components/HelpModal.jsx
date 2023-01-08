import React from "react";

const HelpModal = ({ closeHelp }) => {
  return (
    <div className="modal">
      <div className="modal-scope">
        <span className="close" onClick={closeHelp}>
          close
        </span>
        <h1>How To Play</h1>
        <p>Guess the FACT in six tries.</p>
        <p>
          For each guess, rank what you think are the top 5 answers. Hit the
          enter button to submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the real ranking.
        </p>

        <div className="tiles">
          <span>7</span>
          <span className="correct-position">2</span>
          <span>9</span>
          <span>21</span>
          <span>18</span>
        </div>
        <p>The number 2 is in the ranking and in the right place.</p>
        <div className="tiles">
          <span className="wrong-position">3</span>
          <span>12</span>
          <span>31</span>
          <span>15</span>
          <span>17</span>
        </div>
        <p>The number 3 is in the ranking but in the wrong place.</p>
      </div>
    </div>
  );
};

export default HelpModal;
