import React from "react";
import "../css/Modal.css";
import {SaveButton} from "../pureComponents/SaveButton";

export const ModalWindow = ({ title, closeModal, children, disabled, onClick }) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <h4>{title}</h4>
        <button className="modal__button-close" onClick={closeModal} />
      </div>
      <div className="modal__entry-field">{children}</div>
      <SaveButton disabled={disabled} onClick={onClick}>
        Сохранить
      </SaveButton>
    </div>
  );
};
