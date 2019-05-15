import React, { Component } from "react";
import "./css/App.css";
import { Modal } from "./pages/Modal";
import ExistingModal from "./pages/ExistingModal";
import { connect } from "react-redux";
import {
  showModal,
  closeModal,
  toggleModal,
  changeText
} from "./actions/index";

class App extends Component {
  render() {
    return (
      <>
        <button
          className="show-modal"
          onClick={() => this.props.handleShowModal("createTemplate")}
        >
          Создать запись
        </button>
        {this.props.createTemplate && (
          <Modal
            closeModal={() => this.props.handleCloseModal("createTemplate")}
            value={this.props.createText}
            onClick={this.props.handleToggleModal}
            onChange={event => this.props.handleChangeText(event.target.value)}
            length={this.props.createText.length}
            disabled={!this.props.createText}
          />
        )}
        {this.props.editExistingTemplate && (
          <ExistingModal
            closeModal={this.props.handleCloseModal}
            onClick={this.props.handleCloseModal}
            text={this.props.createText}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    createTemplate: state.showModal.createTemplate.show,
    createText: state.changeText.createTemplate.text,
    editExistingTemplate: state.showModal.editExistingTemplate.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleShowModal: modalName => dispatch(showModal(modalName)),
    handleCloseModal: () => dispatch(closeModal()),
    handleToggleModal: () => dispatch(toggleModal()),
    handleChangeText: event => dispatch(changeText(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
