import { ATTEMPT, FAIL, SUCCESS, DELETE_USER_SUCCESS } from '../constant/index';

const initial = {
  data: [],
  error: '',
  loading: false
};
export const userReducer = (state = initial, action) => {
  switch (action.type) {
    case ATTEMPT:
      return { ...state, loading: true };
    case SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FAIL:
      return { ...state, error: 'Data fetch failed', loading: false };
    case DELETE_USER_SUCCESS:
      return { ...state, alert: 'User data was deleted' };
    default:
      return state;
  }
};
