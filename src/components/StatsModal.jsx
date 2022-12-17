import React from "react";

const StatsModal = ({ closeStats }) => {
  return (
    <div className="modal">
      <div className="modal-scope">
        <span className="close" onClick={closeStats}>
          close
        </span>
        <h1>See Stats</h1>
        <p>In development...</p>
      </div>
    </div>
  );
};

export default StatsModal;
