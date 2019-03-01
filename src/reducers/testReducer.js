import { cloneDeep } from "lodash";

const defaultstate = {
  loading: false
};

export default (state = cloneDeep(defaultstate), action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING_CHANGE":
      return {
        loading: payload
      };
    default:
      return state;
  }
};
