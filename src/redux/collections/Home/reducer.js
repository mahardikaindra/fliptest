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
export const detailTransaction = createReducer({},
  {
    [types.SET_DETAIL_TRANSACTIONS](state, action) {
      return {
        data: action.payload,
      };
    },
  }
);
