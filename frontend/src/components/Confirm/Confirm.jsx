import React from "react";
import "./Confirm.scss";

const Confirm = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirm-box">
      <div className="confirm-message">{message}</div>
      <div className="confirm-buttons">
        <button className="cancel" onClick={() => onCancel()}>
          No
        </button>
        <button className="confirm" onClick={() => onConfirm()}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default Confirm;
