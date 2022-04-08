import createReducer from "../../../utils/createReducer";
import * as types from "../types";

const initialState = {
  data: [],
}

export const dataTransaction = createReducer(initialState,
  {
    [types.SET_DATA_TRANSACTIONS](state, action) {
      return {
        data: action.payload,
      };
    },
  }
);
