import createReducer from "../../../utils/createReducer";
import * as types from "../types";

export const dataTransaction = createReducer(
  {},
  {
    [types.SET_DATA_TRANSACTIONS](state, action) {
      return {
        data: action.payload,
      };
    },
  }
);
