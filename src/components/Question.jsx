import React, { useEffect, useState } from "react";

const Question = () => {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/christmasSongs")
      .then((res) => res.json())
      .then((data) => {
        const factData = data;
        setFact(factData);
      });
  }, [setFact]);

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
