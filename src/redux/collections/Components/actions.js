import * as types from "../types";

const setLoading = (value) => ({
  type: types.SET_LOADING_PROGRESS,
  payload: value,
});

export function isLoading(value) {
  return dispatch => dispatch(setLoading(value));
}
