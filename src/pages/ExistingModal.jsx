import React, { Component } from "react";
import "../css/Modal.css";
import { RadioGroup } from "../pureComponents/RadioGroup";
import { EntryField } from "../pureComponents/EntryField";
import { ModalWindow } from "../pureComponents/ModalWindow";
import { WarningMessage } from "../pureComponents/WarningMessage";
import { connect } from "react-redux";
import { changeUpdateType, changeTemplateName, closeModal } from "../actions";

const options = [
  {
    value: "update-current",
    text: "Заменить запись"
  },
  {
    value: "create-new",
    text: "Создать новую запись"
  }
];

class ExistingModal extends Component {
  render() {
    return (
      <ModalWindow
        title="Создать запись"
        closeModal={this.props.closeModal}
        onClick={this.props.onClick}
        disabled={!this.props.templateName && this.props.updateType === "create-new"}
      >
        <div className="existing-modal">
          <WarningMessage>
            Запись «{this.props.text}» уже используется.
          </WarningMessage>
          <ul className="existing-modal__list">
            <RadioGroup
              items={options}
              value={this.props.updateType}
              onChange={e =>
                this.props.handleChangeUpdateType(e.target.value)
              }
            />
          </ul>
          {this.props.updateType === "create-new" && (
            <EntryField
              placeholder="Введите текст"
              text={this.props.templateName}
              onChange={e =>
                this.props.handleChangeTemplateName(e.target.value)
              }
              length={this.props.templateName.length}
              closeModal={this.props.handleClearTextarea}
              onClick={this.props.handleClearTextarea}
            />
          )}
        </div>
      </ModalWindow>
    );
  }
}

const mapStateToProps = state => ({
  updateType: state.changeExistingTemplateForm.updateType,
  templateName: state.changeExistingTemplateForm.templateName
});

const mapDispatchToProps = dispatch => ({
  handleChangeUpdateType: newValue => dispatch(changeUpdateType(newValue)),
  handleChangeTemplateName: newValue => dispatch(changeTemplateName(newValue)),
  handleClearTextarea: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExistingModal);
