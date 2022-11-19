import React from "react";
import "../styles/styles.css";

const Card = () => {
  return (
    <div className="card-container">
      {new Array(25).fill(0).map((_, index) => (
        <div className="card" key={index}>
          JOHN
        </div>
      ))}
    </div>
  );
};

export default Card;
