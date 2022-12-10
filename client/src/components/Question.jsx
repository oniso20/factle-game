import React, { useEffect, useState } from "react";

const Question = ({ fact }) => {
  return (
    <>
      <div className="question">
        <h3>The question for today is: {fact && fact.prompt}</h3>
        <div className="position">
          <div>1st</div>
          <div>2nd</div>
          <div>3rd</div>
          <div>4th</div>
          <div>5th</div>
        </div>
      </div>
    </>
  );
};

export default Question;
