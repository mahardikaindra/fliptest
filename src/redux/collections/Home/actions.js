import * as types from "../types";

const setDataTransactions = (data) => ({
  type: types.SET_DATA_TRANSACTIONS,
  payload: data,
});

export function getTransactions(search) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch(`https://recruitment-test.flip.id/frontend-test`)
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            dispatch(setDataTransactions(Object.values(result)));
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const setDetailTransactions = (data) => ({
  type: types.SET_DETAIL_TRANSACTIONS,
  payload: data,
});

export function setDetailTransaction(data) {
  return dispatch => dispatch(setDetailTransactions(data));
}

export function changeFilter(index) {
  return {
    type: types.CHANGE_FILTER,
    index,
  };
}
