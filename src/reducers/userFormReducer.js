import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
} from '../constant/index';

const initial = {
  success: '',
  error: '',
  loading: false
};
export const userFormReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_USER_ATTEMPT:
      return { ...state, loading: true };
    case CREATE_USER_SUCCESS:
      return { ...state, loading: false, success: 'success' };
    case CREATE_USER_FAIL:
      return { ...state, loading: false, error: 'ERROR' };
    default:
      return state;
  }
};
