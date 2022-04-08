import * as types from "../types";

const setDataTransactions = (data) => ({
  type: types.SET_DATA_TRANSACTIONS,
  payload: data,
});

export function getTransactions() {
  return dispatch => {
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
