import { CHANGE_MODAL, CLOSE_MODAL } from "../actions/actionType";

const initialState = {
  createTemplate: {
    text: ""
  }
};

export const changeText = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL:
      return {
        ...state,
        createTemplate: {
          text: action.payload.text
        }
      };
    case CLOSE_MODAL:
      return {
        ...state,
        createTemplate: {
          text: action.payload.text
        }
      };
    default:
      return state;
  }
};

