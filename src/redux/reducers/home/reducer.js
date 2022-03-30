import { GET_MESSAGE } from './types';

const initialState = {
  message: '',
  status: 'PENDING',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_MESSAGE.PENDING:
      return {
        ...state,
        status: 'PENDING',
      };
    case GET_MESSAGE.REJECTED:
      return {
        ...state,
        status: 'FAILED',
      };
    case GET_MESSAGE.FULFILLED:
      return {
        ...state,
        status: 'READY',
        message: action.payload.message,
      };
    default:
      return state;
  }
}
