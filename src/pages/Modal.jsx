import React from "react";
import "../css/Modal.css";
import { EntryField } from "../pureComponents/EntryField";
import { ModalWindow } from "../pureComponents/ModalWindow";

export const Modal = ({
  closeModal,
  onClick,
  text,
  length,
  onChange,
  disabled
}) => {
  return (
    <ModalWindow
      title="Создать запись"
      closeModal={closeModal}
      onClick={onClick}
      disabled={disabled}
    >
      <EntryField
        onChange={evt => onChange(evt)}
        value={text}
        length={length}
      />
    </ModalWindow>
  );
};
