const changeLoadingAction = value => {
  return dispatch => {
    dispatch({
      type: "LOADING_CHANGE",
      payload: value
    });
  };
};

const addAction = value => {
  return dispatch => {
    dispatch({
      type: "ADD_TODO_ACTION",
      payload: value
    });
  };
};

export { changeLoadingAction, addAction };
