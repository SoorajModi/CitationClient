import { SET_CITATION, SET_SOURCE } from '../../redux/reducers/chicago/types';

export const setCitation = (citation) => (dispatch) => dispatch(
  {
    type: SET_CITATION,
    payload: citation,
  },
);

export const setSource = (source) => (dispatch) => dispatch(
  {
    type: SET_SOURCE,
    payload: source,
  },
);
