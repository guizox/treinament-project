const changeLoadingAction = value => {
  return dispatch => {
    dispatch({
      type: "LOADING_CHANGE",
      payload: value
    });
  };
};

export { changeLoadingAction };
