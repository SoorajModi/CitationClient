import { SET_CITATION } from '../../redux/reducers/chicago/types';

export const setCitation = (citation) => (dispatch) => dispatch(
  {
    type: SET_CITATION,
    payload: citation,
  },
);
