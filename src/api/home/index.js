import { GET_MESSAGE } from '../../redux/reducers/home/types';
import { get } from '../fetch';

export const getMessage = () => (dispatch) => dispatch(
  get(
    GET_MESSAGE.REQUEST,
    'hello',
  ),
);
