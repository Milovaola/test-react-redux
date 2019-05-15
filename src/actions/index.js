import { CHANGE_MODAL, TOGGLE_MODAL, CLOSE_MODAL } from "./actionType";

export const changeText = text => ({
  type: CHANGE_MODAL,
  payload: {
    text
  }
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: {
    show: false,
    text: ""
  }
});

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
  payload: {
    show: false
  }
});

export const showModal = modalName => ({
  type: `SHOW_MODAL__${modalName}`,
  payload: {
    show: true,
    text: ""
  }
});

const change = fieldName => value => ({
  type: fieldName,
  payload: {
    value
  }
});

export const changeUpdateType = change("CHANGE_UPDATE_TYPE");
export const changeTemplateName = change("CHANGE_TEMPLATE_NAME");
