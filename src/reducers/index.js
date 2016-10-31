import { combineReducers } from 'redux';
import couponsReducer from './couponsReducer';

const rootReducer = combineReducers({
  coupons: couponsReducer
});

export default rootReducer;
