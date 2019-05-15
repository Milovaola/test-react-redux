import { combineReducers } from "redux";
import { modalsReducer } from "./showModal";
import { changeText } from "./changeText";
import { changeExistingTemplateForm } from "./existingTemplate";


export default combineReducers({
  showModal: modalsReducer,
  changeText,
  changeExistingTemplateForm
});
