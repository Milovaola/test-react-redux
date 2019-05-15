import { CLOSE_MODAL } from "../actions/actionType";

const initialState = {
  updateType: "update-current",
  templateName: ""
};

export const changeExistingTemplateForm = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_UPDATE_TYPE":
      return Object.assign({}, state, {
        updateType: action.payload.value
      });
    case "CHANGE_TEMPLATE_NAME":
      return Object.assign({}, state, {
        templateName: action.payload.value
      });
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        updateType: "update-current",
        templateName: ""
      });
    default:
      return state;
  }
};
