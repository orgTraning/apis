import axios from 'axios';

import {
  ATTEMPT,
  FAIL,
  SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  CREATE_USER_ATTEMPT,
  EDIT_USER_SUCCESS,
  EDIT_USER_ATTEMPT,
  EDIT_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from '../constant/index';

export const getUser = () => dispatch => {
  const api = 'https://jsonplaceholder.typicode.com/users';
  dispatch({ type: ATTEMPT });
  axios(api)
    .then(({ data }) => {
      dispatch({
        type: SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: FAIL
      });
    });
};

export const postUser = user => dispatch => {
  const api = `https://jsonplaceholder.typicode.com/posts`;
  dispatch({ type: CREATE_USER_ATTEMPT });
  axios
    .post(api, user)
    .then(({ data }) => {
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_USER_FAIL
      });
    });
};

export const editUser = (user, id) => dispatch => {
  const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
  dispatch({ type: EDIT_USER_ATTEMPT });
  axios
    .put(api, user)
    .then(({ data }) => {
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: EDIT_USER_FAIL
      });
    });
};

export const deleteUser = id => dispatch => {
  const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
  axios
    .delete(api)
    .then(() => {
      dispatch({ type: DELETE_USER_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: DELETE_USER_FAIL });
    });
};
