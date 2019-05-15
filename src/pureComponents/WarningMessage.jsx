import React from "react";
import "../css/WarningMessage.css";

export const WarningMessage = ({children}) => {
  return (
    <div className="warning">
      <div className="warning__icon" />
      <p>{children}</p>
    </div>
  );
}