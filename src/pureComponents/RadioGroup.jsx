import React from "react";

export const RadioGroup = ({ items, onChange }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <label className="existing-modal__list__label">
            <input
              type="radio"
              name="template"
              value={item.value}
              defaultChecked={index === 0}
              onChange={onChange}
            />
            {item.text}
          </label>
        </li>
      ))}
    </>
  );
};
