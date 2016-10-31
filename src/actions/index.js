import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api/coupons';

export const FETCH_COUPONS = 'FETCH_COUPONS';

export function fetchCoupons() {
  console.log('fetchCoupons called');
  const request = axios.get(ROOT_URL);

  console.log('Request: ', request);
  
  return {
    type: FETCH_COUPONS,
    payload: request
  };
}
