import React, { Component } from 'react';
import { connect } from 'react-redux';
import CouponItem from './couponItem';

class CouponList extends Component {

  renderCoupons() {
    return this.props.coupons.map((coupon) => {
      return (
        return <CouponItem key={coupon.id} coupon={coupon} />
      )
    })
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderCoupons()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { coupons: state.coupons };
}

export default connect(mapStateToProps)(CouponList);
