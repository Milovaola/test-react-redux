import React from "react";
import "../css/SaveButton.css";

export const SaveButton = ({ onClick, disabled, children }) => (
  <button className="save-button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
