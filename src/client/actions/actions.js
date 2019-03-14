import * as types from '../constants/actionTypes';

export const actionType = () => ({
  type: types.ACTION_TYPE,
  // payload: event,
});

// redux-thunk
export const fetchSomething = data => ({
  type: types.FETCH_SOMETHING,
  payload: data,
});

export const thunkCall = (url) => {
  return (dispatch) => {
    return fetch(`/${url}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(fetchSomething(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
