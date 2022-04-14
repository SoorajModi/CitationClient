import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from './home/reducer';
import chicago from './chicago/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  home,
  chicago,
});

export default createRootReducer;
