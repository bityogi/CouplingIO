import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CouponList from './components/couponList';
import PublishCoupon from './components/coupon_new';
import CouponDetail from './components/coupon_detail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CouponList} />
    <Route path="coupon/new" component={PublishCoupon} />
    <Route path="coupon/:id" component={CouponDetail} />
  </Route>
);
