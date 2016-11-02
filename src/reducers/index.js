import { combineReducers } from 'redux';
import couponsReducer from './couponsReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  coupons: couponsReducer,
  form: formReducer
});

export default rootReducer;
