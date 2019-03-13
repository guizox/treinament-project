import { cloneDeep } from "lodash";

const defaultstate = {
  loading: false,
  todos: []
};

export default (state = cloneDeep(defaultstate), action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING_CHANGE":
      return {
        ...state,
        loading: payload
      };
    case "ADD_TODO_ACTION":
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    default:
      return state;
  }
};
