import React from "react";
import "../css/EntryField.css";

export const EntryField = ({ text, onChange, length, placeholder }) => (
  <>
    <div className="template-form">
      <textarea
        name="template-name"
        value={text}
        rows="3"
        onChange={onChange}
        placeholder={placeholder}
      />
      <p className="template-form__counter">{length}/50</p>
    </div>
  </>
);
