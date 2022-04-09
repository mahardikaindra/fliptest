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

const filterState = {
  index: 0,
  data : [
    { id: 1, name: `urutkan`.toUpperCase(), active: true },
    { id: 2, name: `Nama A-Z`, active: false },
    { id: 3, name: `Nama Z-A`, active: false },
    { id: 4, name: `Tanggal Terbaru`, active: false },
    { id: 5, name: `Tanggal Terlama`, active: false },
  ]
}

export const filterView = createReducer(filterState, {
  [types.CHANGE_FILTER](state, action) {
    return {...state, index: action.index};
  },
});
