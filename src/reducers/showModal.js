const initialState = {
  createTemplate: {
    show: false
  },
  editExistingTemplate: {
    show: false
  }
};

const updateObject = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues)
};

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

const showModalCreateTemplate = (modalState, action) => {
  return updateObject(modalState, {
    createTemplate: {
      show: action.payload.show
    }
  });
};
const closeModal = (modalState, action) => {
  return updateObject(modalState, {
    createTemplate: {
      show: action.payload.show
    },
    editExistingTemplate: {
      show: action.payload.show
    }
  });
};

const toggleModal = (modalState, action) => {
  return updateObject(modalState, {
    createTemplate: { show: action.payload.show },
    editExistingTemplate: { show: !action.payload.show }
  });
};

export const modalsReducer = createReducer(initialState, {
  SHOW_MODAL__createTemplate: showModalCreateTemplate,
  CLOSE_MODAL: closeModal,
  TOGGLE_MODAL: toggleModal
});

