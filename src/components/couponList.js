import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CouponItem from './couponItem';

class CouponList extends Component {

  renderCoupons() {
    if (this.props.coupons[0] !== undefined) {
      const coupons = this.props.coupons[0];
      console.log('parsed coupons = ', coupons);

      return coupons.map((coupon) => {
        console.log('coupon item: ', coupon);
        return (
           <CouponItem key={coupon.id} coupon={coupon} />
        );
      });
    }

  }

  render() {
    console.log('returned coupons: ', this.props.coupons);
    return (
      <ul className="col-md-4 list-group">
        {this.renderCoupons()}
      </ul>
    );
  }
}

function mapStateToProps({ coupons }) {
  return { coupons };
}

export default connect(mapStateToProps)(CouponList);
