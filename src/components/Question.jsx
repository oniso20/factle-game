import React from "react";

const Question = ({ fact, theme }) => {
  return (
    <div className={`${theme}-mode`}>
      <div className="question">
        <h3>{fact && fact.prompt}</h3>
        <div className="position">
          <div>1st</div>
          <div>2nd</div>
          <div>3rd</div>
          <div>4th</div>
          <div>5th</div>
        </div>
      </div>
    </div>
  );
};

export default Question;
