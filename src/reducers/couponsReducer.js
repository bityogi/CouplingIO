import { FETCH_COUPONS } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COUPONS:
      return [ action.payload.data ];
  }

  return state;
}
