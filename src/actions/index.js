import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

export const FETCH_COUPONS = 'FETCH_COUPONS';
export const PUBLISH_COUPON = 'PUBLISH_COUPON';

export function fetchCoupons() {
  console.log('fetchCoupons called');
  const request = axios.get(`${ROOT_URL}/coupons`);

  return {
    type: FETCH_COUPONS,
    payload: request
  };
}

export function publishCoupon(props) {
  console.log('publishCoupon called');
  const request = axios.post(`${ROOT_URL}/coupon`, props);

  return {
    type: PUBLISH_COUPON,
    payload: request
  }
}
