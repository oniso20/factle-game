import React, { useEffect, useState } from "react";

const Question = () => {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/christmasSongs")
      .then((res) => res.json())
      .then((data) => {
        const factData = data;
        console.log(factData);
        setFact(factData);
      });
  }, [setFact]);

  return (
    <div className="question">
      <h3>The question for today is: {fact.prompt}</h3>
    </div>
  );
};

export default Question;
