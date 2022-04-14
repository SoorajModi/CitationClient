import { SET_CITATION } from './types';

const initialState = {
  citation: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CITATION:
      return {
        ...state,
        citation: action.payload,
      };
    default:
      return state;
  }
}
