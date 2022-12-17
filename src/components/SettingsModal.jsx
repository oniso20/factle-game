import React from "react";

const SettingsModal = ({ closeSettings }) => {
  return (
    <div className="modal">
      <div className="modal-scope">
        <span className="close" onClick={closeSettings}>
          close
        </span>
        <p>In development...</p>
      </div>
    </div>
  );
};

export default SettingsModal;
