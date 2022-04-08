import createReducer from "../../../utils/createReducer";
import * as types from "../types";

const initialState = {
  loadingProgress: false,
}

export const dataComponent = createReducer(initialState,
  {
    [types.SET_LOADING_PROGRESS](state, action) {
      return {
        loadingProgress: action.payload,
      };
    },
  }
);
