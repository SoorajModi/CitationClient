import { SET_CITATION, SET_SOURCE } from './types';

const initialState = {
  citation: {},
  source: 'Book',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CITATION:
      return {
        ...state,
        citation: action.payload,
      };
    case SET_SOURCE:
      return {
        ...state,
        source: action.payload,
      };
    default:
      return state;
  }
}
