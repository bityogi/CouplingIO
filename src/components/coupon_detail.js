import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class CouponDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <h3>Coupon Detail...</h3>
      </div>
    );
  }
}

export default CouponDetail;
