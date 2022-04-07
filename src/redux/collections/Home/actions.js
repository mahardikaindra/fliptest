import * as types from "../types";

const setDataTransactions = (data) => ({
  type: types.SET_DATA_TRANSACTIONS,
  payload: data,
});

export function getTransactions() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch.get(`https://recruitment-test.flip.id/frontend-test`)
        .then((response) => {
          console.log(response);
          // if (response.status === 200) {
          //   dispatch(setDataTransactions(response.data?.data));
          //   resolve(response.data?.data);
          // } else {
          //   resolve({});
          // }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
